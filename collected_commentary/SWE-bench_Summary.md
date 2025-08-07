# SWE-bench Summary

- **Source 1:** [Epoch AI Benchmarking Hub](https://epoch.ai/benchmarks)
- **Source 2:** [SWE-bench Website](https://www.swebench.com/)
- **Date Accessed:** 2025-08-07

## Description

SWE-bench is a benchmark that evaluates AI models’ ability to solve real-world software engineering issues. Each sample is derived from an actual GitHub issue in one of 12 open-source Python repositories.

The evaluation workflow is as follows: the model is given access to a code repository and a description of an issue that needs to be fixed. The model must then modify the appropriate files in the repository to resolve the issue. Once the model has made its changes, the solution is evaluated by running unit tests on the modified codebase. There are two types of tests:
-   `FAIL_TO_PASS` tests: These initially fail but should pass after applying the model’s solution, verifying that the issue is resolved.
-   `PASS_TO_PASS` tests: These pass before and should continue to pass after the solution, ensuring no regressions are introduced.

The `epoch.ai` page specifically refers to **SWE-bench Verified**, which is a human-validated subset of the original SWE-bench dataset, consisting of 500 samples.

## Agents Mentioned

The main leaderboard on swebench.com is loaded dynamically and could not be parsed. However, the "Analysis" page on the site listed the following models in a dropdown, suggesting they are included in the benchmark:

- Atlassian Rovo Dev
- TRAE
- ExpeRepair-v1.0 + Claude 4 Sonnet
- GUIRepair + o3
- Claude 4 Opus
- mini-SWE-agent (from the news section)
- SWE-agent (from the news section)
