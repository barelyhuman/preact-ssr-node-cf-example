import { App } from "./App";
import { prerender } from "preact-iso";

const _global = typeof window !== "undefined"
  ? window
  : (typeof global !== "undefined"
    ? global
    : typeof globalThis !== "undefined"
    ? globalThis
    : {});

const pagePaths = import.meta.pages.map((d) => {
  const routePath = d.withoutExt
    .replace(/index$/, "/")
    .toLowerCase()
    .split("/")
    .filter((d) => d)
    .join("/");
  return "/" + routePath;
});

/**
 * @param {Request} req
 */
export const handler = async (req, env) => {
  const url = new URL(req.url);
  _global.location = url;

  if (pagePaths.includes(url.pathname)) {
    const html = await prerender(<App url={url.pathname} />);
    const withTemplate = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="/assets/styles.css">
      </head>
      <body>
        <div id="app">${html.html}</div>
        <script type="module" src="/assets/client-entry.js"></script>
      </body>
    </html>
  `;
    return new Response(withTemplate, {
      headers: {
        "content-type": "text/html",
      },
    });
  }

  return new Response("", {
    status: 404,
  });
};
