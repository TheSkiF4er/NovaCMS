# Architecture overview

NovaCMS is built as a TypeScript monorepo with a clear separation between:
- **Apps**: API, Admin, Docs
- **Packages**: shared domain, database layer, SDKs, UI, plugin SDK
- **Tools**: CLI and repository automation

## Key principles
- API-first (REST + GraphQL)
- Schema-driven content modeling
- Multi-tenant by default
- Secure-by-default plugin system
