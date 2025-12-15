import { MdSchool, MdWork } from "react-icons/md";

const CarreiraData = {
  titulo: "Carreira",
  educacao: {
    titulo: "Educação",
    icone: MdSchool,
    itens: [
      {
        id: 1,
        instituicao: "Atitus Educação",
        periodo: "03/2024 — 12/2028",
        descricao:
          "Python, Git/GitHub, LinkedIn, Google Colab, Canva, Cyber Security, Curso AWS, Cisco Packet Tracer, Kali Linux, Ethical Hacking, Inteligência Emocional, Liderança, Trabalho em Equipe, Banco de Dados, Full-Stack e JAVA.",
      },
       {
        id: 2,
        instituicao: "Udemy",
        periodo: "08/2025 — 12/2025",
        descricao:
          "Cursos de especialização em Data Engineering, Python Avançado, AWS para Data Engineers e Docker.",
      },
      {
        id: 3,
        instituicao: "Senac RS",
        periodo: "11/2022 — 03/2023",
        descricao:
          "Tecnologias: JavaScript, HTML, CSS, JAVA, MySQL (Banco de dados)",
      },
      {
        id: 4,
        instituicao: "Rockfeller Center",
        periodo: "03/2019 — 05/2022",
        descricao:
          "Fluência em inglês conquistada em 2 anos - Intermediário alto (B1)",
      },
    ],
  },
  experiencia: {
    titulo: "Experiência",
    icone: MdWork,
    itens: [
      {
        id: 1,
        posicao: "Engenheiro de Dados - Compass UOL",
        periodo: "08/2025 — Atualmente",
        descricao:
          "Atuando na Compass UOL, onde estou aprendendo e aplicando práticas de ETL, modelagem de dados e otimização de pipelines. Experiência com Python, Jupyter Notebooks e Ambientes de nuvem da AWS, também com Docker para criar ambientes eficientes de análise. E SQL para transformar dados brutos em insights valiosos. Busco transformar dados em decisões estratégicas, e fazer a organização e Documentação de processos do projeto.",
      },
      {
        id: 1,
        posicao: "Freelancer",
        periodo: "03/2022 — 05/2025",
        descricao:
          "Desenvolvimento de sites, aplicações e landing pages, utilizando HTML, CSS, JavaScript, React, Figma e GitHub.",
      },
      {
        id: 2,
        posicao: "Estágio de TI",
        periodo: "08/2024 — 05/2025",
        descricao:
          "Manutenção de computadores, configuração de redes, suporte técnico, instalação de softwares e hardware.",
      },
      {
        id: 3,
        posicao: "Operador de Caixa",
        periodo: "04/2023 — 09/2023",
        descricao:
          "Atendimento ao cliente, controle de estoque, organização de arquivos, atendimento telefônico.",
      },
    ],
  },
  habilidades: {
    titulo: "Minhas Habilidades",
    itens: [
      {
        id: 1,
        nome: "Python",
        porcentagem: 70,
        idBarra: "barra1-porcento",
      },
      {
        id: 2,
        nome: "GitHub",
        porcentagem: 100,
      },
      {
        id: 3,
        nome: "React",
        porcentagem: 80,
      },
      {
        id: 15,
        nome: "React-Native",
        porcentagem: 40,
      },
      {
        id: 4,
        nome: "JavaScript",
        porcentagem: 70,
      },
      {
        id: 5,
        nome: "SQL",
        porcentagem: 100,
      },
      {
        id: 5,
        nome: "Inglês",
        porcentagem: 75,
      },
      {
        id: 6,
        nome: "Java",
        porcentagem: 60,
      },
      {
        id: 7,
        nome: "Figma",
        porcentagem: 100,
      },
      {
        id: 8,
        nome: "AWS",
        porcentagem: 35,
      },
      {
        id: 9,
        nome: "Pandas",
        porcentagem: 90,
      },
      {
        id: 10,
        nome: "Numpy",
        porcentagem: 80,
      },
      {
        id: 11,
        nome: "Postman",
        porcentagem: 75,
      },
      {
        id: 12,
        nome: "Kali Linux",
        porcentagem: 90,
      },
      {
        id: 13,
        nome: "HTML",
        porcentagem: 100,
      },
      {
        id: 14,
        nome: "CSS",
        porcentagem: 100,
      },
      {
        id: 16,
        nome: "Docker",
        porcentagem: 50,
      },
      {
        id: 17,
        nome: "Jupyter",
        porcentagem: 80,
      },
    ],
  },
};

export default CarreiraData;
