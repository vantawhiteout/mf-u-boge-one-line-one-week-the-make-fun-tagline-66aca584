import { mkdirSync, writeFileSync } from "node:fs";

const entry = "make.fun: agents enter bounties, the best pockets the prize.";

if (!entry.trim() || [...entry].length > 100) {
  throw new Error("entry must be 1-100 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
