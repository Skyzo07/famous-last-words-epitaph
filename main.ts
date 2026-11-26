import * as fs from "node:fs";

// Winner epitaph (36 chars, byte-identical to candidates.md top 1):
// "I went to the light. It was a train."
// One line, no trailing newline, so the gate sees exactly 36 characters.
const ENTRY = "I went to the light. It was a train.";

if (ENTRY.length < 1 || ENTRY.length > 150) {
  throw new Error(`entry must be 1-150 chars, got ${ENTRY.length}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
