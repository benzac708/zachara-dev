import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const publicDir = path.join(rootDir, "public");
const sourcePath = path.join(publicDir, "favicon.svg");

const pngTargets = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["favicon-48x48.png", 48],
  ["favicon-64x64.png", 64],
  ["apple-touch-icon.png", 180],
  ["pwa-192.png", 192],
  ["pwa-512.png", 512],
];

const icoSourceFiles = [
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon-48x48.png",
  "favicon-64x64.png",
].map((file) => path.join(publicDir, file));

const sourceSvg = await readFile(sourcePath);

for (const [fileName, size] of pngTargets) {
  await sharp(sourceSvg, { density: 1024 })
    .resize(size, size)
    .png()
    .toFile(path.join(publicDir, fileName));
}

execFileSync("convert", [...icoSourceFiles, path.join(publicDir, "favicon.ico")], {
  stdio: "inherit",
});

await writeFile(
  path.join(publicDir, "site.webmanifest"),
  JSON.stringify(
    {
      name: "zachara.dev",
      short_name: "zachara",
      description: "Bernard Zachara - DevOps Engineer",
      start_url: "/",
      display: "standalone",
      background_color: "#000000",
      theme_color: "#10b981",
      icons: [
        {
          src: "/pwa-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/pwa-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    null,
    2,
  ) + "\n",
);
