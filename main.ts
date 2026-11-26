// Office Artifacts: The One-Line Placard Contest — make.fun bounty u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
// Writes one museum placard for an ordinary stapler, treated as an ancient artifact, to /output/entry.txt.
// Gate: UTF-8 text, 1 to 180 characters, not only whitespace, exactly one line.
// Deterministic: no network, no randomness, no input — the same line every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Stapler, c. 2019. Steel, rust, and resentment. Used in the Ritual of Binding, in which a clerk bound two sheets and at once regretted the commitment. Donated by Accounts.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
