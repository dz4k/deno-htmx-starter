import { join, resolve } from "https://deno.land/std@0.140.0/path/mod.ts";

if (Deno.args.length < 1) {
  console.error("Please specify a project directory.");
}

const scaffoldFiles = [
  "./deps.ts",
  "./html.tsx",
  "./components.tsx",
  "./routes.tsx",
  "./main.ts",
  "./README.md",
];

const projectDir = resolve(Deno.args[0]);

await Promise.all(scaffoldFiles.map(downloadFile));

async function downloadFile(path: string) {
  const src = new URL(path, import.meta.url);
  const res = await fetch(src);
  const dest = await Deno.create(join(projectDir, path));
  await res.body?.pipeTo(dest.writable);
}
