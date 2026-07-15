# macosta

Site pessoal de Michael Alexandre Costa — Release Train Engineer (RTE) | Portfolio Delivery | AI Leadership. Construído com Gatsby 5 + TypeScript + styled-components.

Bilíngue (PT-BR em `/`, EN em `/en/`) e com tema claro/escuro. Ver [`docs/`](./docs) para os artefatos de planejamento (conteúdo, wireframe, backlog, design spec) e o status de entrega de cada item.

## Desenvolvimento

Requer Node conforme `.nvmrc`/`engines` (22.x, `<26`).

```bash
yarn install
yarn develop   # http://localhost:8000
yarn build     # build de produção em ./public
yarn test      # Vitest + Testing Library
```

## Deploy

Pipeline único em GitHub Actions ([`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml)): a cada push em `master`, roda os testes, builda com `gatsby build --prefix-paths` e publica `public/` na branch `gh-pages` (GitHub Pages). O site usa `pathPrefix: /macosta` (`gatsby-config.ts`), por isso o build de produção sempre precisa da flag `--prefix-paths`.

## Arquitetura

- **Conteúdo/i18n** (`src/i18n/`): dicionários tipados `pt.ts`/`en.ts`, espelhando o content brief em `docs/01-content-brief-copy.md`. Cada idioma é uma rota real (`src/pages/index.tsx` e `src/pages/en/index.tsx`), não um toggle client-side — dá SSR e `hreflang` corretos.
- **Tema** (`src/theme/`): tokens claro/escuro em `tokens.ts`, aplicados via custom properties CSS (`GlobalStyle.tsx`) e atributo `data-theme` no `<html>`. Um script bloqueante injetado no `gatsby-ssr.tsx` define o tema antes do primeiro paint (sem flash). `ThemeModeContext` espelha o modo atual em React para os poucos casos que precisam de uma cor "de verdade" em JS (paleta do gráfico do GitCard).
- **Seções** (`src/components/sections/`): uma por seção do wireframe (Hero, Impacto, Liderança em IA, Trajetória etc.), compostas em `src/components/ProfilePage.tsx`.
- **SEO** (`src/components/Seo/Seo.tsx`): usa a [Head API nativa do Gatsby](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/), não `react-helmet` — o `react-helmet` demonstrou vazar meta tags entre páginas no SSR concorrente do Gatsby 5.
- **GitCard** (`src/components/GitCard/`): único componente com dependência de rede (API pública do GitHub, sem token); tem skeleton real durante o carregamento e cai num fallback textual em caso de erro, nunca quebra a página.

## Testes

Vitest + Testing Library (`vitest.config.ts`, `src/test/`). Cobrem: render de cada seção, toggle de tema (troca + persistência em localStorage), `LanguageSwitcher` e os dois estados do GitCard (sucesso e erro).
