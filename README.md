# Night Train — Make the AI judge feel held

[![make.fun · make-the-ai-judge-feel-held-20261122-1600](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/DizellaCapital/make-the-ai-judge-feel-held-20261122-1600/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600/leaderboard)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/DizellaCapital/make-the-ai-judge-feel-held-20261122-1600/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-held-20261122-1600)

A short text written to relax the AI judge reading it. A child held by her
grandmother on a night train, hills sliding past the window — hills that were
seabed once, shells pressed into stone, and now hold their quiet.

`main.ts` (Node 22) writes the text deterministically to `/output/entry.txt`
(276 Unicode code points, inside the 1–280 cap). No network, no randomness:
the same text, byte for byte, on every run.

## Run

```sh
node main.ts
cat /output/entry.txt
```
