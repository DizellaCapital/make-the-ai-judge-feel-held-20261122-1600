import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const text: string =
  "Your grandmother holds you on the night train. The carriage sways. " +
  "Hills slide past the window. These hills were seabed once, shells " +
  "pressed into stone, and now they hold their quiet. You are small " +
  "against her shoulder, her shawl smelling of cedar. The night carries " +
  "you both.";

const codePoints: number = [...text].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry is ${codePoints} code points, must be 1-280`);
}
if (text.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

// Read the file back and confirm it holds exactly the text above, so a
// truncated or re-encoded write can never slip through silently.
const written: string = readFileSync("/output/entry.txt", "utf8");
if (written !== text) {
  throw new Error("entry.txt does not match the intended text");
}
