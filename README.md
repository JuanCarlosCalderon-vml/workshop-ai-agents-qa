# Workshop: AI Agents & Skills for QA Automation

> From generic Copilot to Copilot that works like your team.

## What you'll learn

1. Configure Copilot with **global rules** (`copilot-instructions.md`)
2. Create **scoped instructions** that apply only to specific file types
3. Build **reusable skills** (step-by-step procedures)
4. Design **agents with sub-agents** that generate, review, and run tests
5. Create **prompt files** for reusable recipes

## Prerequisites

- [VS Code](https://code.visualstudio.com/download) (latest version)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) + [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) (extensions installed with active license)
- [Node.js 20+](https://nodejs.org/en/download) (includes npm)
- [Git](https://git-scm.com/downloads) configured (`git config --global user.name` and `user.email`)

## Quick setup

```bash
git clone https://github.com/JuanCarlosCalderon-vml/workshop-ai-agents-qa.git
cd workshop-ai-agents-qa
npm install --ignore-scripts
npx playwright test
```

If the test passes ✅, you're ready.

## Workshop guide

Open [`presentation/workshop.html`](presentation/workshop.html) in your browser for the full step-by-step walkthrough with code examples and explanations.

## Workshop steps

| Step | What you build | Key concept | Guide |
|------|---------------|-------------|-------|
| 0 | Generate tests without any config → save as `baseline.spec.ts` | See the problem | [View](https://gist.github.com/JuanCarlosCalderon-vml/8152c69336035a65819b51424c5f7e30) |
| 1 | Create `.github/copilot-instructions.md` → regenerate | Global rules | [View](https://gist.github.com/JuanCarlosCalderon-vml/8e926a6772a65628c5bcf481030d71a6) |
| 2 | Create `.github/instructions/spec-files.instructions.md` | Scoped rules | [View](https://gist.github.com/JuanCarlosCalderon-vml/839076e4efcb5481c2837453f0dcd4fc) |
| 3 | Create `.github/skills/generate-api-tests/SKILL.md` | Reusable procedures | [View](https://gist.github.com/JuanCarlosCalderon-vml/b1addf2b024901a93e86eb89e844c1ed) |
| 4 | Create agents in `.github/agents/` (test-generator, code-reviewer, test-runner, qa-orchestrator) | Roles + delegation | [View](https://gist.github.com/JuanCarlosCalderon-vml/7d71f3cc0b9b188b419711b86359ac42) |
| Challenge | Generate full coverage for `/albums` + `/albums/:id/photos` in 1 prompt | Put it all together | [View](https://gist.github.com/JuanCarlosCalderon-vml/ae39efa4397a0fa6456997c20da0c5d7) |
| Bonus | Create `.github/prompts/generate-api-tests.prompt.md` | Prompt files | [View](https://gist.github.com/JuanCarlosCalderon-vml/d1b1ae2b94513b3dd24fced72bc208c9) |

> **Tip:** Open a new chat (Cmd+L / Ctrl+L) before each step so Copilot picks up the new config.

## Branches

| Branch | Description |
|--------|-------------|
| `main` | Starter — just smoke test, no AI config |
| `part1-complete` | Steps 1-3 complete (instructions + skill + sample tests) |
| `part2-complete` | Everything: agents + prompt file + all config layers |

To jump to a specific step:

```bash
# Skip to Step 4 (agents):
git checkout part1-complete

# See the finished project:
git checkout part2-complete
```

Then install and verify:

```bash
npm install --ignore-scripts
npx playwright test
```

## Practice API

We use [JSONPlaceholder](https://jsonplaceholder.typicode.com) — a free public REST API (no API key or auth required).

**Available endpoints:**

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | List of users |
| GET | `/users/{id}` | User by ID |
| GET | `/posts` | List of posts |
| GET | `/posts/{id}/comments` | Comments of a post |
| GET | `/todos` | List of todos |
| GET | `/albums` | List of albums |
| GET | `/albums/{id}/photos` | Photos of an album |

## Project structure

```
playwright.config.ts    ← Playwright configuration
tests/
  smoke.spec.ts         ← Base test to verify setup
```

## Resources

### Official documentation

| Topic | Link |
|-------|------|
| Copilot customization overview | [VS Code Docs — Customization](https://code.visualstudio.com/docs/copilot/copilot-customization) |
| Instructions (global + scoped) | [Custom instructions](https://code.visualstudio.com/docs/copilot/copilot-customization#_custom-instructions) |
| Reusable prompt files | [Prompt files](https://code.visualstudio.com/docs/copilot/copilot-customization#_reusable-prompt-files) |
| Agent mode | [Chat agent mode](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode) |
| Sub-agents & orchestration | [Subagents in VS Code](https://code.visualstudio.com/docs/copilot/agents/subagents) |

### Practice API

- [JSONPlaceholder](https://jsonplaceholder.typicode.com) — free REST API used in this workshop (no auth required)
