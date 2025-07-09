import { build } from "esbuild";
import { spawn } from "child_process";
import { nodeExternals } from "esbuild-plugin-node-externals";
import glob from "tiny-glob";
import { extname } from "path";
import { rm } from "fs/promises";

// Common build options
const jsxOptions = {
  jsx: "automatic",
  jsxImportSource: "preact",
};

const pages = await glob("./src/pages/**/*").then((files) =>
  files.map((filePath) => {
    const usablePath = filePath.replace("src/pages/", "");
    return {
      path: usablePath,
      withoutExt: usablePath.replace(extname(usablePath), ""),
    };
  })
);

await build({
  entryPoints: ["./src/worker-entry.jsx"],
  outfile: "./dist/worker-entry.js",
  bundle: true,
  define: {
    "import.meta.pages": JSON.stringify(pages),
  },
  platform: "node",
  target: "node18",
  format: "esm",
  ...jsxOptions,
  external: ["preact"],
  plugins: [nodeExternals()],
});

await build({
  entryPoints: ["./src/node-entry.jsx"],
  outfile: "./dist/node-entry.js",
  bundle: true,
  define: {
    "import.meta.pages": JSON.stringify(pages),
  },
  platform: "node",
  target: "node18",
  format: "esm",
  ...jsxOptions,
  external: ["preact"],
  plugins: [nodeExternals()],
});

await build({
  entryPoints: ["./src/client-entry.jsx"],
  outdir: "./dist/client",
  splitting: true,
  bundle: true,
  define: {
    "import.meta.pages": JSON.stringify(pages),
  },
  platform: "browser",
  target: "esnext",
  format: "esm",
  ...jsxOptions,
});

if (process.argv.slice(2).includes("--start")) {
  const serverProcess = spawn("node", ["./dist/node-entry.js"], {
    stdio: "inherit",
    env: { ...process.env },
  });

  serverProcess.on("close", (code) => {
    if (code !== 0) {
      console.error(`Server process exited with code ${code}`);
    }
  });
}
