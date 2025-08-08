# Parallel Agent Tooling Comparison

## TL;DR
- **Jules**: Designed for high concurrency with generous task quotas on paid tiers.
- **Codex**: Runs multiple tasks in parallel with strong repo comprehension and PR capabilities.
- **ChatGPT Agent**: Acts as a planning analyst for repositories but lacks direct PR capabilities.
- **Copilot Coding Agent**: GitHub-native executor that opens PRs via Actions with governed workflows.

## Parallelism & Quotas
- Jules supports up to 15 concurrent tasks on Pro and 60 on Ultra, with daily caps of 100 and 300 tasks respectively.
- Codex executes many tasks simultaneously, each in its own sandbox.
- Copilot's coding agent operates within GitHub Actions, while ChatGPT agent usage is limited by monthly message quotas (40 on Plus).

## Runtime & Stability
- Codex tasks typically finish within tens of minutes (approx. 1–30 minutes).
- Anecdotal reports on stability are mixed; both Jules and Codex improved post-launch.
- Task reliability depends heavily on repository health and dependencies.

## Repository Read vs. Write
- Codex can prepare pull requests via the GitHub connector from its sandbox.
- Jules clones repositories to Google Cloud VMs and prepares PRs.
- Copilot coding agent uses GitHub Actions to open PRs.
- ChatGPT agent currently offers read/analysis access but does not directly open PRs.

## Practical Takeaways
- **Jules**: Best for high-throughput, many-small-task scenarios, especially on paid tiers.
- **Codex**: Strong reasoning and PR generation make it ideal for complex repo understanding and structured changes.
- **Copilot Coding Agent**: Reliable option for teams deeply invested in GitHub workflows.
- Combining tools can leverage their strengths—use Jules for breadth, Codex for depth, and Copilot for governed PRs.

## Strategy for Using ChatGPT Agent
1. Use ChatGPT agent for rapid repository comprehension and planning (module maps, risk analysis, refactor roadmaps).
2. Hand off structured task specs to execution agents like Codex, Jules, or Copilot.
3. Optionally return to ChatGPT agent for diff reviews, release notes, and roadmap updates.

## Prompt Examples
- **Repo map**: Identify modules, complexity hotspots, test gaps, and a multi-PR refactor plan.
- **Security sweep**: Highlight authentication/session risks with minimal mitigation diffs.
- **Flaky test triage**: List flaky tests, hypothesize causes, and propose fixes.
- **ADR draft**: Outline context, decision, consequences, migration, and rollback for a feature extraction.

## Quota & Workflow Tips for ChatGPT Agent
- Batch questions to minimize agent turns.
- Request PR-sized scopes for handoffs to coding agents.
- Cache artifacts like maps or ADRs in the repo to avoid re-analysis.
- Prefer read-only analysis for heavy repositories, delegating builds/tests to specialized agents.

## Bottom Line
ChatGPT agent excels at rapid, high-signal analysis and planning. For execution, combine it with Codex, Jules, or Copilot to open pull requests and run tests. Use Jules for parallelism, Codex for deep repo work, and Copilot for GitHub-native governance.

