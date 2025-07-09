import http from "node:http";
import { createRequestListener } from "@mjackson/node-fetch-server";
import send from "send";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { handler } from "./handler-entry";

const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/assets")) {
    return send(req, req.url.slice("/assets".length), {
      root: join(dirname(fileURLToPath(import.meta.url)), "./client"),
    }).pipe(res);
  }
  return createRequestListener(handler)(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
