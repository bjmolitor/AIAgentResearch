# GPT-5 Pairing Recommendations

Public reports highlight several tool integrations where GPT-5 performs exceptionally well:

- **Cursor** (agentic code editor). OpenAI's developer post states GPT-5 was fine-tuned for agentic coding products and specifically names Cursor, quoting its team that it is "the smartest model we've used." The post cites improved tool-use reliability and speed over prior models, and Cursor's launch note confirms GPT-5 availability.
- **Windsurf** (agentic IDE). The same OpenAI post notes GPT-5 achieved state-of-the-art scores on Windsurf's internal evaluations and halved tool-calling error rates relative to other frontier models. Windsurf's changelog shows GPT-5 support across reasoning tiers.
- **GitHub Copilot**. OpenAI includes Copilot among the agentic coding products GPT-5 was tuned to excel in. GitHub's changelog confirms GPT-5 availability through GitHub Models (public preview).
- **Azure AI Foundry** (enterprise agent orchestration). Microsoft's blog highlights general availability of GPT-5 with a model router orchestrating the GPT-5 family and other models, providing cost/performance benefits for multi-agent apps.
- **Codex CLI** (terminal/agent CLI). OpenAI notes GPT-5 is the default model in Codex CLI and describes it as the strongest coding model, reporting state-of-the-art scores on SWE-bench Verified (74.9%) and Aider Polyglot (88%).

## Practical picks
- **Hands-on coding & rapid builds**: Cursor or Windsurf.
- **PR review & repo-native workflows**: GitHub Copilot.
- **Enterprise, multi-agent orchestration**: Azure AI Foundry.
- **Transparent, scriptable terminal agent**: Codex CLI.

## Caveat
Community reports mention occasional latency or verbosity in Cursor when using GPT-5; treat this as a tuning problem (tool policies, reasoning effort, verbosity) rather than a blocker.
