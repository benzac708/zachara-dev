#!/usr/bin/env bash
set -u

command=""
label="command"
model="${CI_AI_MODEL:-opencode/big-picle}"
workspace="${GITHUB_WORKSPACE:-$PWD}"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --command)
      command="${2:-}"
      shift 2
      ;;
    --label)
      label="${2:-command}"
      shift 2
      ;;
    --model)
      model="${2:-$model}"
      shift 2
      ;;
    --workspace)
      workspace="${2:-$workspace}"
      shift 2
      ;;
    *)
      printf 'Unknown argument: %s\n' "$1" >&2
      exit 2
      ;;
  esac
done

if [[ -z "$command" ]]; then
  printf 'Missing required --command\n' >&2
  exit 2
fi

log_dir="${RUNNER_TEMP:-/tmp}/ai-repair"
mkdir -p "$log_dir"

slug=$(printf '%s' "$label" | tr '[:space:]/' '_' | tr -cd '[:alnum:]_.-')
stdout_log="$log_dir/${slug}.stdout.log"
stderr_log="$log_dir/${slug}.stderr.log"

run_once() {
  : >"$stdout_log"
  : >"$stderr_log"
  bash -lc "$command" >"$stdout_log" 2>"$stderr_log"
}

make_prompt() {
  python - "$label" "$command" "$stdout_log" "$stderr_log" <<'PY'
import pathlib
import sys

label, command, stdout_path, stderr_path = sys.argv[1:5]
stdout = pathlib.Path(stdout_path).read_text(errors='replace')
stderr = pathlib.Path(stderr_path).read_text(errors='replace')

def trim(text: str, limit: int = 12000) -> str:
    if len(text) <= limit:
        return text
    return text[:limit] + "\n...<trimmed>..."

print(f"You are fixing a CI failure in the {label} step.\n")
print("Rules:")
print("- Make the smallest safe change.")
print("- Do not loop or keep iterating.")
print("- Do not touch unrelated files.")
print("- After your edit, the CI command will run exactly once more.")
print("- Prefer deterministic fixes over clever ones.\n")
print(f"Command:\n{command}\n")
print("STDOUT:")
print(trim(stdout))
print("\nSTDERR:")
print(trim(stderr))
PY
}

if run_once; then
  printf 'PASS: %s\n' "$label"
  exit 0
fi

first_status=$?

if [[ "${CI_AI_DISABLE:-0}" == "1" ]]; then
  printf 'AI repair disabled; showing captured logs for %s\n' "$label" >&2
  printf '%s\n' "--- STDOUT ---" >&2
  cat "$stdout_log" >&2
  printf '%s\n' "--- STDERR ---" >&2
  cat "$stderr_log" >&2
  exit "$first_status"
fi

if ! command -v opencode >/dev/null 2>&1; then
  printf 'opencode not found; showing captured logs for %s\n' "$label" >&2
  printf '%s\n' "--- STDOUT ---" >&2
  cat "$stdout_log" >&2
  printf '%s\n' "--- STDERR ---" >&2
  cat "$stderr_log" >&2
  exit "$first_status"
fi

prompt=$(make_prompt)

opencode run \
  --dir "$workspace" \
  --model "$model" \
  --title "CI repair: $label" \
  --prompt "$prompt" \
  --format default

if run_once; then
  printf 'PASS_AFTER_AI: %s\n' "$label"
  exit 0
fi

second_status=$?
printf 'FAILED_AFTER_AI: %s\n' "$label" >&2
printf '%s\n' "--- STDOUT ---" >&2
cat "$stdout_log" >&2
printf '%s\n' "--- STDERR ---" >&2
cat "$stderr_log" >&2
exit "$second_status"
