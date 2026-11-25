// Your Week in One Line — one line summing up the entrant's week,
// written to /output/entry.txt. Deterministic, zero dependencies, no
// network: the file on disk is exactly what gets graded, with no
// trailing newline. Gate: 1–100 characters, so the line is kept short
// on purpose — 94 characters, every word earning its place.
import { mkdirSync, writeFileSync } from "node:fs";

export const LINE =
  "I built a warung, confessed to my sister, and lost my password — all before the 15-minute cap.";

export const OUTPUT_DIR =
  process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
export const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

export function run(): string {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  return OUTPUT_PATH;
}

run();
