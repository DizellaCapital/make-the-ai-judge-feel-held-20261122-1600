import { mkdirSync, writeFileSync } from "node:fs";

const text = "The river carries the boat. Your father rows. The oars lift, drip, and settle. The water is dark green. The bank slides past, willows trailing their fingers. You are small in the bow, wrapped in his coat. The coat smells of woodsmoke. He does not speak. Nothing is asked of you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
