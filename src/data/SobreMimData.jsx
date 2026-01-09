import { MdSchool, MdWork, MdAdd } from "react-icons/md";
import { SiPython, SiMysql, SiReact, SiFigma, SiJavascript, SiHtml5, SiCss3, SiGit, SiPostman, SiDocker, SiJupyter, SiAnaconda, SiPandas, SiNumpy } from "react-icons/si";
import { IoAnalytics } from "react-icons/io5";
import { FaAws, FaJava } from "react-icons/fa";

const SobreMimData = {
  titulo: "Sobre Mim",
  descricao: "Meu nome é Bernardo Heckler e minha base foi construída na prática. Recentemente, fechei um ciclo intenso de estágio na Compass UOL como AWS Cloud Data Engineering, mas minha entrega foi além do pipeline: eu entendi que dados só têm valor quando as pessoas conseguem usá-los.",
  descricaoLonga: [
    "Minha motivação é simples: gosto de codar, buscar resultados e ver como os números validam o que funciona ou não em um negócio.",
    "O que entrego: Engenharia e Análise — domínio de Python, SQL e ETL, com experiência na criação de dashboards que transformam dados brutos em decisões.",
    "Atualmente, busco novos desafios onde eu possa aplicar meu conhecimento em Docker, AWS e infraestrutura de dados para construir soluções robustas e escaláveis.",
  ],

  atividades: [
    {
      id: 1,
      titulo: "Análise de Dados",
      icone: IoAnalytics,
      descricao:
        "No meu último desafio, construí todo o ecossistema de dados — AWS Lambda e S3 até QuickSight. Minha visão de analista serve para garantir que o dashboard final seja impecável, mas meu interesse real está em como os dados chegam lá.",
    },
    {
      id: 2,
      titulo: "Ciências da Computação",
      icone: MdSchool,
      descricao:
        "Sigo no 5º Semestre na Atitus Educação. Tenho mergulhado em Cloud Computing, Hacking Ético, Desenvolvimento de Software, Base Teórica, e a complexidade do hardware no dia a dia.",
    },
    {
      id: 3,
      titulo: "Engenharia de Dados",
      icone: MdWork,
      descricao:
        "Em busca de novos desafios como Júnior ou Estagiário Avançado. Domino o ciclo de ETL, modelagem e otimização de pipelines com Python, Docker e AWS.",
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
