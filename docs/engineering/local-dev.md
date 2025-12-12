# Local development

## Start dependencies
```bash
docker compose up -d
```

## Install dependencies
```bash
pnpm i
```

## Run migrations and seed
```bash
cp .env.example .env
pnpm db:migrate
pnpm db:seed
```

## Run services
```bash
pnpm dev
```
