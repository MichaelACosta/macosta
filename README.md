# macosta

Site pessoal de Michael Alexandre Costa — Next.js (App Router) + TypeScript, organizado em Atomic Design, com tema claro/escuro, i18n PT-BR/EN, testes automatizados e deploy estático no GitHub Pages via GitHub Actions.

O planejamento de conteúdo e design (posicionamento, copy bilíngue, wireframe, backlog e design spec) vive em [`docs/`](./docs) — esses artefatos são a fonte da verdade do produto; este README documenta a implementação.

## Stack

- **Next.js 16** (App Router), `output: "export"` — site 100% estático
- **TypeScript** estrito
- **CSS Modules + CSS Custom Properties** para os tokens de tema (claro/escuro) — sem CSS-in-JS em runtime
- **i18n por rotas estáticas** (`/pt`, `/en`), dicionários próprios com fallback PT-BR quando falta uma chave em EN
- **Vitest + React Testing Library** para testes de componente
- **GitHub Actions** para CI (lint, typecheck, testes, build) e deploy no GitHub Pages

## Estrutura (Atomic Design)

```
app/[locale]/        rotas (layout, page, opengraph-image), uma por idioma
components/
  atoms/              Button, Text, Chip, IconButton, ThemeToggle, RailSegment, StatNumber, MonogramLogo
  molecules/          NavItem, StatCard, TimelineStation, ContactLink, LanguageToggle, LanguageDonut, SkeletonBlock
  organisms/          Header, Hero e as demais seções da home, uma por US do backlog
  templates/          HomeTemplate — monta as seções na ordem do wireframe
lib/
  theme/              tokens, ThemeProvider/useTheme, script anti-FOUC
  i18n/               locales, dicionários pt/en, getDictionary (com fallback)
  github/             client da API pública do GitHub + formatação de linguagens
  content/            constantes não-localizadas (links, ids de seção, URL do site)
```

Cada organism de seção recebe o dicionário já resolvido do idioma atual — nenhum componente lê strings hardcoded.

## Scripts

```bash
yarn dev         # ambiente de desenvolvimento (http://localhost:3000/macosta)
yarn build       # build estático em ./out
yarn lint        # eslint
yarn typecheck   # tsc --noEmit
yarn test        # vitest run
```

## Deploy

`basePath`/`assetPrefix` estão fixados em `/macosta` (o site é uma *project page* do GitHub Pages, servida em `https://michaelacosta.github.io/macosta/`). A raiz `/` é um redirect estático (`public/index.html`) para `/macosta/pt/` (idioma default).

O pipeline é único, no GitHub Actions:

- `.github/workflows/ci.yml` — roda em PRs e pushes: lint, typecheck, testes e build
- `.github/workflows/deploy.yml` — em push para `master`, builda e publica `out/` no GitHub Pages (`actions/upload-pages-artifact` + `actions/deploy-pages`)

Pré-requisito no repositório (fora do escopo do código): em *Settings → Pages*, selecionar **Source: GitHub Actions**.

Node fixado via `.nvmrc`/`engines` (22.x).

## Simplificações conhecidas / pendências

- **Assets do hero, favicon "de verdade" e og:image com foto**: o design spec pede uma foto do hero e um og:image 1200×630 — ainda não recebidos. Hoje o favicon é um monograma "MC" gerado em código (`app/icon.svg`) e o og:image é gerado dinamicamente (texto sobre navy, `app/[locale]/opengraph-image.tsx`); a foto do hero não foi incluída nesta versão.
- **GitCard**: dados buscados client-side direto da API pública do GitHub (sem token de build-time). Se a seção falhar (rate limit etc.), ela some da página em vez de quebrar — nunca há token para gerenciar como secret nesta v1.
- **Link do repositório chefIA**: não incluído nesta versão (gate do backlog — US-22/E7), conforme decisão registrada em `docs/01-content-brief-copy.md`.
