// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" class="scroll-smooth">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚡</text></svg>" />
          <link rel="canonical" href="https://zachara.dev/" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="zachara.dev" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@benzac708" />
          {assets}
        </head>
        <body class="bg-slate-900 text-slate-200 min-h-screen flex flex-col" id="app">
          {children}
          {scripts}
        </body>
      </html>
    )}
  />
));
