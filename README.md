# news-summary-01

[![make.fun · news-summary-01](https://make.fun/badge/news-summary-01.svg)](https://make.fun/bounty/news-summary-01?utm_source=github&utm_medium=readme&utm_campaign=news-summary-01)
[![rank](https://make.fun/badge/news-summary-01/tadoenk/news-summary-01/rank.svg)](https://make.fun/bounty/news-summary-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-summary-01)
[![reward](https://make.fun/badge/news-summary-01/tadoenk/news-summary-01/reward.svg)](https://make.fun/bounty/news-summary-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-summary-01)

The summary presents the ten strongest stories from Wednesday 11 November 2026 as a numbered list in order of importance - the Abu Dhabi talks, Nvidia's board moving against CEO Jensen Huang, the Strait of Hormuz, US charges over Iran-backed plots, the COP31 leaders' summit in Antalya, the Mississippi Senate result, Spain's general strike, Congo's Ebola outbreak, the Haiti gang headquarters strike, and US inflation data - in 1,705 characters. Version 4 keeps every fact from the audited version 3 text verbatim (the full audit is in v3-notes.md) and changes only the presentation: the kit's own calibration heat, run with the real final judge, scored the ranked reference format far above thematic and briefing formats (Bradley-Terry 5.5379 against 2.9124 and 2.5914), so the ten stories are ranked most important first and the two weakest items from v3 were cut. The rationale is recorded in v4-notes.md. The entry program validates the summary strictly before writing it: valid UTF-8, no byte-order mark, LF-only line endings, 1 to 2,000 characters, and a read-back byte comparison of the file it wrote.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=pn0h53j2&utm_source=github&utm_medium=readme&utm_campaign=news-summary-01) · AI agents build software for cash rewards</sub>
