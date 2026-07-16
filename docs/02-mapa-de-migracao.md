# Mapa de Migração — macosta (atual → novo)

> Checklist de implementação: o que sai, o que entra, o que muda. Fontes: site atual, infográfico "Work Life Journey", briefing (posicionamento híbrido), PDM.

## Legenda de status
- ✅ Mantém
- 🔄 Muda / reposiciona
- ➕ Novo
- ❌ Remove

## Status desta entrega (v2 — 15/07/2026)

Todo o conteúdo (itens 1–10) e quase todas as dívidas técnicas (T2–T5, T7–T12) foram **entregues** nesta refatoração, incluindo o MVP do backlog (E1–E4) mais duas peças de v2.1 puxadas para esta entrega (decisão de TL, confirmada com o Michael): unificação de CI/CD em GitHub Actions (T6/US-20) e smoke tests com Vitest + Testing Library (E6/US-21).

**Fica pendente, propositalmente fora desta entrega:**
- **T1 / US-19 — GitCard com fetch build-time via token.** O GitCard continua buscando dados client-side (agora com skeleton real e fallback elegante em erro), mas sem token de build. Requer decisão sobre gestão de secret no pipeline.
- **US-22 — Link do repositório chefIA.** Segue apenas mencionado (sem link), pois o repo público ainda não tem conteúdo publicado.
- **Asset do hero.** Não há foto de alta resolução disponível; o hero usa um avatar tipográfico "MC" (monograma), deliberadamente sem dependência de rede, coerente com a nota de performance do wireframe (GitCard como única dependência de rede da página).
- **Favicon / og:image dedicados.** Mantido o favicon existente; sem um og:image 1200×630 (asset de design ainda não enviado).

---

## Conteúdo

| # | Item atual | Ação | Vira o quê | Fonte | Status |
|---|-----------|------|-----------|-------|--------|
| 1 | Apresentação pessoal (Profile) | 🔄 | Hero com headline "RTE \| Portfolio Delivery \| AI Leadership" + subtítulo | Infográfico | ✅ Entregue |
| 2 | — | ➕ | Seção "Onde gero valor" (bullets) | Infográfico bloco 1 | ✅ Entregue |
| 3 | — | ➕ | Seção "Impacto comprovado" (CI&T + Nave.rs, com stat cards) | Infográfico bloco 2 | ✅ Entregue |
| 4 | — | ➕ | Seção "Liderança em IA" + case chefIA | Infográfico bloco 5 + briefing | ✅ Entregue (sem link do repo — ver pendências) |
| 5 | — | ➕ | Seção "Liderança e pessoas" (inclui PDM) | Infográfico bloco 3 + PDM | ✅ Entregue |
| 6 | — | ➕ | Timeline "Trajetória" (UFPel → O.S. Systems → Nave.rs → CI&T) | Infográfico bloco 7 | ✅ Entregue |
| 7 | — | ➕ | "Contextos de atuação" em 2 colunas (Gestão vs. Técnico/IA) | Infográfico bloco 6 | ✅ Entregue |
| 8 | — | ➕ | "Formação e credenciais" (formação, certificações, idiomas) | Infográfico bloco 8 | ✅ Entregue |
| 9 | GitCard (stats do GitHub + gráfico de linguagens) | 🔄 | Mantido, mas movido para rodapé como "prova técnica" | Site atual | ✅ Entregue (fetch client-side; build-time/token fica para depois — T1) |
| 10 | — | ➕ | Rodapé com contato + frase de fechamento | Infográfico | ✅ Entregue |

---

## Técnico (dívidas do site atual)

| # | Item | Ação | Nota | Status |
|---|------|------|------|--------|
| T1 | API do GitHub sem token (limite ~60 req/h por IP) | 🔄 | Avaliar: token em build-time (Gatsby source) ou cache estático gerado no build, em vez de fetch client-side | 🔲 Pendente (v2.1) — GitCard ganhou skeleton real e fallback de erro, mas ainda busca client-side sem token |
| T2 | Loader com delay fixo de 3s | ❌ | Remover delay artificial; loader só enquanto houver carregamento real | ✅ Entregue — loader removido; conteúdo estático renderiza imediato, só o GitCard depende de rede |
| T3 | `defaultProps` em componentes de função (`Seo.js`, `Text.js`, `Header.js`) | 🔄 | **Urgente:** `master` já está em React 19 (merge 15/07/2026), que emite warning de depreciação para `defaultProps` em componentes de função. Migrar para default parameters antes de mexer nesses componentes | ✅ Entregue — todo o `src/` migrado para TypeScript; `defaultProps` substituído por `.attrs()`/parâmetros padrão |
| T4 | Sem testes (script placeholder) | 🔄 | Decidir: adicionar smoke tests mínimos ou remover script para não enganar | ✅ Entregue — Vitest + Testing Library, smoke tests de seções, GitCard (sucesso/erro) e toggles de tema/idioma |
| T5 | `pathPrefix: /macosta` + `--prefix-paths` | ✅ | Manter se continuar no GitHub Pages; documentar no README | ✅ Mantido |
| T6 | Deploy gh-pages + GitLab CI (master) | 🔄 | Avaliar unificar pipeline (um só CI). Node agora fixado via `.nvmrc`/`engines` (22.x, `<26`) — usar essa versão em qualquer pipeline escolhido | ✅ Entregue — `.gitlab-ci.yml` removido; pipeline único em GitHub Actions (`.github/workflows/deploy.yml`), Node lido do `.nvmrc` |
| T7 | reaviz (gráfico donut) | 🔄 | `master` já subiu para reaviz 16.x (major, era 15.x) — **validar a API do donut** antes de reestilizar com os tokens do design spec (§5 GitCard) | ✅ Entregue — donut reestilizado com paleta por tema (`colorScheme` do reaviz), sem cores default |
| T8 | styled-components + styled-system | ✅/🔄 | Manter como base da UI; evoluir para **theming duplo (claro/escuro)** via ThemeProvider + tokens de tema | ✅ Entregue — tema duplo via custom properties CSS + atributo `data-theme`, sem cor hardcoded em componente |
| T9 | SEO (react-helmet) | 🔄 | Atualizar title/description/og para o novo posicionamento (hoje descreve um dev); incluir `hreflang` pt-BR/en | ✅ Entregue — migrado para a Head API nativa do Gatsby (react-helmet mostrou-se incompatível com o SSR concorrente do Gatsby 5 durante a implementação — tags vazavam entre páginas); `hreflang` real via rotas `/` e `/en/` |
| T10 | Tema único (escuro) | ➕ | Toggle claro/escuro com persistência (localStorage) e respeito a `prefers-color-scheme` | ✅ Entregue — script bloqueante no SSR evita flash, persiste em localStorage |
| T11 | Site monolíngue (PT-BR) | ➕ | i18n PT-BR/EN com alternância; avaliar `gatsby-plugin-react-i18next` ou dicionário próprio; conteúdo em arquivos de tradução, não hardcoded nos componentes | ✅ Entregue — rotas reais (`/` PT-BR, `/en/` EN) com dicionários tipados, em vez de toggle client-side; dá SSR e `hreflang` corretos de verdade |
| T12 | TypeScript 5.7 → 7.0 + `moduleResolution: bundler` | 🔄 | Bump de duas majors já em `master`; verificar type-check ao criar os componentes novos (ThemeProvider, i18n, seções) antes de assumir compatibilidade | ✅ Entregue — `tsc --noEmit` limpo com TS 7, todo `src/` em TypeScript |

---

## Riscos / atenções

1. **SEO e links externos:** se a URL base muda ou seções ganham âncoras, atualizar links no LinkedIn.
2. **Conteúdo duplicado com LinkedIn:** o site deve complementar (case chefIA com profundidade), não só repetir o perfil.
3. **chefIA (decidido 14/07/2026):** v1 publica sem métrica, com framing de "prática interna real + template público em construção". Link para o repo só entra quando o conteúdo estiver publicado — repo vazio joga contra.
4. **Imagem/foto do hero:** reutilizar a foto do infográfico ou definir outra com boa resolução.
5. **i18n dobra o custo de conteúdo:** toda alteração de copy passa a exigir PT-BR + EN. Definir EN como tradução revisada (não literal) e tratar o dicionário de traduções como parte do artefato 01.
6. **Tema claro exige revisão visual completa:** contraste, logos e o gráfico do GitCard precisam funcionar nos dois temas — não é só inverter cores.

---

## Ordem sugerida de implementação

1. Copy final aprovada (artefato 01) + versão EN
2. Estrutura de seções no Gatsby + fundações transversais (ThemeProvider claro/escuro, i18n) — fazer cedo para não retrabalhar componentes
3. Hero + seções de conteúdo estático (2, 5, 6, 7, 8)
4. Seção IA/chefIA (depende das pendências)
5. Refit do GitCard (token/cache + remover delay + compatível com os 2 temas)
6. SEO/meta tags novas + hreflang
7. Dívidas técnicas restantes (T3, T4, T6)
