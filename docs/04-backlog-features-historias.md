# Backlog — macosta v2 (Épicos, Features e Histórias)

> Backlog refinado para a evolução do site. Persona única nas histórias: **visitante** (recrutador/liderança/par técnico) ou **mantenedor** (Michael).
> Estimativas em P/M/G (esforço relativo). DoR: copy aprovada no artefato 01. DoD ao final do documento.

---

## Visão de release

| Release | Objetivo | Épicos |
|---------|----------|--------|
| **MVP (v2.0)** | Site com novo posicionamento no ar, bilíngue e com dois temas | E1, E2, E3, E4 |
| **v2.1** | Prova técnica robusta + qualidade | E5, E6 |
| **v2.2** | Conteúdo chefIA linkado + melhorias contínuas | E7 |

---

## E1 — Fundações transversais

> Fazer primeiro: tema e i18n mudam a assinatura de todos os componentes. Retrabalho alto se vier depois.

### F1.1 — Sistema de temas (claro/escuro)

**US-01 — Alternar tema** · M
Como visitante, quero alternar entre modo claro e escuro, para ler o site com o conforto visual que prefiro.
- **CA1:** Toggle visível no header em desktop e mobile
- **CA2:** Troca instantânea, sem reload e sem flash de tema errado (FOUC)
- **CA3:** Todos os componentes respondem ao tema (nenhuma cor hardcoded)

**US-02 — Persistência e preferência do sistema** · P
Como visitante, quero que o site lembre meu tema e respeite a preferência do meu sistema na primeira visita.
- **CA1:** Primeira visita: aplica `prefers-color-scheme`
- **CA2:** Escolha manual salva em localStorage e prevalece nas visitas seguintes
- **CA3:** SSR/build do Gatsby não causa flash do tema oposto

**US-03 — Tokens de tema** · M *(técnica)*
Como mantenedor, quero paletas claro/escuro definidas como tokens no ThemeProvider, para evoluir o visual sem caçar cores no código.
- **CA1:** Paleta única de tokens semânticos (bg, surface, text, accent, border)
- **CA2:** Contraste mínimo WCAG AA nos dois temas
- **CA3:** Documentado no README

### F1.2 — Internacionalização (PT-BR/EN)

**US-04 — Alternar idioma** · M
Como visitante, quero alternar entre português e inglês, para ler o conteúdo no idioma que domino.
- **CA1:** Seletor PT | EN no header
- **CA2:** Troca sem reload perceptível; escolha persistida
- **CA3:** Default: PT-BR (ou idioma do navegador, se EN)

**US-05 — Dicionário de traduções** · M *(técnica)*
Como mantenedor, quero todas as strings em arquivos de tradução, para alterar copy sem tocar em componente.
- **CA1:** Zero strings hardcoded nos componentes
- **CA2:** Estrutura de chaves espelha as seções do artefato 01
- **CA3:** Falta de chave em EN cai para PT-BR com aviso em build (não quebra)

**US-06 — Copy EN revisada** · M *(conteúdo)*
Como visitante anglófono, quero um texto natural em inglês, para avaliar o perfil sem ruído de tradução literal.
- **CA1:** Tradução revisada de todas as seções do artefato 01
- **CA2:** Termos de mercado mantidos (RTE, PI Planning, SAFe)
- **CA3:** Revisão final do Michael antes do merge

---

## E2 — Novo conteúdo e seções

### F2.1 — Hero e identidade

**US-07 — Hero com novo posicionamento** · M
Como visitante, quero entender em 5 segundos quem é o Michael e o que ele faz, para decidir se sigo lendo.
- **CA1:** Nome + headline "Release Train Engineer (RTE) | Portfolio Delivery | AI Leadership" + subtítulo (artefato 01, seção 1)
- **CA2:** CTAs: LinkedIn e e-mail (sem CV)
- **CA3:** Hero completo acima da dobra em mobile (viewport 375px)
- **CA4:** Sem loader artificial — conteúdo estático renderiza imediato

**US-08 — Header com navegação e controles** · M
Como visitante, quero navegar pelas seções e acessar os toggles de tema/idioma, de qualquer ponto da página.
- **CA1:** Header fixo com âncoras das seções
- **CA2:** Toggles de tema e idioma sempre visíveis (inclusive mobile)
- **CA3:** Scroll suave até a âncora

### F2.2 — Seções de valor e impacto

**US-09 — Seção "Onde gero valor"** · P
Como visitante, quero ver rapidamente as frentes de atuação, para mapear o perfil sem ler texto longo.
- **CA1:** 7 bullets com ícone (artefato 01, seção 2)
- **CA2:** Grid responsivo (2 col desktop / 1 col mobile)

**US-10 — Seção "Impacto comprovado" com stat cards** · M
Como visitante, quero ver números concretos (7 squads, ~48 profissionais, 10+ anos), para validar senioridade com evidência.
- **CA1:** Stat cards com número em destaque no topo da seção
- **CA2:** Sub-blocos CI&T e Nave.rs com bullets (artefato 01, seção 3)
- **CA3:** É a seção de maior peso visual depois do hero

**US-11 — Seção "Liderança em IA" com case chefIA** · M
Como visitante, quero entender como o Michael aplica IA na gestão na prática, para diferenciar de discurso genérico de IA.
- **CA1:** Intro + selo de referência na comunidade CI&T
- **CA2:** Chips de públicos e temas conduzidos
- **CA3:** Case chefIA no formato problema → origem → solução → status (copy do artefato 01, seção 4)
- **CA4:** **Sem link para o repo** nesta versão (gate: conteúdo publicado — ver US-19)

**US-12 — Seção "Liderança e pessoas" com badge PDM** · P
Como visitante, quero ver as credenciais de liderança, incluindo liderança direta de pessoas, para avaliar prontidão gerencial.
- **CA1:** Bullets do artefato 01, seção 5
- **CA2:** PDM com destaque visual próprio (badge)

**US-13 — Timeline "Trajetória"** · M
Como visitante, quero visualizar a evolução dev → SM → RTE → PDM, para entender o background técnico do gestor.
- **CA1:** Timeline horizontal desktop / vertical mobile
- **CA2:** 4 paradas (UFPel, O.S. Systems, Nave.rs, CI&T) com progressão interna na CI&T
- **CA3:** Logos/nomes legíveis nos dois temas

**US-14 — Seções "Contextos de atuação" e "Formação"** · P
Como visitante, quero conferir competências, formação, certificações e idiomas, para checar requisitos objetivos.
- **CA1:** Competências em 2 colunas de chips (Gestão & Agile | Técnico & IA)
- **CA2:** Formação, certificações (incl. PDM) e idiomas: PT (nativo), ES (intermediário), EN (intermediário)
- **CA3:** Sem barras de "skill level"

**US-15 — Rodapé com contato** · P
Como visitante, quero os canais de contato ao final da leitura, para agir sem procurar.
- **CA1:** LinkedIn, e-mail, localização
- **CA2:** Citação de fechamento (artefato 01, seção 10)

---

## E3 — SEO e metadados

**US-16 — Meta tags do novo posicionamento** · P
Como visitante vindo de busca/compartilhamento, quero ver título e descrição condizentes com o perfil atual, para não encontrar um "site de dev" desatualizado.
- **CA1:** title/description/og:image refletem o headline novo
- **CA2:** Preview correto ao compartilhar no LinkedIn (og tags)
- **CA3:** `hreflang` pt-BR/en configurado

---

## E4 — Limpeza de dívidas bloqueantes

**US-17 — Remover loader artificial** · P
Como visitante, quero o conteúdo imediatamente, sem esperar animação de 3s que não carrega nada.
- **CA1:** Delay fixo removido
- **CA2:** Conteúdo estático renderiza sem depender da API do GitHub

**US-18 — Migrar defaultProps** · P *(técnica)*
Como mantenedor, quero componentes sem `defaultProps` em função, para eliminar warnings e alinhar ao React moderno.
- **CA1:** Todos os componentes migrados para default parameters
- **CA2:** Zero warnings de deprecação no console

---

## E5 — Prova técnica robusta (v2.1)

**US-19 — GitCard resiliente** · M
Como visitante, quero ver os stats do GitHub mesmo sob limite de API, para a seção nunca aparecer quebrada.
- **CA1:** Dados buscados em build-time (token) ou cache estático como fallback
- **CA2:** Skeleton real durante fetch client-side (se mantido)
- **CA3:** Estado de erro elegante (esconde seção ou mostra fallback, nunca quebra)
- **CA4:** Donut de linguagens legível nos dois temas

**US-20 — Pipeline unificado** · M *(técnica)*
Como mantenedor, quero um único pipeline de CI/CD, para deploy previsível e sem manutenção dupla.
- **CA1:** Um único CI (decidir GitHub Actions ou GitLab)
- **CA2:** Build com `--prefix-paths` automatizado
- **CA3:** Documentado no README

---

## E6 — Qualidade (v2.1)

**US-21 — Testes mínimos** · M *(técnica)*
Como mantenedor, quero smoke tests das seções e dos toggles, para alterar copy/tema sem medo de quebrar a página.
- **CA1:** Render test por seção
- **CA2:** Teste dos toggles de tema e idioma (troca + persistência)
- **CA3:** Script `test` real (fim do placeholder), rodando no CI

---

## E7 — chefIA público (v2.2)

**US-22 — Link para o repositório chefIA** · P
Como visitante, quero acessar o template chefIA, para avaliar a profundidade técnica do trabalho.
- **CA1:** **Gate:** repositório com conteúdo publicado (README, guia, subagentes)
- **CA2:** Botão/link na seção Liderança em IA
- **CA3:** Copy de status atualizada ("template aberto disponível")

---

## Definition of Done (todas as histórias)

- Funciona nos dois temas (claro/escuro)
- Funciona nos dois idiomas (PT-BR/EN)
- Responsivo (375px+)
- Sem strings/cores hardcoded
- Sem warnings novos no console
- Build de produção com `--prefix-paths` passa
- Revisado pelo Michael (conteúdo) quando envolver copy

## Sequenciamento sugerido (dependências)

```
E1 (fundações) ──▶ E2 (seções) ──▶ E3 (SEO) ──▶ deploy MVP
      │                                            
      └── E4 pode rodar em paralelo a E2           
E5, E6 → após MVP · E7 → gated pelo conteúdo do repo
```

**Nota de PO:** o MVP não depende do chefIA estar publicado (US-11 menciona sem linkar). Isso desacopla o lançamento do site do seu trabalho de documentação do repo — dois fluxos de valor independentes.
