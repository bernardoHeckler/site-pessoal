import { MdSchool, MdWork } from "react-icons/md";
import { SiPython, SiMysql, SiReact, SiFigma, SiJavascript, SiHtml5, SiCss3, SiGit, SiPostman, SiDocker, SiJupyter, SiAnaconda, SiPandas, SiNumpy } from "react-icons/si";
import { IoAnalytics } from "react-icons/io5";
import { FaAws, FaJava } from "react-icons/fa";

const SobreMimData = {
  titulo: "Sobre Mim",
  descricao: "Meu nome é Bernardo Heckler e sou Desenvolvedor Full Stack Júnior na Rota System, com grande interesse em oportunidades que me permitam crescer profissionalmente e contribuir de forma significativa com a equipe.",
  pontosChave: [
    "Full Stack Júnior",
    "React, Python e SQL",
    "APIs, dados e cloud",
    "Foco em evolução técnica",
  ],
  descricaoLonga: [
    "Tenho conhecimentos em desenvolvimento tanto no front-end quanto no back-end, utilizando tecnologias como JavaScript, Python, SQL e frameworks modernos como React, além de experiência com servidores, bancos de dados e integração de sistemas. Busco sempre entender o problema antes de propor a solução.",
    "Sou dedicado, tenho facilidade de aprendizado e me interesso por resolver problemas de forma eficiente. Invisto continuamente no meu aprimoramento técnico, estudando ferramentas atuais do mercado e desenvolvendo projetos próprios para consolidar meus conhecimentos.",
    "Quero evoluir em ambientes onde possa entregar valor, aprender com profissionais mais experientes e assumir responsabilidades de forma gradual. Meu foco é crescer com consistência, mantendo organização, comunicação clara e qualidade técnica.",
  ],

  atividades: [
    {
      id: 1,
      titulo: "Dev Full Stack",
      icone: MdWork,
      descricao:
        "Atualmente trabalho na Rota System, no desenvolvimento e manutenção de aplicações web. Tenho experiência tanto no front-end quanto no back-end, buscando sempre soluções eficientes, escaláveis e bem estruturadas.",
    },
    {
      id: 2,
      titulo: "Engenheiro de Dados",
      icone: IoAnalytics,
      descricao:
        "Tenho experiência na construção de pipelines de dados e análise, utilizando ferramentas como AWS (Lambda, S3 e QuickSight). Minha visão analítica contribui para garantir qualidade e confiabilidade desde a origem até a visualização dos dados.",
    },
    {
      id: 3,
      titulo: "Ciência da Computação",
      icone: MdSchool,
      descricao:
        "Atualmente no 5º semestre de Ciência da Computação na Atitus Educação, com foco em desenvolvimento de software, cloud computing e fundamentos teóricos que sustentam a construção de sistemas robustos.",
    },
  ],

  tecnologias: [
    {
      id: 1,
      nome: "Python",
      icone: SiPython,
    },
    {
      id: 14,
      nome: "Docker",
      icone: SiDocker,
    },
    {
      id: 2,
      nome: "MySQL",
      icone: SiMysql,
    },
    {
      id: 3,
      nome: "React",
      icone: SiReact,
    },
    {
      id: 15,
      nome: "Jupyter",
      icone: SiJupyter,
    },
    {
      id: 16,
      nome: "Anaconda",
      icone: SiAnaconda,
    },
    {
      id: 4,
      nome: "Figma",
      icone: SiFigma,
    },
    {
      id: 5,
      nome: "JavaScript",
      icone: SiJavascript,
    },
    {
      id: 6,
      nome: "Java",
      icone: FaJava,
    },
    {
      id: 7,
      nome: "HTML",
      icone: SiHtml5,
    },
    {
      id: 8,
      nome: "CSS",
      icone: SiCss3,
    },
    {
      id: 9,
      nome: "AWS",
      icone: FaAws,
    },
    {
      id: 10,
      nome: "Git",
      icone: SiGit,
    },
    {
      id: 11,
      nome: "Pandas",
      icone: SiPandas,
    },
    {
      id: 12,
      nome: "Numpy",
      icone: SiNumpy,
    },
    {
      id: 13,
      nome: "Postman",
      icone: SiPostman,
    },
  ],

  futurasIdeias: [
    {
      id: 1,
      titulo: "Full Stack com produto real",
      icone: MdWork,
      descricao:
        "Aprofundar minha atuação em aplicações web completas, conectando interface, regras de negócio, banco de dados e deploy com foco em usabilidade e manutenção.",
    },
    {
      id: 2,
      titulo: "Dados aplicados ao negócio",
      icone: IoAnalytics,
      descricao:
        "Usar análise, automações e pipelines para transformar dados em visões úteis, confiáveis e fáceis de consumir por equipes técnicas e de negócio.",
    },
    {
      id: 3,
      titulo: "Base técnica sólida",
      icone: MdSchool,
      descricao:
        "Continuar fortalecendo fundamentos de engenharia de software, cloud, segurança e boas práticas para construir soluções cada vez mais robustas.",
    },
  ],
};

export default SobreMimData;
