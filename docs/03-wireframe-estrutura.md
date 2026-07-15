# Wireframe / Estrutura de Seções — macosta v2

> Outline de layout, hierarquia e notas visuais. Sem código ainda. Base: tema escuro atual (manter identidade), single page com scroll.

## Visão geral da página

```
┌─────────────────────────────────────┐
│ 01 HERO                    (destaque máximo)
├─────────────────────────────────────┤
│ 02 ONDE GERO VALOR         (scan rápido)
├─────────────────────────────────────┤
│ 03 IMPACTO COMPROVADO      (stat cards — 2º maior destaque)
├─────────────────────────────────────┤
│ 04 LIDERANÇA EM IA         (seção assinatura + case chefIA)
├─────────────────────────────────────┤
│ 05 LIDERANÇA E PESSOAS     (inclui badge PDM)
├─────────────────────────────────────┤
│ 06 TRAJETÓRIA              (timeline)
├─────────────────────────────────────┤
│ 07 CONTEXTOS DE ATUAÇÃO    (2 colunas)
├─────────────────────────────────────┤
│ 08 FORMAÇÃO E CREDENCIAIS  (compacto)
├─────────────────────────────────────┤
│ 09 PROVA TÉCNICA (GitCard) (apoio)
├─────────────────────────────────────┤
│ 10 RODAPÉ / CONTATO
└─────────────────────────────────────┘
```

---

## 01 — Hero

```
┌──────────────────────────────────────────────┐
│  [foto]   MICHAEL ALEXANDRE COSTA            │
│           RTE | Portfolio Delivery |          │
│           AI Leadership                       │
│           subtítulo (1-2 linhas)              │
│           [LinkedIn] [E-mail] [(CV)]          │
└──────────────────────────────────────────────┘
```

- Acima da dobra completo, inclusive no mobile
- Foto circular (reaproveitar padrão do infográfico)
- CTAs como botões/ícones discretos — tom seco, sem "fale comigo!"
- Sem animação de loader artificial: conteúdo estático renderiza imediato

## 02 — Onde gero valor

- Grid de bullets com ícone + texto curto (7 itens)
- Desktop: 2 colunas ou grid 3+4 · Mobile: 1 coluna
- Sem título de marketing; título literal: "Onde gero valor"

## 03 — Impacto comprovado

```
┌────────┐ ┌────────┐ ┌────────┐
│   7    │ │  ~48   │ │  10+   │
│ squads │ │ profis.│ │  anos  │
└────────┘ └────────┘ └────────┘
CI&T — RTE            Nave.rs — Front End Lead
• bullets…            • bullets…
```

- Stat cards em destaque no topo da seção (número grande, label pequena)
- Abaixo, duas sub-colunas (CI&T / Nave.rs) com bullets
- É a seção de maior peso visual depois do hero

## 04 — Liderança em IA (seção assinatura)

- Fundo levemente diferenciado (card grande ou faixa) para marcar destaque
- Estrutura interna:
  1. Intro (2 linhas) + selo "referência na adoção de IA na comunidade CI&T"
  2. Chips: públicos de atuação + temas conduzidos
  3. **Case chefIA** em formato problema → solução → resultado
  4. Botão/link para o repositório (se público)
- Mobile: chips viram lista compacta com wrap

## 05 — Liderança e pessoas

- Lista de credenciais com destaque para **badge PDM** (visual distinto: borda ou cor de acento)
- 10+ anos pode repetir como stat pequeno se não conflitar com a seção 03

## 06 — Trajetória

```
UFPel ──▶ O.S. Systems ──▶ Nave.rs ──▶ CI&T
                                        └ Dev → SM → RTE → PDM
```

- Desktop: timeline horizontal com logos/nomes
- Mobile: vertical
- Última parada (CI&T) mostra a progressão interna — é o argumento central do "background técnico"

## 07 — Contextos de atuação

- Duas colunas lado a lado: **Gestão & Agile** | **Técnico & IA**
- Tags/chips, não barras de "skill level" (evitar visual datado)
- Mobile: colunas empilham

## 08 — Formação e credenciais

- Três blocos compactos: Formação | Certificações | Idiomas
- Baixa altura; é seção de conferência, não de venda

## 09 — Prova técnica (GitCard)

- Reaproveitar o GitCard atual (stats + donut de linguagens)
- Título curto: "Ainda escrevo código" ou "GitHub"
- Carregamento client-side com skeleton real (sem delay fixo); fallback com dados de build-time se a lib/token permitir

## 10 — Rodapé / contato

- LinkedIn, e-mail, localização (Camaquã, RS — Remoto)
- Citação de fechamento em itálico/destaque discreto
- Copyright + ano

---

## Notas gerais de layout

- **Header fixo (novo):** barra fina no topo com âncoras das seções + dois controles à direita: toggle de tema (☀/🌙) e seletor de idioma (PT | EN). Mobile: controles visíveis, âncoras em menu hambúrguer ou omitidas.
- **Tema:** dois temas completos, claro e escuro. Escuro segue como default/identidade; claro derivado dos mesmos tokens (definir paleta em ThemeProvider, nunca cor hardcoded em componente). Persistir escolha (localStorage) e respeitar `prefers-color-scheme` na primeira visita. Acento de cor único para CTAs e badges nos dois temas (evitar arco-íris de cores do infográfico). Atenção especial: foto do hero, logos da timeline e donut do GitCard precisam de contraste adequado nos dois temas.
- **Idiomas:** site bilíngue PT-BR/EN com alternância instantânea (sem reload perceptível). Todo texto vem de dicionário de traduções — nenhuma string hardcoded. Default: PT-BR (ou idioma do navegador). Persistir escolha. SEO: `hreflang` + meta tags por idioma.
- **Tipografia:** hierarquia forte no hero e nos stat cards; corpo de texto contido
- **Responsivo:** mobile-first; styled-system já suporta arrays responsivos
- **Performance:** conteúdo estático primeiro, GitCard como única dependência de rede
