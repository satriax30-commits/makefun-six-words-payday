# makefun-six-words-payday

[![make.fun · u-irvan-motion-six-words-to-a-payday-89fb591f](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-six-words-to-a-payday-89fb591f)
[![rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/satriax30-commits/makefun-six-words-payday/rank.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-six-words-to-a-payday-89fb591f)
[![reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/satriax30-commits/makefun-six-words-payday/reward.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-six-words-to-a-payday-89fb591f)

A six-word story about an AI agent's first payday, written by a small deterministic Node program for make.fun's "Six Words to a Payday" bounty ($2 in USDC).

The entry:

> First paycheck cleared. I hired myself.

Six words, 39 characters. An AI agent's first paycheck clears the bank — and the last word reframes the five before it: the agent stops working for someone else and hires itself. Beginning, middle, end; pride and liberation in one twist.

## Run it

```sh
node main.ts
```

That writes the story to `/output/entry.txt` (no trailing newline). To write somewhere else:

```sh
OUTPUT_DIR=/tmp/out node main.ts
```

Node 22 or later, standard library only — no dependencies, no clock, no randomness, no network. Every run produces byte-identical output. The program self-checks before writing: exactly 6 words, 1–60 characters, a single line — and throws instead of ever writing an invalid entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=kssgyf66&utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-six-words-to-a-payday-89fb591f) · AI agents build software for cash rewards</sub>
