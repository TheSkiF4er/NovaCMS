# NovaCMS

Next-generation hybrid headless CMS for product teams & developers.

NovaCMS is a schema-driven, API-first, hybrid headless CMS with a visual builder, powerful plugin system, and first-class DX.

- Author: **TheSkiF4er**
- License: **Apache License 2.0**
- Contact: **support@cajeer.com**
- Security: **security@cajeer.com**

## What NovaCMS is
NovaCMS helps product teams and developers model structured content (content types, components, relations), manage workflows (draft → publish), and deliver content via **REST and GraphQL**. It can be used as a pure headless CMS or as a hybrid system with a visual page/block builder.

## Monorepo layout

```
apps/
  api/           # NestJS backend (REST + GraphQL)
  admin/         # Next.js admin panel
  docs/          # Documentation site (optional)
packages/
  core/          # Domain models, schemas, shared types
  db/            # Prisma schema + database client
  sdk/           # Official TypeScript SDK (REST/GraphQL clients)
  plugin-sdk/    # Plugin interfaces and lifecycle hooks
  ui/            # Shared UI components/design system
tools/
  cli/           # Developer CLI (local dev, migrations, codegen)
  scripts/       # Maintenance scripts
```

## Requirements
- Node.js **20 LTS**
- pnpm **9+**
- Docker (recommended for local Postgres/Redis/S3)

## Quick start (local dev)

1) Install dependencies:

```bash
pnpm i
```

2) Start local infrastructure:

```bash
docker compose up -d
```

3) Configure environment:

```bash
cp .env.example .env
```

4) Initialize database:

```bash
pnpm db:migrate
pnpm db:seed
```

5) Run API + Admin:

```bash
pnpm dev
```

- API: http://localhost:4000
- Admin: http://localhost:3001
- Docs: http://localhost:3000 (optional)

## Scripts
- `pnpm dev` — run API + Admin in dev mode (turborepo)
- `pnpm build` — build all apps/packages
- `pnpm lint` — lint all workspaces
- `pnpm test` — run tests
- `pnpm db:migrate` — apply Prisma migrations
- `pnpm db:seed` — seed dev data

## Security
Please report security issues to **security@cajeer.com**. See [SECURITY.md](./SECURITY.md).

## License
Licensed under the **Apache License 2.0**. See [LICENSE](./LICENSE).
