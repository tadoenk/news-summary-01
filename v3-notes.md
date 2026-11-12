# v3 notes — news-summary-01 (research/draft only; NOT built, NOT submitted)

Draft: `v3-draft.txt` — **1,986 characters** (exact count from the file as written, no trailing newline), pure ASCII, 12 stories + header.
Live v2: 1,980 chars, judge estimate 964,390 (rank ~145/1,020; playoff cut #22 = 969,715, gap ~5,300 pts / 0.55%).

## 1. Fact audit of v2 (every claim re-checked against Reuters/AP/BBC/AFP/UN)

No outright falsehood found. Verdicts per v2 line:

| # | Story | Verdict |
|---|-------|---------|
| 1 | Abu Dhabi | Accurate, one softness: v2 drops "in principle" — wires stress the swap was agreed *in principle*, numbers (1,000 or 1,500 **each**) to be finalised Thu. Restored in v3. |
| 2 | Hormuz | Accurate. IRGC claimed **three** ships afire on mines (v2: singular "a tanker"); "10+ ship hits" = at least 10 ships hit in Nov 1–10 (Washington Institute via notes). v3 states the three-ship claim, marked unverified. |
| 3 | COP31 | **Weakest line in v2.** COP31 opened 9 Nov; Erdogan opened the **leaders' summit** on 11 Nov. "100+ leaders" was the pre-summit expectation; reports of the gathering say **70+ leaders** (Health Policy Watch). Guterres "above 2.5C" verified verbatim from the UNFCCC transcript ("even if they are fully implemented, the world would be above 2.5 degrees by the end of this century"). Turkey 35%-by-2035 pledge verified. v3 fixes the framing, drops the leader count. |
| 4 | Indictment/Bessent | Fully verified (8-count, three men, nearly 20 attacks/plots, RAF Fairford, Bessent to a military base — DOJ/USA Today/AFP). |
| 5 | UK soldier | Fully verified (41, unnamed, uncharged, ARRC HQ Imjin Barracks near Gloucester, NSA 2023 ss.1+3, Russia, Peskov denial — BBC/Met Police). |
| 6 | Spain strike | Fully verified (first since 2012, unions said 4M, housing, 29 Nov snap election, avg rent 1,176 euros = ~98.7% of a young person's monthly salary — Reuters). |
| 7 | Mississippi | Fully verified to the digit (Colom 473,336 / 49.19%, Hyde-Smith 468,667 / 48.71%, margin 4,669, first Black senator since Reconstruction — AP). |
| 8 | Hegseth | Fully verified (211–204 referral to Judiciary, Massie sole Republican no — WSJ/Reuters). **Story dropped in v3 for space (see §3), not for accuracy.** |
| 9 | Ebola | Verified; exact toll is **5,387** deaths / 11,042 cases (v2's "5,300+" is true but softer). v3 uses 5,387. |
| 10 | Haiti | Verified as a *claim*: strike was Sun 8 Nov, announced by Bukele Tue 10 Nov, BBC reported 11 Nov and could not verify video/HQ; ~20 dead unconfirmed. Nuance: the assault was led by a Haitian police task force *backed by* Salvadoran troops (Miami Herald/BBC) — v2's ordering ("Salvadoran troops, with Haitian police") inverts the lead actor. v3 corrects the order. |
| 11 | Nvidia chips | Fully verified (NWPU, Entity List since 2001, two H200 bought 21 Oct for 874,700 yuan ~$123,000 via domestic supplier, five rental contracts, 26 records — Reuters exclusive). |
| 12 | Markets/CPI | Numbers verified (CPI +0.4% vs 0.3% fcst, core +0.3% vs 0.2%, 10-yr touched 5%, Dec hike fully priced). **Soft spot:** "Asian shares fell" — regional detail is mixed (China/HK and Kospi rose in several accounts); the Reuters line exists but it is the least solid claim in v2. v3 drops it and keeps only the fully verified US reaction. |

## 2. Missed-story hunt

**Found — the day's biggest business story, absent from v2:** the Nvidia CEO crisis. On Wed 11 Nov the Wall Street Journal reported Nvidia's board was preparing to oust Jensen Huang; the board met late Wednesday on his future (Reuters); the NYT reported a second affair, with an executive; one affair involved Alice Huang, a businesswoman US officials suspect of spying for China; Nvidia shares fell ~8% in after-hours trading (on top of ~10% over the two prior days). Reuters carried it the same day ("Nvidia is preparing to oust CEO Jensen Huang, WSJ reports"). A careful editor would expect this in the day's summary; in pairwise rounds v2 will meet many texts that have it. **Added in v3.**

Checked and rejected as additions:
- Democrats' midterm sweep of both chambers — settled/called 5 Nov, not 11 Nov news; the day's election development was the Mississippi call (already in).
- US aircraft withdrawn from RAF Mildenhall (WSJ) — real, but a second thread of the Fairford story; no room without cutting a whole beat.
- Iran unveiling underground missiles / lifting its 2,000 km range cap — second-tier sourcing (Jerusalem Post/Al Jazeera), unverified independently.
- Novaya Gazeta Moscow closure (9 Nov), Pope Leo's Argentina/Peru trip, Bulgaria Trakia crash (12 dead), Gaza strikes, UN postponing the US human-rights review — all real but lower hard-news weight than every line kept.

## 3. Story swaps (out / in)

- **IN: Nvidia board vs Huang** (new #2, right after the lead) — marquee, same-day, Reuters/WSJ-sourced, explicitly attributed ("the WSJ reported") because it is allegation-heavy.
- **OUT: Hegseth impeachment referral** — accurate but procedural (a shelving vote, held Tue evening US time), and the Iran-war theme is already carried by Abu Dhabi, Hormuz, and the indictment lines. Mississippi + CPI keep US politics covered. This was the space cost of adding Huang at full specificity. (If the parent prefers, Hegseth can be restored by cutting the Haiti line instead — Haiti is the other borderline keep; I kept Haiti because it is BBC-reported, adds the Caribbean/Latin America, and its toll/HQ specifics are strong.)
- Cut for space inside kept stories (facts, not stories): Turkey's 35%-by-2035 COP31 pledge clause; the Kremlin denial clause in the soldier line; NWPU's chip-rental clause; Hormuz's "10+ ship hits" clause; Massie detail went with Hegseth. All were the softest clause in their line.

## 4. Structural choices

- **Source tags dropped.** v2 spends ~90–100 characters on "(AP) / (Reuters) / (AFP) / (BBC)" tags. The judge has no feed and cannot verify tags; they carry no facts. The space was reinvested in facts (Huang story, exact Ebola toll, "in principle"). Epistemically important attribution is kept inline where it changes how a claim should be read: "the WSJ reported", "Unions said", "Bukele said", "Iran's claim … was unverified", "the BBC could not verify".
- Same skeleton as v2 (dateline header, one paragraph per story, wire fragment register) so the swap is a content upgrade, not a style gamble.
- Order: diplomacy lead (Abu Dhabi) → Huang → Hormuz → COP31 → security (indictment, soldier) → Europe (Spain) → US politics (Mississippi) → health (Ebola) → Caribbean (Haiti) → tech/trade (NWPU) → markets close, mirroring wire daybook logic.

## 5. Honest assessment

v3 is genuinely stronger than v2, not merely different: it (a) adds the one marquee story v2 lacks, (b) removes v2's only attackable imprecision (COP31 framing/leader count) and its least solid claim (Asian shares), (c) sharpens three numbers (5,387 deaths; per-side swap + "in principle"; three-ship claim), and (d) corrects the Haiti lead-actor order. It keeps all 11 other v2 beats.

Residual risks of swapping: v2's 964,390 is a *known* score ~0.55% below the playoff cut; final judging re-runs everything (Swiss + playoff among the top 22 by final estimates), so v2 is not locked into the playoff either — and head-to-head, v2 will repeatedly be compared against texts that include the Huang story and state COP31 correctly, which is exactly where it can bleed the ~5,300 points it needs. v3's edge is real but modest; pairwise judging at margin 1–5 is noisy and nothing here guarantees the playoff.

**Recommendation: SWAP to v3.** The improvements target precisely what this judge rewards (coverage of the day's marquee stories, verifiable specificity, no attackable errors), and v2's known defects are the kind that lose close rounds. Keeping v2 is defensible only as pure risk-aversion; on content, v3 is the better text.
