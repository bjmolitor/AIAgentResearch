# Mobile AI Agent Ratings

## TL;DR
Yes—there are solid coding and general AI agents on mobile. On Android, the most effective mix today is GitHub Copilot (in the GitHub app), Replit (with AI agent/Ghostwriter), Claude, Gemini, and Microsoft Copilot. The ChatGPT "Codex" experience is currently more mature on iOS; on Android you can use ChatGPT’s mobile app (where features may roll out gradually) or the mobile web.

## Top picks (Android)

1. **GitHub Copilot (Mobile)**
   - **Why it’s good:** Integrated in the GitHub app; quick code Q&A and issue triage on the go. Emerging “agentic” workflows (clone, run tests/builds, propose changes) accessible via web/CLI and usable from mobile contexts. Ideal if your repos already live on GitHub.
   - **Caveats:** Mobile chat/agent has a smaller working context than a desktop IDE; heavy edits still feel better on desktop.

2. **Replit (Mobile App)**
   - **Why it’s good:** Full mobile IDE + hosting; create, run, and deploy from your phone. AI agent (Ghostwriter) for code generation, fixes, and quick experiments. Great for prototypes, learning, and small projects.
   - **Caveats:** Best inside Replit projects; less convenient for very large, private enterprise monorepos.

3. **ChatGPT (OpenAI) — Tools & "Codex"**
   - **Why it’s good:** Strong code reasoning, file uploads, and Code Interpreter-like workflows, also on mobile. "Codex" (the new agent mode) is fully available on iOS and partially/gradually visible on Android. If the app feature isn’t visible on Android, you can still use chat.openai.com in the mobile browser for advanced tooling.
   - **Caveats:** The most polished "Codex" experience is currently iOS-first; Android users may see staggered rollouts.

4. **Claude (Anthropic) — Android App**
   - **Why it’s good:** Excellent reasoning for refactors, debugging strategies, and architecture discussions. Official Android app with voice; strong at producing clean, actionable plans.
   - **Caveats:** No built-in repo runner; you’ll paste snippets or use desktop automations for execution.

5. **Google Gemini + “Jules” (Coding Agent)**
   - **Why it’s good:** Deep Android integration; fast for everyday queries. “Jules” (Google’s coding agent) aims at async coding tasks (e.g., small fixes, GitHub issue flows, test summaries).
   - **Caveats:** Feature depth varies by plan/region and rollout phase (Labs/Advanced).

6. **Microsoft Copilot (Mobile)**
   - **Why it’s good:** Capable generalist with data/automation skills and Microsoft 365 tie-ins. Handy for shell-style snippets, documentation, and light code transformations.
   - **Caveats:** Not a full repo-level agent on mobile; strongest when paired with desktop tooling.

### Runner-up / niche

* **CodeSnack IDE** — A true mobile IDE (Android/iOS) with many languages and on-device builds. No first-party agent; pairs well with ChatGPT/Claude for generation, while CodeSnack handles editing/building on the phone.

## Top picks (iOS)

1. **ChatGPT “Codex” (iOS)**
   - **Why it’s good:** The most complete agent-on-phone workflow today. Includes file uploads, code execution, and deep reasoning directly in the iOS app.
   - **Caveats:** Requires a paid plan for higher message caps; desktop still better for large file manipulation.

2. **GitHub Copilot (Mobile)**
   - **Why it’s good:** Same GitHub app integration as Android, with frequent feature parity. Useful for reviewing PRs, answering questions, and small fixes.
   - **Caveats:** Limited context window; large edits remain desktop-friendly.

3. **Replit (iOS App)**
   - **Why it’s good:** Full IDE with Ghostwriter and deployment support on iPhone/iPad. Useful for prototyping or teaching from a tablet.
   - **Caveats:** Large repositories can feel cramped; offline support is limited.

4. **Claude (iOS App)**
   - **Why it’s good:** Offers the same strong reasoning and planning as the Android app. Good for design discussions and code reviews.
   - **Caveats:** Lacks native execution or repo integration; you rely on copy/paste or desktop automation.

5. **Microsoft Copilot (iOS)**
   - **Why it’s good:** Helpful for quick scripts, documentation lookups, and Microsoft 365 automation. Works well with iPad multitasking.
   - **Caveats:** No direct access to Git repos; primarily a chat assistant.

### Runner-up / niche

* **CodeSnack IDE** — Available on iOS with on-device compilation. Combine with another AI chat app for code generation.

## Mobile development ratings (1–5)

| Agent | Android | iOS | Overall | Notes |
|---|---|---|---|---|
| GitHub Copilot (Mobile) | 4.5 | 4.5 | 4.5 | Best for repos already on GitHub; limited editing scope |
| Replit Mobile | 4 | 4 | 4 | Full IDE with Ghostwriter; great for prototypes |
| ChatGPT “Codex” | 3.5 | 4.5 | 4 | Android features lag iOS; strongest reasoning on mobile |
| Claude | 4 | 4 | 4 | Excellent planning; lacks built-in execution |
| Google Gemini + Jules | 3.5 | 3 | 3.5 | Deep Android ties; iOS app is more limited |
| Microsoft Copilot | 3 | 3 | 3 | Useful for small snippets; not repo-focused |
| CodeSnack IDE | 3 | 3 | 3 | Good mobile IDE; pair with external AI for full workflow |

## Bottom line

For Android, the most effective combo right now is GitHub Copilot (Mobile) + Replit + Claude/Gemini. ChatGPT’s “Codex” is strong but more mature on iOS today. If you want true repo-level work from your phone, lean on Copilot within the GitHub ecosystem; for greenfield experiments, Replit is the fastest path.
