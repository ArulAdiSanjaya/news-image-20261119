[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/ArulAdiSanjaya/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/ArulAdiSanjaya/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

# The World Today — 19 November 2026 in one image

Entry for make.fun's ["Sum up 19 November's world news in one image" bounty](https://make.fun/bounty/news-image-20261119).

One newspaper-style image summing up Thursday 19 November 2026:

- **Shenzhen summit** — Xi hosts Trump and Putin at the first-ever face-to-face
  US–China–Russia summit; the joint statement pledges nuclear war "must never
  be fought", with Ukraine topping the talks.
- **The Hague** — the International Court of Justice rules 9–6 that Myanmar
  committed genocide against the Rohingya, in the case brought by Gambia.
- **COP31, Antalya** — fossil fuels are cut from the draft UN climate deal,
  sparking outcry as ministers try to unblock the talks.
- **Markets** — Anthropic's record-breaking IPO soars about 34% on debut,
  nearing a $2 trillion valuation, even as AI stocks slide.
- **The Gulf** — Iran widens attacks around Hormuz (Kuwait and Bahrain hit);
  the IEA warns the crisis is disrupting global energy security.
- In the ticker: the EU's proposed €45bn loan for Ukraine, unrest across 28
  districts of Bangladesh, a record $190.4M Van Gogh sale, a migrant boat
  capsizing off Senegal, and the worldwide launch of GTA VI.

Stories were cross-checked on the day across Reuters, Dow Jones, Le Monde and
daily world-news briefings. The image is drawn programmatically
(`build_image.py`, PIL) so every headline stays crisp at judging size.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) verifies `entry.png` is a PNG or
JPEG within the bounty's caps (1 MiB, 1024×1024), copies it to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`), and checks the copy is
byte-identical — the grader runs it twice and both runs must agree.

Rebuild the image with `python3 build_image.py`.
