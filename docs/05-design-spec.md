# Design Spec — macosta v2

> Direção visual, tokens e especificação de componentes. Complementa o wireframe (artefato 03) e alimenta as histórias do E1/E2 (artefato 04).

---

## 1. Conceito e direção

**Sujeito:** perfil profissional de um Release Train Engineer com background de engenharia e liderança em IA.
**Público:** recrutadores e lideranças (primário), pares técnicos (secundário).
**Trabalho da página:** comunicar senioridade híbrida (gestão + técnica) em menos de 30 segundos de scroll.

**Metáfora visual — "o trilho":** RTE é *Release Train* Engineer. A assinatura da página é uma **linha de trilho contínua** que percorre verticalmente as seções — discreta, 2px, na cor de acento — conectando hero → impacto → trajetória → contato. Na seção Trajetória ela vira a própria timeline (as "estações": UFPel → O.S. Systems → Nave.rs → CI&T). É um elemento único, memorável e que codifica algo verdadeiro do conteúdo (progressão contínua), não decoração.

**O que evitar deliberadamente:**
- Visual "portfólio de template" (hero com gradiente roxo, glassmorphism, partículas)
- Arco-íris de cores do infográfico — o site é mais contido que a peça de LinkedIn
- Barras de skill, medidores de porcentagem, contadores animados

---

## 2. Paleta (tokens de cor)

Base nos azuis-marinho do infográfico (continuidade de identidade) + **âmbar de sinalização** como acento único — referência direta a sinalização ferroviária (coerente com a metáfora do trilho) e cor que funciona bem sobre navy e sobre claro.

### Tokens semânticos

| Token | Dark (default) | Light | Uso |
|-------|---------------|-------|-----|
| `bg` | `#0B1220` | `#F7F8FA` | Fundo da página |
| `surface` | `#131C2E` | `#FFFFFF` | Cards, header, GitCard |
| `surface-alt` | `#1B2740` | `#EEF1F6` | Seção destacada (Liderança em IA) |
| `text` | `#E8ECF4` | `#14213D` | Texto principal |
| `text-muted` | `#9AA5BC` | `#5A6478` | Legendas, labels, metadados |
| `accent` | `#F2A33C` | `#C97E1A` | Trilho, CTAs, badge PDM, links, foco |
| `accent-contrast` | `#0B1220` | `#FFFFFF` | Texto sobre o acento |
| `border` | `#26314A` | `#D8DEE9` | Divisores, contorno de chips |
| `positive` | `#3FB47F` | `#2E8B62` | Uso raro (estados de sucesso) |

Regras:
- **Acento em um lugar só por viewport:** trilho + no máximo 1 CTA/badge visível por vez. O resto é navy/neutro.
- Nenhuma cor hardcoded em componente — tudo via ThemeProvider (US-03).
- O acento no tema claro é escurecido (`#C97E1A`) para manter contraste AA sobre branco.

---

## 3. Tipografia

| Papel | Fonte | Pesos | Uso |
|-------|-------|-------|-----|
| Display | **Archivo** (variable) | 600–800, largura expandida no hero | Nome, títulos de seção, números dos stat cards |
| Corpo | **IBM Plex Sans** | 400 / 500 | Parágrafos, bullets, chips |
| Dados | **IBM Plex Mono** | 400 | Labels dos stat cards, GitCard, metadados da timeline |

Justificativa: IBM Plex tem herança de engenharia (assunto real da página) e excelente suporte a PT-BR; Archivo expandido dá presença ao hero sem recorrer a serifa editorial genérica. O mono nos dados cria a textura "técnica" que sustenta o posicionamento híbrido sem precisar dizer isso.

### Escala tipográfica (mobile → desktop)

| Papel | Mobile | Desktop |
|-------|--------|---------|
| Nome (hero) | 34px / 1.1 | 56px / 1.05 |
| Headline (hero) | 15px mono, letter-spacing 0.06em, caixa alta | 17px |
| Título de seção | 24px | 32px |
| Número de stat card | 44px | 64px |
| Corpo | 16px / 1.6 | 17px / 1.65 |
| Label/mono | 12px, caixa alta, 0.08em | 13px |

**Detalhe do hero:** o headline "RELEASE TRAIN ENGINEER (RTE) | PORTFOLIO DELIVERY | AI LEADERSHIP" vai em **IBM Plex Mono caixa alta com espaçamento**, como uma "placa de via" — pequeno, acima do nome gigante em Archivo. Inverte a hierarquia óbvia (cargo pequeno, nome enorme) e é mais elegante que headline gritado.

---

## 4. Espaçamento, grid e forma

- **Escala de espaço:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 (px)
- **Container:** max-width 1080px, padding lateral 20px (mobile) / 48px (desktop)
- **Grid:** 12 colunas desktop; seções de conteúdo usam 8 colunas centrais, o trilho ocupa a margem esquerda
- **Ritmo vertical:** 96px entre seções (desktop), 64px (mobile)
- **Raio:** 8px para cards e chips, 999px para badges/toggles — um raio só, aplicado consistentemente
- **Sombra:** quase nenhuma no dark (elevação por cor de surface); no light, sombra única `0 1px 3px rgba(20,33,61,0.08)` para cards

---

## 5. Componentes

### Header
- Altura 56px, `surface` com blur leve ao rolar, borda inferior `border`
- Esquerda: monograma "MC" em Archivo 700
- Centro (desktop): âncoras em Plex Sans 14px, `text-muted` → `text` no hover
- Direita: toggle de tema + seletor de idioma
- Mobile: some o centro; ficam monograma + 2 controles

### Toggle de tema
- Ícone único que alterna (sol/lua), 40x40px de área de toque, sem switch deslizante
- Transição de tema: 200ms em `background-color`/`color`; **sem** animação global elaborada

### Seletor de idioma
- Texto "PT | EN" em mono 13px; idioma ativo em `text`, inativo em `text-muted`
- Sem bandeiras (bandeira ≠ idioma; EN não é só EUA/UK)

### Hero
```
│ (trilho começa aqui)
│  RELEASE TRAIN ENGINEER (RTE) · PORTFOLIO DELIVERY · AI LEADERSHIP   ← mono, pequeno
│  Michael Alexandre Costa                                             ← Archivo, gigante
│  Subtítulo em 2 linhas, Plex Sans, text-muted                        
│  [LinkedIn]  [E-mail]                                                ← 1 sólido + 1 ghost
│  (foto circular à direita no desktop; acima do nome no mobile)
```
- CTA primário (LinkedIn): fundo `accent`, texto `accent-contrast`
- CTA secundário (e-mail): borda `border`, texto `text`

### Stat cards (Impacto comprovado)
- Card `surface`, número em Archivo 700 na cor `text` (não no acento — acento é escasso), label embaixo em mono `text-muted`
- 3 cards em linha (desktop) / carrossel horizontal com scroll-snap (mobile)
- O trilho passa por trás dos cards, criando a leitura "estações de resultado"

### Chips (temas de IA, competências)
- Altura 32px, borda `border`, fundo transparente, texto Plex Sans 14px
- Sem cor por categoria — categorias separadas por coluna/título, não por cor

### Badge PDM
- Único chip com tratamento de acento: borda e texto em `accent`, ícone de pessoa
- É o "um acessório" da seção Liderança e pessoas

### Timeline (Trajetória)
- O trilho vira a linha da timeline; cada empresa é uma "estação": círculo 12px em `accent`, nome em Plex Sans 600, período/papel em mono `text-muted`
- Progressão interna da CI&T como sub-estações menores
- Desktop horizontal, mobile vertical (o trilho já é vertical no mobile, então a timeline se integra naturalmente)

### Seção Liderança em IA
- Fundo `surface-alt` de borda a borda — única seção com fundo diferenciado (destaque estrutural, não decorativo)
- Case chefIA como card interno com os passos problema → origem → solução → status em lista rotulada por mono labels

### GitCard (prova técnica)
- Reestilizado com os tokens: fundo `surface`, números em mono
- Donut de linguagens: usar série de azuis + acento derivados do tema (verificar as duas paletas), nunca as cores default da reaviz
- Skeleton: blocos `surface-alt` pulsando sutilmente (opacity 0.6 ↔ 1)

---

## 6. Movimento

Orçamento de animação deliberadamente pequeno — 3 momentos, nada mais:

1. **Trilho desenhando no load:** a linha cresce de cima pra baixo (600ms, ease-out) uma única vez
2. **Reveal por seção no scroll:** fade + translateY 12px (300ms), threshold 20%, uma vez só
3. **Hover de CTA/estação:** 150ms em cor/escala 1.02

- `prefers-reduced-motion: reduce` → tudo vira estado final estático, sem exceção
- Sem parallax, sem contadores animados, sem partículas

---

## 7. Acessibilidade (quality floor)

- Contraste AA mínimo em todos os pares token (verificar `accent` sobre `surface` nos 2 temas)
- Foco visível: outline 2px `accent` com offset 2px, nunca removido
- Área de toque mínima 44px nos controles do header
- Toggle de tema e idioma com `aria-label` e estado anunciado
- Âncoras do header navegáveis por teclado; skip-link para o conteúdo
- Imagens com alt real (foto: "Michael Alexandre Costa"); trilho é decorativo → `aria-hidden`
- `lang` do documento muda com o idioma selecionado (pt-BR / en)

---

## 8. Assets necessários

| Asset | Especificação | Status |
|-------|--------------|--------|
| Foto do hero | Mesma do infográfico, mínimo 640px, recorte circular; testar sobre os 2 fundos | Reaproveitar |
| Monograma "MC" | Tipográfico (Archivo 700), não precisa de logo desenhado | Criar no código |
| Favicon | Monograma sobre `accent`, 32/180/512px | Gerar |
| og:image | 1200x630, nome + headline sobre navy com trilho | Criar (pode ser estático) |
| Fontes | Archivo, IBM Plex Sans, IBM Plex Mono via Fontsource (self-host, sem Google Fonts em runtime) | Instalar |

---

## 9. Checklist de crítica (antes de aprovar o visual)

- [ ] O acento aparece no máximo 2 vezes por viewport?
- [ ] Tirando o trilho, alguma seção pareceria "template de portfólio"? Se sim, revisar
- [ ] Tema claro foi revisado de verdade (foto, logos, donut) ou só inverteu cores?
- [ ] Hero legível em 375px sem scroll?
- [ ] Screenshot dos 2 temas × 2 idiomas × mobile/desktop (8 combinações) revisado
- [ ] Com `prefers-reduced-motion`, a página continua completa?

---

## Vínculo com o backlog

- Tokens (§2–4) → **US-03** (critérios de aceite ganham a tabela de tokens como referência)
- Header/toggles (§5) → **US-01, US-04, US-08**
- Hero (§5) → **US-07** · Stat cards → **US-10** · Timeline/trilho → **US-13**
- GitCard (§5) → **US-19** · Acessibilidade (§7) entra no **DoD global**
