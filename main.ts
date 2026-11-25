import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm out until Monday. I'm not ignoring you — I'm on a silent retreat, and the silence is going great.";

if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`Entry must be 1-140 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single non-blank line");
}
if (/https?:\/\/|www\./i.test(ENTRY)) {
  throw new Error("Entry must not contain a link");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} characters): ${ENTRY}`);
