# GSO (Global Software Optimization) Summary

- **Source:** [Epoch AI Benchmarking Hub](https://epoch.ai/benchmarks)
- **Leaderboard:** The leaderboard at [https://gso-bench.github.io/leaderboard.html](https://gso-bench.github.io/leaderboard.html) loads its data dynamically, so it was not possible to extract the agent rankings.

## Description

Global Software Optimization (GSO) is a benchmark that aims to measure a model’s ability to improve the performance of a codebase by modifying its code. Performance engineering is a challenging part of software engineering that typically requires specialized knowledge and expertise. Implementing successful optimizations also requires strong reasoning abilities that remain coherent during long exploratory paths while developing them. These factors make optimization a challenging task for models by depending on more than the narrow coding abilities that many other benchmarks evaluate.

A model’s score is the percentage of questions where it was able to program an optimization that sped the program up by at least 95% of that which the original Github commit had achieved.

## Agents Mentioned

The `epoch.ai` page does not list specific agents for this benchmark, as it seems the data was intended to be sourced from the leaderboard. The page does mention that the language models were enabled to behave as agents using **OpenHands**.
