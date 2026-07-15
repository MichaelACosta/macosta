# Visão Geral do Repositório — `macosta`

## O que é

Site de perfil pessoal (portfólio) de **Michael Costa**, desenvolvedor front-end.
É uma página única que exibe uma apresentação pessoal e um cartão com estatísticas
do GitHub (seguidores, seguindo, número de repositórios e um gráfico de pizza das
linguagens mais usadas), consumidas em tempo real pela API pública do GitHub.

- **Autor:** Michael Costa (`costa0ma@gmail.com`)
- **Versão:** 0.3.0
- **Licença:** MIT
- **Repositório:** https://github.com/MichaelACosta/macosta

## Stack / Tecnologias

| Camada | Tecnologia |
|---|---|
| Framework | [Gatsby 5](https://www.gatsbyjs.com/) (React 18) |
| Linguagem | JavaScript + TypeScript (parcial) |
| Estilização | [styled-components](https://styled-components.com/) + [styled-system](https://styled-system.com/) |
| Gráficos | [reaviz](https://reaviz.dev/) (PieChart) |
| HTTP | axios |
| SEO | react-helmet |
| Fontes | gatsby-omni-font-loader (Ubuntu via Google Fonts) + Inter (local `woff2`) |
| Formatação | Prettier |
| Deploy | `gh-pages` (GitHub Pages) e/ou GitLab Pages |

## Estrutura de Pastas

```
macosta/
├── gatsby-config.ts       # Config do Gatsby (pathPrefix /macosta, metadata, plugins)
├── gatsby-browser.js      # Importa styles.css globalmente
├── gatsby-ssr.js          # Preload da fonte Inter no <head>
├── tsconfig.json          # Config TypeScript (strict, jsx: react)
├── package.json           # Dependências e scripts
├── .gitlab-ci.yml         # Pipeline de deploy (GitLab Pages, branch master)
├── static/                # Assets estáticos (favicon, fontes)
│   ├── favicon.ico
│   └── fonts/Inter-roman.var.woff2
└── src/
    ├── styles.css         # Estilos globais
    ├── pages/
    │   ├── index.js       # Página principal
    │   └── 404.js         # Página de erro
    ├── Services/
    │   └── gitApi.js      # Cliente da API do GitHub (getUser, getRepos)
    └── components/
        ├── Wrapper/       # Layout base (background + Header + <main>)
        ├── Header/        # Cabeçalho com título/link "<Devs />"
        ├── Seo/           # Metatags via react-helmet
        ├── Loader/        # Spinner 3D animado (TypeScript)
        ├── Profile/       # Apresentação pessoal + avatar
        ├── GitCard/       # Estatísticas do GitHub + gráfico de linguagens
        ├── Grid/          # Primitivos de layout (Row, Column) via styled-system
        └── Text/          # Componente de texto tipográfico com variantes
```

## Como Funciona (fluxo)

1. **`src/pages/index.js`** é o ponto de entrada:
   - No `useEffect`, busca o usuário do GitHub (`DEFAULT_USERNAME = "MichaelACosta"`)
     via `getUser` de `gitApi.js`.
   - Exibe o **`Loader`** (spinner) por ~3 segundos após os dados chegarem, depois
     renderiza a página.
   - Renderiza **`Profile`** (avatar + texto de apresentação) e **`GitCard`**.

2. **`GitCard`** faz uma segunda chamada (`getRepos`) para listar os repositórios do
   usuário, processa as linguagens em `Utils.js` (`formatDataLanguages`) e exibe:
   - `BoxInformation`: seguidores, seguindo, repositórios públicos.
   - `ChartContainer`: gráfico de pizza (donut) com as linguagens mais usadas
     (renderizado apenas quando há mais de 1 linguagem).

3. **Camada de UI compartilhada**:
   - `Grid` (`Row`/`Column`) e `Text` usam **styled-system**, permitindo props
     responsivas por arrays (ex.: `width={["100%", "50%"]}` → mobile/desktop).
   - `Wrapper` aplica o tema escuro de fundo (`#1c1d25`) e o `Header`.

## Scripts

| Comando | Ação |
|---|---|
| `yarn develop` / `yarn dev` | Servidor de desenvolvimento |
| `yarn build` | Build de produção do Gatsby |
| `yarn serve` | Serve o build localmente |
| `yarn deploy` | Build com `--prefix-paths` e publica no GitHub Pages (`gh-pages`) |
| `yarn format` | Formata o código com Prettier |
| `yarn test` | *Placeholder* — não há testes implementados |

## Configuração Notável

- **`pathPrefix: /macosta`** em `gatsby-config.ts` — o site é servido sob o subcaminho
  `/macosta` (típico de GitHub/GitLab Pages de projeto). Por isso os builds de deploy
  usam `--prefix-paths`.
- **CI/CD:** há `.gitlab-ci.yml` (deploy no GitLab Pages a partir da branch `master`),
  além do fluxo `gh-pages` para o GitHub Pages.
- **Idioma:** conteúdo (textos do perfil) em Português (pt-BR).

## Observações / Pontos de Atenção

- **API do GitHub sem autenticação:** `gitApi.js` chama a API pública sem token, sujeita
  ao limite de ~60 requisições/hora por IP.
- **Delay artificial de 3s:** o `Loader` é mantido por `setTimeout` fixo de 3000ms mesmo
  quando os dados já chegaram — decisão de UX, não de carregamento real.
- **Mistura JS/TS:** a maior parte é `.js`; apenas `Loader/index.tsx` e os arquivos
  `gatsby-*.ts` usam TypeScript.
- **Sem testes:** o script `test` é apenas um placeholder.
- **`defaultProps` em componentes de função** (`Header`, `Text`) — padrão descontinuado
  no React moderno, candidato a refatoração futura para valores padrão nos parâmetros.
