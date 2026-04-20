import { MdSchool, MdWork, MdAdd } from "react-icons/md";
import { SiPython, SiMysql, SiReact, SiFigma, SiJavascript, SiHtml5, SiCss3, SiGit, SiPostman, SiDocker, SiJupyter, SiAnaconda, SiPandas, SiNumpy } from "react-icons/si";
import { IoAnalytics } from "react-icons/io5";
import { FaAws, FaJava } from "react-icons/fa";

const SobreMimData = {
  titulo: "Sobre Mim",
  descricao: "Meu nome é Bernardo Heckler e sou Desenvolvedor Full Stack Júnior na Rota System, com grande interesse em oportunidades que me permitam crescer profissionalmente e contribuir de forma significativa com a equipe.",
  descricaoLonga: [
    "Tenho conhecimentos em desenvolvimento tanto no front-end quanto no back-end, utilizando tecnologias como JavaScript, Python, SQL e frameworks modernos como React/Next, além de experiência com desenvolvimento em servidores e bancos de dados. Busco sempre a melhor solução para cada problema.",
    "Sou dedicado e tenho facilidade de aprendizado, com forte interesse em resolver problemas de forma eficiente. Invisto continuamente no meu aprimoramento técnico, estudando novas ferramentas e tendências do mercado, além de desenvolver projetos próprios para consolidar meus conhecimentos.",
    "Acredito que, ao longo da minha carreira, posso agregar valor por meio do meu comprometimento, curiosidade e vontade de evoluir constantemente. Estou disposto a enfrentar desafios e pronto para colaborar com a equipe, aprender com profissionais mais experientes e crescer junto com a empresa.",
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
      icone: MdAdd,
    },
    {
      id: 2,
      icone: MdAdd,
    },
  ],
};

export default SobreMimData;
