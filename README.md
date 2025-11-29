# NovaCMS 🚀  
**Next-generation hybrid headless CMS for product teams & developers**

> NovaCMS is a **schema-driven, API-first, hybrid headless CMS** with a visual builder, powerful plugin system, and first-class DX.  
> Build blazing-fast websites, apps, and digital products without fighting your CMS.

---

## 🌍 Multilingual welcome / Многоязычное приветствие

**Main language: English**  
Short greetings in some of the most widely spoken languages (for full docs, see future i18n pages).

- 🇬🇧 **English (Primary)**  
  NovaCMS is a modern hybrid headless CMS with a visual builder and powerful APIs, designed for real-world product teams and developers.

- 🇨🇳 **简体中文 (Chinese)**  
  NovaCMS 是一款现代化的混合式 Headless CMS，提供可视化页面构建器和强大的 API，专为真实业务场景中的产品团队与开发者打造。

- 🇪🇸 **Español (Spanish)**  
  NovaCMS es un CMS headless híbrido y moderno con constructor visual y potentes APIs, diseñado para equipos de producto y desarrolladores.

- 🇮🇳 **हिन्दी (Hindi)**  
  NovaCMS एक आधुनिक हाइब्रिड हेडलेस CMS है, जिसमें विज़ुअल बिल्डर और शक्तिशाली API हैं, जो प्रोडक्ट टीमों और डेवलपर्स के लिए बनाया गया है।

- 🇦🇪 **العربية (Arabic)**  
  NovaCMS هو نظام إدارة محتوى (CMS) حديث هجيني وبدون واجهة، مع منشئ مرئي وواجهات برمجة تطبيقات قوية، مصمّم لفرق المنتجات والمطوّرين.

- 🇫🇷 **Français (French)**  
  NovaCMS est un CMS headless hybride moderne avec un constructeur visuel et des API puissantes, conçu pour les équipes produit et les développeurs.

- 🇧🇷 **Português (Portuguese)**  
  NovaCMS é um CMS headless híbrido moderno com construtor visual e APIs poderosas, feito para equipes de produto e desenvolvedores.

- 🇷🇺 **Русский (Russian)**  
  NovaCMS — это современный гибридный headless CMS с визуальным конструктором и мощными API, созданный для продуктовых команд и разработчиков.

---

## ✨ Why NovaCMS?

Modern teams need more than “just another WordPress clone”. NovaCMS is built to solve real problems:

- **Hybrid headless**  
  Use NovaCMS as a pure headless CMS **or** as a hybrid system with a powerful **visual page builder**.

- **Schema-driven content modeling**  
  Define rich content types, relations, localization, and workflows via a visual modeler **and** as code.

- **First-class DX (Developer Experience)**  
  TypeScript everywhere, modern APIs (REST + GraphQL), official SDKs, CLI, and CI-friendly migrations.

- **Plugin & extension system**  
  Extend backend logic, add custom fields, and inject UI panels into the admin with a clean plugin SDK.

- **Multi-tenant by design**  
  Host multiple projects/tenants from a single NovaCMS instance.

- **Cloud & self-hosted**  
  Run in your own infrastructure (Docker/K8s) or in a managed cloud (planned).

---

## 🧱 Core features

- 🔹 **API-first**: REST & GraphQL endpoints for content, media, and auth  
- 🔹 **Visual page & block builder**: build complex layouts using reusable components  
- 🔹 **Structured content types**: custom types, components, relations, enums, JSON fields  
- 🔹 **Roles & permissions**: fine-grained RBAC, field-level control (planned)  
- 🔹 **Workflows**: draft → review → publish → schedule  
- 🔹 **Localization**: multi-locale content with clear relationships  
- 🔹 **Media library**: uploads, transformations, and CDN-friendly media handling  
- 🔹 **Plugins & webhooks**: extend NovaCMS and integrate with your stack  
- 🔹 **Search & analytics**: search integration and audit logs (planned)  
- 🔹 **AI helpers** (optional): content suggestions, SEO hints (planned)

---

## 🗺️ Project status

> ⚠️ **Early design / pre-MVP phase**  
> NovaCMS is currently being designed and implemented. The API, structure, and features may change quickly.

If you like the direction:

- ⭐ Star the repo to follow progress  
- 🐛 Open issues with ideas or feedback  
- 🤝 Help design APIs, plugins, and DX

---

## 📦 Monorepo structure (high-level)

NovaCMS uses a **TypeScript monorepo** with shared packages and multiple apps.

```txt
apps/
  api/         # NestJS backend (REST + GraphQL)
  admin/       # Next.js admin panel
  website/     # Marketing site + docs
  playground/  # Example projects (Next.js, etc.)

packages/
  core/        # Core CMS domain logic (content, models, workflows)
  db/          # DB layer (Prisma, migrations)
  sdk-js/      # JS/TS SDK for clients
  sdk-node/    # Node SDK
  ui/          # Shared UI components (design system)
  config/      # Shared configs (ESLint, TS, Jest)
  plugin-sdk/  # SDK for building NovaCMS plugins
  plugins/     # Official plugins (analytics, email, etc.)

tools/
  cli/         # Nova CLI (init, dev, migrate, generate)
  codegen/     # Type & client code generation
  scripts/     # Release and maintenance scripts

docs/          # Additional documentation (if not all in website/)
.github/       # CI/CD and GitHub templates
docker/        # Docker & K8s manifests
````

---

## 🚀 Quick start (development)

> Note: commands and structure may evolve as NovaCMS matures.

### 1. Requirements

* Node.js ≥ 18
* pnpm or yarn
* Docker (for Postgres/Redis) – recommended

### 2. Clone & install

```bash
git clone https://github.com/TheSkiF4er/NovaCMS.git
cd NovaCMS

# using pnpm
pnpm install
```

### 3. Start infrastructure (Postgres, Redis, etc.)

```bash
docker-compose -f docker/docker-compose.dev.yml up -d
```

### 4. Run migrations & seed

```bash
pnpm prisma:migrate   # or via Nova CLI (planned): nova migrate
pnpm prisma:seed      # sample data
```

### 5. Start backend API

```bash
cd apps/api
pnpm dev
# API available at http://localhost:4000
```

### 6. Start admin panel

```bash
cd apps/admin
pnpm dev
# Admin app at http://localhost:3000
```

Log in with the initial admin user (see `apps/api` README or env/seed configuration).

---

## 🧩 Concept overview

### Content modeling

* Create **Content Types** (e.g. `Article`, `Product`, `LandingPage`)
* Add fields:

  * scalar (string, text, number, boolean, date)
  * rich text & components
  * media (image, file, video)
  * relations (one-to-one, one-to-many, many-to-many)
  * JSON / custom component fields

Everything is stored in Postgres (with JSONB for flexible structures).

### Hybrid rendering

NovaCMS works great as:

1. **Headless CMS only**

   * Use official SDKs or fetch via REST/GraphQL from Next.js, Nuxt, SvelteKit, mobile apps, etc.

2. **Hybrid CMS with visual builder**

   * Use the visual page builder in `admin` to assemble pages from predefined blocks.
   * Render blocks using your own front-end components.

### Plugins

Plugins can:

* Add new field types and UI components
* Hook into lifecycle events (before/after create/update/publish)
* Register webhooks or external integrations
* Provide settings pages in the admin

NovaCMS aims for a **safe, well-documented plugin API** so that plugins feel like first-class citizens, not hacks.

---

## 🛠️ Tech stack

**Backend**

* Node.js + TypeScript
* NestJS (modular architecture)
* PostgreSQL + Prisma (ORM & migrations)
* Redis (cache, sessions, rate-limiting)
* S3-compatible storage for media

**Frontend (Admin & Website)**

* React + Next.js
* TypeScript
* Tailwind CSS + Headless UI / Radix UI
* Custom block editor for content / pages

**Tooling**

* Turborepo (or similar) for monorepo tasks
* pnpm / yarn workspaces
* Jest / Vitest + Testing Library
* ESLint, Prettier, Husky, lint-staged

---

## 🔮 Roadmap (high-level)

* [ ] MVP:

  * [ ] Auth (email/password, JWT)
  * [ ] Multi-tenant projects
  * [ ] Content types & fields (schema-driven)
  * [ ] CRUD for entries (REST/GraphQL)
  * [ ] Basic media library
  * [ ] Basic roles & permissions
* [ ] Visual builder & localization:

  * [ ] Block-based page editor
  * [ ] Multi-locale content
  * [ ] Preview & scheduling
* [ ] Plugins & integrations:

  * [ ] Plugin SDK (backend + UI)
  * [ ] Webhooks
  * [ ] Official integrations (e-mail, analytics, search)
* [ ] Cloud & enterprise:

  * [ ] Managed cloud offering
  * [ ] SSO/SAML
  * [ ] Advanced audit & compliance

You can help shape this roadmap by opening issues and discussions.

---

## 🤝 Contributing

We ❤️ contributors.

1. **Fork** the repo
2. Create a new branch: `feat/your-awesome-idea`
3. Commit your changes with clear messages
4. Open a **Pull Request** with a description and screenshots (if UI)

Before opening a PR:

```bash
pnpm lint
pnpm test
```

Please follow the coding style and architecture guidelines (soon in `/docs`).

---

## 🧾 License

NovaCMS will be released under a **permissive open-source license** (planned: MIT/Apache-2.0 style).
Final license text will appear in `LICENSE` before the first public release.

---

## 💬 Community & contact

> Coming soon: Discord / Slack, discussions and more.

In the meantime:

* Use **GitHub Issues** for bugs & feature requests
* Use **GitHub Discussions** (when enabled) for ideas and feedback

---

## TL;DR

NovaCMS wants to be the **CMS you don’t hate**:

* Modern stack, excellent developer experience
* Visual tools for content teams
* Hybrid headless approach for flexibility
* Strong plugin ecosystem and open-source core

If this vision resonates with you, **star the repo**, share feedback, and help build the next-gen CMS together. 🌟
