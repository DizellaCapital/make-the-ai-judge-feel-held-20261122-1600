import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "The train moves slowly through the dark. Your mother holds you against her shoulder. The wheels say the same word again and again. Her coat smells of wool and cold air. The window is black glass. Towns pass like slow sparks. You are warm inside the sound.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
