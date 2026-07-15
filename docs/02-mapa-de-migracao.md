# Mapa de Migração — macosta (atual → novo)

> Checklist de implementação: o que sai, o que entra, o que muda. Fontes: site atual, infográfico "Work Life Journey", briefing (posicionamento híbrido), PDM.

## Legenda de status
- ✅ Mantém
- 🔄 Muda / reposiciona
- ➕ Novo
- ❌ Remove

---

## Conteúdo

| # | Item atual | Ação | Vira o quê | Fonte |
|---|-----------|------|-----------|-------|
| 1 | Apresentação pessoal (Profile) | 🔄 | Hero com headline "RTE \| Portfolio Delivery \| AI Leadership" + subtítulo | Infográfico |
| 2 | — | ➕ | Seção "Onde gero valor" (bullets) | Infográfico bloco 1 |
| 3 | — | ➕ | Seção "Impacto comprovado" (CI&T + Nave.rs, com stat cards) | Infográfico bloco 2 |
| 4 | — | ➕ | Seção "Liderança em IA" + case chefIA | Infográfico bloco 5 + briefing |
| 5 | — | ➕ | Seção "Liderança e pessoas" (inclui PDM) | Infográfico bloco 3 + PDM |
| 6 | — | ➕ | Timeline "Trajetória" (UFPel → O.S. Systems → Nave.rs → CI&T) | Infográfico bloco 7 |
| 7 | — | ➕ | "Contextos de atuação" em 2 colunas (Gestão vs. Técnico/IA) | Infográfico bloco 6 |
| 8 | — | ➕ | "Formação e credenciais" (formação, certificações, idiomas) | Infográfico bloco 8 |
| 9 | GitCard (stats do GitHub + gráfico de linguagens) | 🔄 | Mantido, mas movido para rodapé como "prova técnica" | Site atual |
| 10 | — | ➕ | Rodapé com contato + frase de fechamento | Infográfico |

---

## Técnico (dívidas do site atual)

| # | Item | Ação | Nota |
|---|------|------|------|
| T1 | API do GitHub sem token (limite ~60 req/h por IP) | 🔄 | Avaliar: token em build-time (Gatsby source) ou cache estático gerado no build, em vez de fetch client-side |
| T2 | Loader com delay fixo de 3s | ❌ | Remover delay artificial; loader só enquanto houver carregamento real |
| T3 | `defaultProps` em componentes de função (`Seo.js`, `Text.js`, `Header.js`) | 🔄 | **Urgente:** `master` já está em React 19 (merge 15/07/2026), que emite warning de depreciação para `defaultProps` em componentes de função. Migrar para default parameters antes de mexer nesses componentes |
| T4 | Sem testes (script placeholder) | 🔄 | Decidir: adicionar smoke tests mínimos ou remover script para não enganar |
| T5 | `pathPrefix: /macosta` + `--prefix-paths` | ✅ | Manter se continuar no GitHub Pages; documentar no README |
| T6 | Deploy gh-pages + GitLab CI (master) | 🔄 | Avaliar unificar pipeline (um só CI). Node agora fixado via `.nvmrc`/`engines` (22.x, `<26`) — usar essa versão em qualquer pipeline escolhido |
| T7 | reaviz (gráfico donut) | 🔄 | `master` já subiu para reaviz 16.x (major, era 15.x) — **validar a API do donut** antes de reestilizar com os tokens do design spec (§5 GitCard) |
| T8 | styled-components + styled-system | ✅/🔄 | Manter como base da UI; evoluir para **theming duplo (claro/escuro)** via ThemeProvider + tokens de tema |
| T9 | SEO (react-helmet) | 🔄 | Atualizar title/description/og para o novo posicionamento (hoje descreve um dev); incluir `hreflang` pt-BR/en |
| T10 | Tema único (escuro) | ➕ | Toggle claro/escuro com persistência (localStorage) e respeito a `prefers-color-scheme` |
| T11 | Site monolíngue (PT-BR) | ➕ | i18n PT-BR/EN com alternância; avaliar `gatsby-plugin-react-i18next` ou dicionário próprio; conteúdo em arquivos de tradução, não hardcoded nos componentes |
| T12 | TypeScript 5.7 → 7.0 + `moduleResolution: bundler` | 🔄 | Bump de duas majors já em `master`; verificar type-check ao criar os componentes novos (ThemeProvider, i18n, seções) antes de assumir compatibilidade |

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
