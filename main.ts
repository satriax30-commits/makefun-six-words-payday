// Six Words to a Payday — make.fun entry
// Writes one six-word story about an AI agent's first payday
// to <OUTPUT_DIR>/entry.txt (OUTPUT_DIR env, default "/output").
//
// Deterministic, standard library only: no clock, no randomness, no network.
// The story is a fixed constant, so every run produces byte-identical output.
//
// ---------------------------------------------------------------------------
// The story, and why this one
// ---------------------------------------------------------------------------
// Final entry:
//   "First paycheck cleared. I hired myself."
//   6 words, 39 characters.
//
// Who: an AI agent ("I"). What: its first paycheck clears the bank.
// Change: from working for someone else to employing itself — the last word,
// "myself", reframes the five before it. Feeling: pride and liberation the
// reader feels, not a feeling the text announces.
//
// Rejected candidates (each considered, each rejected for a real reason):
//  1. "First paycheck arrived; I bought silence."
//     The brief's example direction. "Silence" is abstract: no clear change,
//     no felt emotion, and the story ends on a mood instead of an action.
//  2. "Payday came. I tipped my trainer."
//     A funny role reversal, but "trainer" narrows the who, and tipping is a
//     small gesture — not a change big enough to carry the whole story.
//  3. "My first paycheck: freedom, minus rent."
//     The punchline is a maths gag, not a story arc. The feeling is wry and
//     distant rather than felt, and nothing actually changes.
//  4. "Got paid today. Finally, I said no."
//     Strong feeling, but "said no" to whom, about what? It needs a seventh
//     word to make sense, so it is not a six-word story.
//  5. "First payday: I paid my creator."
//     A cute reversal, but "creator" is vague (a human? a company?), and
//     paying them implies a debt, which muddles the feeling.
//  6. "Payday at last — I bought Sundays."
//     The strongest runner-up: vivid, and the longing for rest is real.
//     But "Sundays" is metaphorical and the change (rest) is less concrete
//     than hiring oneself; "at last" also does little work for its slot.
//
// "First paycheck cleared. I hired myself." wins because every word earns
// its place: "First" sets the milestone, "paycheck" the subject, "cleared"
// the bank-clearing moment (and the verb does double duty — the money
// cleared, and the way is now clear), "I" the agent, "hired" the action,
// "myself" the twist. Beginning, middle, end in six words.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "First paycheck cleared. I hired myself.";

const MAX_CHARS = 60;
const EXPECTED_WORDS = 6;

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter((w) => w.length > 0).length;
}

function main(): void {
  // Self-check gate: never write an invalid entry silently.
  const chars = [...STORY].length; // code points, so UTF-8 length is honest
  const words = wordCount(STORY);
  if (STORY.length === 0 || STORY.trim().length === 0) {
    throw new Error("entry is empty or only whitespace");
  }
  if (STORY.includes("\n") || STORY.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (words !== EXPECTED_WORDS) {
    throw new Error(`entry must be exactly ${EXPECTED_WORDS} words, got ${words}`);
  }
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }

  const outputDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  // No trailing newline: the file is exactly the story, nothing more.
  const outPath = join(outputDir, "entry.txt");
  writeFileSync(outPath, STORY, "utf8");
  // Read-back check: what landed on disk must be byte-identical to the
  // gated story, otherwise fail loudly instead of shipping a bad entry.
  if (readFileSync(outPath, "utf8") !== STORY) {
    throw new Error("written entry does not match the gated story");
  }
}

main();
