# Artefatos de planejamento — macosta v2

Documentos que servem de base para a evolução do site (novo posicionamento, tema claro/escuro, i18n PT-BR/EN, novas seções). Ordem de leitura sugerida:

1. [`01-content-brief-copy.md`](./01-content-brief-copy.md) — fonte da verdade do conteúdo/copy de cada seção.
2. [`03-wireframe-estrutura.md`](./03-wireframe-estrutura.md) — outline de layout e hierarquia das seções.
3. [`04-backlog-features-historias.md`](./04-backlog-features-historias.md) — épicos, features e histórias de usuário, com DoR/DoD.
4. [`05-design-spec.md`](./05-design-spec.md) — direção visual, tokens de tema e especificação de componentes.
5. [`mockup-macosta.html`](./mockup-macosta.html) — protótipo navegável (abrir direto no browser) com toggle de tema e idioma funcionando, implementando os tokens do design spec.

> **Nota:** não existe um artefato "02" no lote levantado — os documentos 01, 03, 04 e 05 se referenciam entre si com essa numeração, mas o item 02 nunca foi definido (possivelmente research/personas ou um brief de arquitetura de informação). Ficou como pendência confirmar com o Michael o que era esse artefato, ou renumerar a série.

## Pendências identificadas (fora do escopo destes documentos)

- Copy em inglês (EN) revisado — pendência explícita no content brief, bloqueia US-06.
- Conteúdo público do repositório chefIA — gate da US-22 (link do case na seção Liderança em IA).
- Assets: foto do hero em alta resolução, favicon e og:image (design spec §8).
- Decisão de CI/CD único (o repo hoje usa GitLab CI; backlog US-20 pede unificação, sem decidir a ferramenta).
- Decisão sobre token de GitHub para fetch build-time do GitCard (US-19).
- Estratégia de testes (E6/US-21) — hoje não há framework de teste real no projeto.
