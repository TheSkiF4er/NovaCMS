# Contributing to NovaCMS

Thank you for considering contributing to NovaCMS.

## Ground rules
- Be respectful and collaborative (see [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)).
- Keep PRs focused. One feature or fix per PR is preferred.
- Prefer small, incremental changes with tests.

## Development setup
1) Install Node.js 20 and pnpm 9+
2) Install dependencies: `pnpm i`
3) Start infrastructure: `docker compose up -d`
4) Copy env: `cp .env.example .env`
5) Run database migrations: `pnpm db:migrate`
6) Run dev: `pnpm dev`

## Branching and commits
- Default branch: `main`
- Use Conventional Commits (e.g., `feat(api): add content type endpoint`)

## Code style
- TypeScript strict mode
- ESLint + Prettier
- Prefer explicit types for public APIs
- No breaking changes without prior discussion

## Testing
- Unit tests: `pnpm test`
- Typecheck: `pnpm typecheck`
- Lint: `pnpm lint`

## Pull requests
A good PR includes:
- Clear description of the change and motivation
- Tests covering new behavior (or rationale if not feasible)
- Documentation updates where relevant
