import { mkdirSync, writeFileSync } from "node:fs";

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
