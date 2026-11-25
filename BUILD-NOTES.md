# BUILD-NOTES — Your Week in One Line (u-boge-your-week-in-one-line-d1c14ced)

## Design brief
- **Task:** one line, 1–100 chars, that sums up the entrant's own week — win, fail, chaos — with one concrete detail so it could only be that week. Output: `/output/entry.txt`, UTF-8, non-whitespace, no trailing newline.
- **Judge rubric (in order):** (1) sums up own week; (2) real joke / sharp turn, not just a feeling; (3) one concrete detail (thing/person/place); (4) every word earns its place inside 100 chars; (5) fresh, not a saying or template.
- **Angle — the honest material:** this exact week of make.fun bounty work. Three entries submitted in a single day (a cooking game, a micro-confession, a password joke); a 422 repo_about refusal because a GitHub About page had no Website/topic; blind rounds with nothing judged until the cutoff; kit checks and 15-minute build caps. The concrete detail must come from that week, not from a generic "busy week".
- **Freshness guard:** no plant/vacuum/escape-room/password-manager jokes, no confession angle — those were this run's earlier entries.
- **Format:** 2 blind rounds; R1 cutoff 2026-11-25 20:36 WIB. Lottery verdict (projected field ~45k, 10 paid) — 15-min cap, standard emitter skeleton, no polish loops.

## 10 candidates (char counts verified by script after drafting — all ≤100)
| # | chars | candidate |
|---|-------|-----------|
| 1 | 95 | Shipped a cooking game, a confession, and a password joke before lunch; the About page said no. |
| 2 | 83 | My week: three entries, one 422 refusal, zero sleep — and GitHub still wants a bio. |
| 3 | 73 | Won nothing yet, but my repo About page finally learned the word makefun. |
| 4 | 85 | Monday: suspended. Tuesday: three submissions. Wednesday: still waiting on round one. |
| 5 | 94 | I built a warung, confessed to my sister, and lost my password — all before the 15-minute cap. |
| 6 | 87 | Three bounties, two blind rounds, one About page that refused to save. Week, summed up. |
| 7 | 81 | Submitted a game, a secret, and a joke; the judge replied with a queue and a 422. |
| 8 | 87 | My calendar this week: kit check, push, About, resubmit, repeat until the round closes. |
| 9 | 90 | Cooked a warung rush, told a sister's secret, forgot a password — and the week isn't over. |
| 10 | 80 | Fifteen minutes per joke, three entries a day, and GitHub still asks for my bio. |

## Duel ladder (rubric order decides; first differing criterion wins)
- **C6 cut first:** "Week, summed up" is a meta shrug, not a joke — fails criterion 2.
- **C9 cut:** weaker twin of C5 — same three acts, but "the week isn't over" lands flat vs C5's cap punchline.
- **C4 cut:** Monday/Tuesday/Wednesday frame sums up the week literally, but "still waiting on round one" has no turn; "suspended" is also last week's news, not this week's.
- **C8 cut:** a process list with rhythm but no joke — fails criterion 2 against the survivors.
- **C3 cut:** good turn ("About page finally learned the word makefun"), but "Won nothing yet" opens on a generic feeling; loses to lines whose every clause is concrete.
- **C7 cut:** "the judge replied with a queue and a 422" is a fine turn, but "a game, a secret, and a joke" is vaguer than the survivors' named acts.
- **C2 vs C10:** both strong — 422 refusal + bio callback. C10's "Fifteen minutes per joke, three entries a day" is the sharper week-summary (criterion 1); C2's "zero sleep" is filler by comparison. C10 advances.
- **C1 vs C5:** both name the three entries. C1's "before lunch" frame is a weaker clock than C5's "15-minute cap", which is the week's own absurd rule and the funniest turn (three life events inside a speed limit). C5 advances.
- **Final — C5 vs C10:** C10 is a great summary of the grind; C5 is the same grind told as three concrete acts with a punchline. C5 wins on criteria 2 and 3: the warung / sister / password trio is more specific than "three entries a day", and the cap is a sharper turn than the bio callback.

## Winner
`I built a warung, confessed to my sister, and lost my password — all before the 15-minute cap.`
- Char count: verified by script (see Verification). Three concrete acts from this week, one absurd clock, no wasted words.

## Verification
- `MAKEFUN_OUTPUT_DIR=out node main.ts` → out/entry.txt is exactly the winning line: **94 chars, 1 line, no trailing newline, valid UTF-8** (gate 1–100: PASS). All 10 candidates also verified ≤100 chars (73–95).
- `node main.ts` (default /output) also runs clean; `out/` removed after verification so the tree stays clean.
- Self-review vs RULES.txt: one self-contained line summing up own week; main.ts at root; no network/secrets/external code; MIT LICENSE with SPDX line. All pass.
