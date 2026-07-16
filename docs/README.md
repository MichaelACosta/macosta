# Artefatos de planejamento — macosta v2

> **Status: v2 implementada em 15/07/2026.** O MVP do backlog (E1–E4) foi construído em cima destes artefatos, mais duas peças de v2.1 puxadas para esta entrega (CI/CD unificado e testes mínimos). Detalhes por item em [`02-mapa-de-migracao.md`](./02-mapa-de-migracao.md#status-desta-entrega-v2--15072026). Os documentos abaixo continuam sendo a referência de design/conteúdo — mantenha-os atualizados em mudanças futuras de copy, tema ou seções.

Documentos que servem de base para a evolução do site (novo posicionamento, tema claro/escuro, i18n PT-BR/EN, novas seções). Ordem de leitura sugerida:

1. [`01-content-brief-copy.md`](./01-content-brief-copy.md) — fonte da verdade do conteúdo/copy de cada seção, bilíngue PT-BR/EN. Espelhado em `src/i18n/pt.ts` e `src/i18n/en.ts`.
2. [`02-mapa-de-migracao.md`](./02-mapa-de-migracao.md) — checklist do que sai, muda e entra na migração do site atual para o novo (conteúdo e dívidas técnicas), com status de entrega por item.
3. [`03-wireframe-estrutura.md`](./03-wireframe-estrutura.md) — outline de layout e hierarquia das seções.
4. [`04-backlog-features-historias.md`](./04-backlog-features-historias.md) — épicos, features e histórias de usuário, com DoR/DoD.
5. [`05-design-spec.md`](./05-design-spec.md) — direção visual, tokens de tema e especificação de componentes. Tokens implementados em `src/theme/tokens.ts`.
6. [`mockup-macosta.html`](./mockup-macosta.html) — protótipo navegável original; a implementação em `src/` seguiu esta base, mas evoluiu para i18n via rotas reais (`/`, `/en/`) em vez do toggle client-side do mockup, para SEO/hreflang corretos.

## Pendências (próximos passos, fora do escopo desta entrega)

- **Conteúdo público do repositório chefIA** — gate da US-22 (link do case na seção Liderança em IA). *A ser enviado pelo Michael.*
- **Assets**: foto do hero em alta resolução e og:image (design spec §8). O hero usa um avatar tipográfico "MC" como placeholder; o favicon existente foi mantido. *A ser enviado pelo Michael.*
- **GitCard com fetch build-time via token** (T1/US-19) — hoje o fetch continua client-side (com skeleton real e fallback de erro); mover para build-time exige decidir gestão de secret no CI. *A definir com o Tech Lead.*

## Decisões já tomadas nesta entrega (não reabrir sem motivo)

- **CI/CD:** unificado em GitHub Actions (`.github/workflows/deploy.yml`), GitLab CI removido.
- **Testes:** Vitest + Testing Library, com smoke tests cobrindo seções, GitCard e toggles.
- **i18n:** rotas reais (`/` PT-BR, `/en/` EN) em vez de dicionário trocado no client, para SSR e `hreflang` corretos.
- **SEO:** migrado de `react-helmet` para a Head API nativa do Gatsby — o `react-helmet` vazava meta tags entre páginas no SSR concorrente do Gatsby 5 (bug descoberto durante a implementação, não nos artefatos originais).
