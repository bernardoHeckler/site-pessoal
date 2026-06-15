import { MdSchool, MdWork } from "react-icons/md";

const CarreiraData = {
  titulo: "Carreira",
  resumo: {
    descricao:
      "Minha trajetória combina desenvolvimento full stack, engenharia de dados, suporte técnico e formação em Ciência da Computação. Busco crescer em times que valorizam entrega, aprendizado contínuo e construção de soluções bem mantidas.",
    destaques: [
      {
        valor: "Full Stack",
        rotulo: "Atuação atual",
        descricao: "Desenvolvimento e manutenção de aplicações web na Rota System.",
      },
      {
        valor: "Dados",
        rotulo: "Experiência aplicada",
        descricao: "Vivência com pipelines, AWS, SQL, Python e visualização de dados.",
      },
      {
        valor: "2028",
        rotulo: "Formação em andamento",
        descricao: "Ciência da Computação com foco em software, cloud e segurança.",
      },
    ],
  },
  educacao: {
    titulo: "Educação",
    icone: MdSchool,
    itens: [
      {
        id: 1,
        instituicao: "Atitus Educação",
        periodo: "03/2024 — 12/2028",
        descricao:
          "Atualmente no 5º semestre, com foco em Engenharia de Software, Segurança da Informação, cloud computing e fundamentos de sistemas. Desenvolvimento de projetos acadêmicos e próprios com React Native, Supabase, Java, PostgreSQL, PL/pgSQL, Docker, Git/GitHub e testes de APIs via Postman.",
        competencias: ["Engenharia de Software", "Cyber Security", "PostgreSQL", "PL/pgSQL", "React Native"],
      },
      {
        id: 2,
        instituicao: "Data Engineering — Udemy",
        periodo: "08/2025 — 12/2025",
        descricao:
          "Aprofundamento técnico em Python Avançado, ecossistema Docker e arquitetura de dados na AWS para Engenharia de Dados. Certificados disponíveis via LinkedIn.",
        competencias: ["Python", "Docker", "AWS", "Engenharia de Dados"],
      },
      {
        id: 3,
        instituicao: "Trilha Full-Stack — Senac RS",
        periodo: "11/2022 — 03/2023",
        descricao:
          "Fundamentos de JavaScript, Java e bancos de dados relacionais (MySQL).",
        competencias: ["JavaScript", "Java", "MySQL"],
      },
      {
        id: 4,
        instituicao: "Rockfeller Center",
        periodo: "03/2019 — 05/2022",
        descricao:
          "Fluência em inglês conquistada em 2 anos - Intermediário alto (B1)",
        competencias: ["Inglês B1", "Comunicação"],
      },
    ],
  },
  experiencia: {
    titulo: "Experiência",
    icone: MdWork,
    itens: [
      {
        id: 0,
        posicao: "Desenvolvedor Full Stack Júnior - Rota System",
        periodo: "04/2026 - Emprego Atual",
        descricao:
          "Atuação no desenvolvimento e manutenção de aplicações web, contribuindo para otimização de sistemas internos, arquitetura e evolução de aplicações. Experiência prática com React, Node.js, Python, SQL, Redis, Kafka e AWS QuickSight.",
        competencias: ["React", "Node.js", "Python", "SQL", "Redis", "Kafka", "AWS QuickSight"],
      },
      {
        id: 1,
        posicao: "Projeto Pessoal - EnhancedCV",
        periodo: "02/2026 - 03/2026",
        descricao:
          "Desenvolvimento de uma plataforma de geração de currículos com auxílio de IA, automatizando a criação de CVs adaptados para plataformas como Gupy, Indeed e LinkedIn, com foco em legibilidade, estrutura e compatibilidade com filtros ATS.",
        competencias: ["IA", "Automação", "Produto", "ATS", "UX"],
      },
      {
        id: 2,
        posicao: "Engenheiro de Dados (Estágio) - Compass UOL",
        periodo: "08/2025 — 12/2025",
        descricao:
          "Aplicação de práticas de ETL, modelagem de dados e otimização de pipelines. Experiência com Python, Jupyter Notebooks, Amazon S3, AWS Lambda, AWS Glue, Amazon Athena, Docker, Apache Spark e SQL, além de organização e documentação de processos do projeto.",
        competencias: ["ETL", "AWS", "Python", "Apache Spark", "SQL", "Docker"],
      },
      {
        id: 3,
        posicao: "Projetos de Desenvolvimento Front-end (Estudo Dirigido)",
        periodo: "03/2022 — 05/2025",
        descricao:
          "Fase dedicada ao domínio de tecnologias web e mobile. Em vez de atuar no mercado, foquei na construção de aplicações complexas para portfólio, utilizando React, HTML/CSS e JavaScript. Foi o período onde consolidei minha lógica de programação antes de migrar para o mundo dos dados.",
        competencias: ["React", "HTML", "CSS", "JavaScript", "Portfólio"],
      },
      {
        id: 4,
        posicao:
          "Estágio de TI - Secretaria de Educação Municipal de Passo Fundo",
        periodo: "08/2024 — 05/2025",
        descricao:
          "Manutenção de computadores, configuração de redes, suporte técnico, instalação de softwares e hardware.",
        competencias: ["Suporte Técnico", "Redes", "Hardware", "Software"],
      },
      {
        id: 5,
        posicao: "Operador de Caixa",
        periodo: "04/2023 — 09/2023",
        descricao:
          "Primeira experiência com atendimento ao cliente e controle de estoque. Desenvolvi agilidade na resolução de problemas e organização de processos sob pressão.",
        competencias: ["Atendimento", "Organização", "Resolução de Problemas"],
      },
    ],
  },
};

export default CarreiraData;
