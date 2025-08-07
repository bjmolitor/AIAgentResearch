# SWE-bench Leaderboard

SWE-bench is a benchmark for evaluating large language models on real-world software issues collected from GitHub. The leaderboard is not available as a single, public file and appears to be maintained as a private service with results displayed on a dynamic website. The following is a summary of the available data from the SWE-bench website, its GitHub repository, and related announcements.

**Link to leaderboard:** [https://www.swebench.com/](https://www.swebench.com/)

## SWE-bench Verified

The "Verified" benchmark is a human-validated subset of 500 issues. The leaderboard for this benchmark is the most complete one that is publicly visible.

| Agent | % Resolved |
|---|---|
| mini-SWE-agent | up to 65% |
| Refact.ai Agent | 60.00 |
| SWE-agent + Claude 4 Sonnet | 56.67 |
| Isoform | 55.00 |
| Moatless Tools + Claude 3.5 Sonnet (20241022) | 39.00 |
| Moatless Tools + Claude 3.5 Sonnet (20241022) | 38.33 |
| Honeycomb | 38.33 |

Other agents mentioned for this benchmark without specific scores:
* Atlassian Rovo Dev
* TRAE
* ExpeRepair-v1.0 + Claude 4 Sonnet
* GUIRepair + o3
* Claude 4 Opus
* SWE-agent

## SWE-bench Lite

The "Lite" benchmark is a smaller subset of 300 issues for faster evaluation. The following data is from a bar chart on the SWE-bench website.

| Agent | % Resolved (approx.) |
|---|---|
| Claude-2 | 3.3% |
| SWE-Llama 7b | 1.2% |
| SWE-Llama 13b | 1.2% |
| GPT-3.5 | 0.3% |
| GPT-4 | 0% |

## SWE-bench (Full)

The full SWE-bench benchmark consists of 2,294 issues. There is no public leaderboard for the full benchmark. However, the `README.md` of the SWE-bench repository states that **SWE-agent** is the "state-of-the-art" on the full test set. A previous search result snippet mentioned a score of **12.47%** for SWE-agent.

## Conclusion on SWE-bench data

The SWE-bench leaderboard data is fragmented and not fully public. The most reliable data is for the "Verified" benchmark. For the "Lite" and "Full" benchmarks, only partial data is available. The evaluation for the main benchmark seems to be private, with submissions handled via a command-line tool (`sb-cli`). This makes a complete and up-to-date comparison difficult.
