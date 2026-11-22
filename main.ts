import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The train moves slowly through the dark. Your mother holds you against her shoulder. The wheels say the same word again and again. Her coat smells of wool and cold air. The window is black glass. Towns pass like slow sparks. You are warm inside the sound.";

// The bounty requires 1–280 Unicode code points; refuse to write an out-of-range text.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} code points, outside the 1–280 cap`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
