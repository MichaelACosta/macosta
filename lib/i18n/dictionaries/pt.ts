import type { Dictionary } from "../types"

export const pt = {
  meta: {
    title:
      "Michael Alexandre Costa — Release Train Engineer (RTE) | Portfolio Delivery | AI Leadership",
    description:
      "Release Train Engineer com background técnico, especializado em portfólio, entrega SAFe e liderança em Inteligência Artificial aplicada à gestão.",
  },
  nav: {
    skipToContent: "Pular para o conteúdo",
    themeToggleLabel: "Alternar tema",
    languageToggleLabel: "Alternar idioma",
    sections: {
      value: "Valor",
      impact: "Impacto",
      ai: "IA",
      leadership: "Liderança",
      trajectory: "Trajetória",
      contexts: "Atuação",
      education: "Formação",
      github: "GitHub",
      contact: "Contato",
    },
  },
  hero: {
    name: "Michael Alexandre Costa",
    headline: "Release Train Engineer (RTE) | Portfolio Delivery | AI Leadership",
    subtitle:
      "Conecto negócio, pessoas, portfólio e Inteligência Artificial para transformar estratégia em execução com previsibilidade, colaboração e geração contínua de valor.",
    ctaLinkedIn: "LinkedIn",
    ctaEmail: "E-mail",
    photoAlt: "Foto de Michael Alexandre Costa",
  },
  whereIAddValue: {
    title: "Onde gero valor",
    items: [
      "Gestão de portfólio e governança de entregas",
      "Coordenação de Agile Release Train (SAFe)",
      "Estratégia e execução ponta a ponta",
      "Inteligência Artificial aplicada à liderança",
      "Gestão baseada em indicadores",
      "Desenvolvimento e liderança direta de pessoas",
      "Alinhamento entre negócio, produto e tecnologia",
    ],
  },
  impact: {
    title: "Impacto comprovado",
    intro: "Resultados concretos nos contextos em que atuo hoje e atuei recentemente.",
    statCards: [
      { value: "7", label: "squads coordenados" },
      { value: "~48", label: "profissionais" },
      { value: "10+", label: "anos em produtos digitais" },
    ],
    ciAndT: {
      title: "CI&T — Release Train Engineer",
      items: [
        "Coordenação de 7 squads multidisciplinares",
        "Ecossistema com ~48 profissionais",
        "Times distribuídos entre CI&T, cliente e parceiros",
        "Governança SAFe: PI Planning, Scrum of Scrums e gestão de dependências",
        "Liderança da frente de IA aplicada à gestão",
        "Migração tecnológica de produtos estratégicos",
        "Evolução da previsibilidade e maturidade das equipes",
      ],
    },
    naveRs: {
      title: "Nave.rs — Front End Lead",
      items: [
        "Liderança técnica e mentoria de Tech Leads",
        "Crescimento do time",
        "Projetos digitais de grande porte",
      ],
    },
  },
  aiLeadership: {
    title: "Liderança em IA",
    intro:
      "Responsável pela frente de IA Generativa aplicada à gestão dentro da comunidade da CI&T. Reconhecido como referência na adoção de IA para liderança e entrega.",
    badge: "Referência na adoção de IA — comunidade CI&T",
    workingWith: {
      title: "Atuação com",
      items: ["Lideranças", "RTEs", "Scrum Masters", "Desenvolvedores", "QA"],
    },
    topics: {
      title: "Temas conduzidos",
      items: [
        "engenharia de prompt",
        "agentes de IA",
        "automação de atividades",
        "produtividade",
        "IA para gestão",
        "boas práticas",
        "capacitação",
      ],
    },
    case: {
      name: "chefIA",
      lead: "Sistema de workflow de gestão baseado em Git + Claude Code.",
      fields: [
        {
          label: "Problema",
          value:
            "Rotinas de gestão (relatório semanal, follow-ups, preparação de 1:1s, análise de tendências) consomem horas recorrentes do RTE/PM.",
        },
        {
          label: "Origem",
          value:
            "Nasce da prática diária — uso uma versão interna equivalente no dia a dia de gestão na CI&T, com ganhos reais em debriefings, relatórios, busca e análise de dados, identificação de inconsistências e apoio à construção de PDIs e feedbacks.",
        },
        {
          label: "Solução",
          value:
            "Repositório Git + Claude Code, com subagentes especializados (relatorio-semanal, follow-up, prep-1on1, tendencias), slash commands, skills e templates.",
        },
        {
          label: "Formato",
          value:
            "Template aberto no GitHub, com guia para outros gestores adotarem — versão pública derivada da prática interna (sem dados sensíveis).",
        },
        {
          label: "Status",
          value:
            "Em desenvolvimento (POC pública em construção): projeto aberto em evolução, construído a partir de uso real em ambiente corporativo.",
        },
      ],
      linkPendingNote:
        "Link do repositório será adicionado quando o conteúdo estiver publicado.",
    },
  },
  leadershipPeople: {
    title: "Liderança e pessoas",
    items: [
      "10+ anos na construção de produtos digitais",
      "Background técnico sólido (dev → Tech Lead → Scrum Master → RTE)",
      "Scrum Master em múltiplos times",
      "Formação e desenvolvimento de pessoas",
      "Cultura de melhoria contínua",
    ],
    badgePdm: "PDM — People Development Manager (CI&T)",
  },
  trajectory: {
    title: "Trajetória",
    stops: [
      {
        name: "UFPel",
        description:
          "Bacharelado e Mestrado em Ciência da Computação (pesquisa em computação paralela)",
      },
      { name: "O.S. Systems / UpdateHub", description: "Software Developer" },
      { name: "Nave.rs", description: "Front End Lead" },
      {
        name: "CI&T",
        description: "Developer → Scrum Master → RTE → líder direto de pessoas (PDM)",
      },
    ],
    ciAndTSubline: "Progressão interna: da engenharia à liderança de trem ágil e de pessoas.",
  },
  contexts: {
    title: "Contextos de atuação",
    managementAndAgile: {
      title: "Gestão & Agile",
      items: [
        "Portfolio Management",
        "SAFe",
        "Agile Release Train",
        "Gestão de Programas",
        "Governança",
        "Gestão de Pessoas",
      ],
    },
    technicalAndAi: {
      title: "Técnico & IA",
      items: [
        "IA Generativa",
        "Engenharia de Prompt",
        "Agentes de IA",
        "React",
        "TypeScript",
        "Node.js",
        "Arquitetura",
        "Migração de sistemas",
        "Pesquisa acadêmica",
      ],
    },
  },
  education: {
    title: "Formação e credenciais",
    academic: {
      title: "Formação",
      items: [
        { label: "Bacharel em Ciência da Computação — UFPel" },
        { label: "Mestre em Ciência da Computação — UFPel" },
      ],
    },
    certifications: {
      title: "Certificações",
      items: [
        { label: "SAFe" },
        { label: "PDM — People Development Manager (CI&T)" },
        { label: "Liderança" },
        { label: "Gestão de Pessoas" },
        { label: "IA Generativa" },
        { label: "Scrum" },
        { label: "Gestão" },
      ],
    },
    languages: {
      title: "Idiomas",
      items: [
        { label: "Português (nativo)" },
        { label: "Espanhol (intermediário)" },
        { label: "Inglês (intermediário)" },
      ],
    },
  },
  githubProof: {
    title: "Ainda escrevo código",
    intro: "Alguns números direto do GitHub:",
    note: "Dados em tempo real da API pública do GitHub (@MichaelACosta).",
    followers: "Seguidores",
    following: "Seguindo",
    repositories: "Repositórios",
    languagesLabel: "Linguagens mais usadas",
    otherLanguagesLabel: "Outras",
    errorMessage: "Não foi possível carregar os dados do GitHub agora.",
  },
  footer: {
    linkedInLabel: "linkedin.com/in/michael-alexandre-costa-9217b0b3",
    emailLabel: "costa0ma@gmail.com",
    location: "Camaquã, RS — Remoto",
    closingQuote:
      "Release Train Engineer com background técnico e visão de negócio, especializado em conectar pessoas, estratégia, portfólio e Inteligência Artificial para transformar organizações em ambientes mais previsíveis, colaborativos e orientados a valor.",
    copyrightName: "Michael Alexandre Costa",
  },
} satisfies Dictionary
