// Seventeen Syllables of Debugging — make.fun entry.
// Writes one haiku about debugging (5-7-5) to $MAKEFUN_OUTPUT_DIR/entry.txt
// (fallback /output/entry.txt). Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const haiku = [
  "cursor blinks at three",
  "one log line gives me away",
  "and the bug was me",
].join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku, "utf8");
