<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## House Rules

- **No local dev servers**: All builds and previews happen in cloud agents and Vercel only.
- **Splash content is fixed**: Four lines (identity, descriptor, tagline, plain sentence) with no call to action unless Joshua explicitly requests changes.
- **Colors**: Tailwind slate + violet/purple per [ui.shadcn.com/colors](https://ui.shadcn.com/colors), system light/dark mode support.
- **Typography**: Geist font family (sans and mono).

## Guardrails

One agent per task; no sub-agents or parallel agents unless Joshua asks. Stop and report after 3 failed attempts at the same step. Never merge to main, promote to production, or change env vars or secrets without Joshua's explicit approval. Work on a branch; a Vercel preview must be READY before asking to merge.
