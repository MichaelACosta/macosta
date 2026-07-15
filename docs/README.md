# Artefatos de planejamento — macosta v2

Documentos que servem de base para a evolução do site (novo posicionamento, tema claro/escuro, i18n PT-BR/EN, novas seções). Ordem de leitura sugerida:

1. [`01-content-brief-copy.md`](./01-content-brief-copy.md) — fonte da verdade do conteúdo/copy de cada seção, bilíngue PT-BR/EN.
2. [`02-mapa-de-migracao.md`](./02-mapa-de-migracao.md) — checklist do que sai, muda e entra na migração do site atual para o novo (conteúdo e dívidas técnicas).
3. [`03-wireframe-estrutura.md`](./03-wireframe-estrutura.md) — outline de layout e hierarquia das seções.
4. [`04-backlog-features-historias.md`](./04-backlog-features-historias.md) — épicos, features e histórias de usuário, com DoR/DoD.
5. [`05-design-spec.md`](./05-design-spec.md) — direção visual, tokens de tema e especificação de componentes.
6. [`mockup-macosta.html`](./mockup-macosta.html) — protótipo navegável (abrir direto no browser) com toggle de tema e idioma funcionando, implementando os tokens do design spec.

## Pendências identificadas (fora do escopo destes documentos)

- **Conteúdo público do repositório chefIA** — gate da US-22 (link do case na seção Liderança em IA). *A ser enviado pelo Michael.*
- **Assets**: foto do hero em alta resolução, favicon e og:image (design spec §8). *A ser enviado pelo Michael.*
- **Decisão de CI/CD único** (o repo hoje usa GitLab CI; backlog US-20 pede unificação, sem decidir a ferramenta). Node já está fixado no repo via `.nvmrc`/`engines` (22.x, `<26`), então qualquer pipeline escolhido deve usar essa versão. *A definir com o Tech Lead.*
- **Decisão sobre token de GitHub** para fetch build-time do GitCard (US-19). *A definir com o Tech Lead.*
- **Estratégia de testes** (E6/US-21) — hoje não há framework de teste real no projeto. *A definir com o Tech Lead.*
