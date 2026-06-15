import projetoPortfolioImg from "../svg/imgportfolio.svg";
import projetoCatalogoFilmesImg from "../svg/imgcatalogofilmes.svg";
import projetoChatBotImg from "../svg/imgchatbot.svg";
import apitrabalho from "../svg/apitrabalho.svg";
import apimicroservices from "../svg/apimicroservice.svg";
import briqueshop from "../svg/briqueshop.svg";
import compassUOL from "../svg/compass uol.svg";

const DEFAULT_IMAGE = projetoPortfolioImg;

const languageCategoryMap = {
  Java: "java",
  JavaScript: "web",
  TypeScript: "web",
  HTML: "web",
  CSS: "web",
  Python: "dados",
  "Jupyter Notebook": "dados",
  PLpgSQL: "dados",
};

const technologyLabelMap = {
  PLpgSQL: "PL/pgSQL",
};

const categoryImageMap = {
  api: apitrabalho,
  java: apimicroservices,
  "app mobile": briqueshop,
  dados: compassUOL,
  web: projetoCatalogoFilmesImg,
  aplicacao: projetoChatBotImg,
};

const githubOnlyProjectAllowlist = new Set([
  "site-pessoal",
  "pinansya",
  "ajax",
  "cursor-tenis-store",
  "tarefa-plpgsql",
  "api-empresarial",
  "sys_bank-desafio_dio.me",
  "adivinhe_palavra",
  "comp-dist-rabbitmq-ai-challenge",
]);

const normalizeRepoName = (value = "") =>
  value
    .replace(/\.git$/i, "")
    .trim()
    .toLowerCase();

const extractRepoNameFromUrl = (url) => {
  if (!url || !url.includes("github.com")) return null;

  try {
    const parsedUrl = new URL(url);
    const parts = parsedUrl.pathname.split("/").filter(Boolean);
    if (parts[0] === "orgs") return null;
    return normalizeRepoName(parts[1]);
  } catch {
    const match = url.match(/github\.com\/[^/]+\/([^/#?]+)/i);
    return match ? normalizeRepoName(match[1]) : null;
  }
};

const toTitle = (name = "") =>
  name
    .replace(/\.github\.io$/i, "")
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => {
      const lower = part.toLowerCase();
      if (["api", "cv", "imc", "sql", "ia"].includes(lower)) {
        return lower.toUpperCase();
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");

const uniqueValues = (values) =>
  [...new Set(values.filter(Boolean).map((value) => String(value).trim()).filter(Boolean))];

const formatTechnologyName = (value = "") => technologyLabelMap[value] || value;

const getRepoTechnologies = (repo) =>
  uniqueValues([
    repo.language,
    ...(repo.topics || []).map((topic) => topic.replace(/-/g, " ")),
  ]).map(formatTechnologyName).slice(0, 8);

const getCategoryFromRepo = (repo, fallback = "web") => {
  const search = `${repo.name || ""} ${(repo.description || "")} ${(repo.topics || []).join(" ")}`.toLowerCase();

  if (search.includes("react-native") || search.includes("mobile") || search.includes("expo")) {
    return "app mobile";
  }

  if (search.includes("api") || search.includes("backend") || search.includes("spring")) {
    return "api";
  }

  if (search.includes("data") || search.includes("dados") || search.includes("aws") || search.includes("jupyter")) {
    return "dados";
  }

  return languageCategoryMap[repo.language] || fallback;
};

const getImageFromRepo = (repo) => categoryImageMap[getCategoryFromRepo(repo)] || DEFAULT_IMAGE;

const shouldCreateGithubOnlyProject = (repo) =>
  githubOnlyProjectAllowlist.has(normalizeRepoName(repo.name));

const buildRepoMap = (repos = []) =>
  repos.reduce((acc, repo) => {
    acc.set(normalizeRepoName(repo.name), repo);
    return acc;
  }, new Map());

const toGitHubMeta = (repo) => ({
  id: repo.id,
  name: repo.name,
  htmlUrl: repo.htmlUrl,
  homepage: repo.homepage,
  stars: repo.stars,
  forks: repo.forks,
  language: formatTechnologyName(repo.language),
  topics: repo.topics || [],
  updatedAt: repo.pushedAt || repo.updatedAt,
  isFork: repo.isFork,
  isArchived: repo.isArchived,
});

const mergeProjectWithRepo = (project, repo) => {
  const liveTechnologies = getRepoTechnologies(repo);

  return {
    ...project,
    uid: `static-${project.id}-${repo.id}`,
    descricao: repo.description || project.descricao,
    tecnologias: uniqueValues([...liveTechnologies, ...(project.tecnologias || [])]).slice(0, 10),
    repositorio: repo.htmlUrl || project.repositorio,
    demo: repo.homepage || project.demo,
    categoria: getCategoryFromRepo(repo, project.categoria),
    github: toGitHubMeta(repo),
    sincronizadoGithub: true,
  };
};

const repoToProject = (repo) => ({
  id: `github-${repo.id}`,
  uid: `github-${repo.id}`,
  target: "_blank",
  titulo: toTitle(repo.name),
  imagem: getImageFromRepo(repo),
  categoria: getCategoryFromRepo(repo),
  descricao: repo.description || "Repositorio publico do GitHub com atividade recente.",
  tecnologias: getRepoTechnologies(repo),
  repositorio: repo.htmlUrl,
  demo: repo.homepage || null,
  github: toGitHubMeta(repo),
  sincronizadoGithub: true,
  origemGithub: true,
});

export const buildGithubProjects = (staticProjects, githubData) => {
  if (!githubData?.repos?.length) {
    return staticProjects.map((project) => ({
      ...project,
      uid: `static-${project.id}`,
    }));
  }

  const repoMap = buildRepoMap(githubData.repos);
  const matchedRepoNames = new Set();

  const syncedProjects = staticProjects.map((project) => {
    const repoName = extractRepoNameFromUrl(project.repositorio);
    const repo = repoName ? repoMap.get(repoName) : null;

    if (!repo) {
      return {
        ...project,
        uid: `static-${project.id}`,
      };
    }

    matchedRepoNames.add(normalizeRepoName(repo.name));
    return mergeProjectWithRepo(project, repo);
  });

  const githubOnlyProjects = (githubData.featuredRepos || [])
    .filter((repo) => !matchedRepoNames.has(normalizeRepoName(repo.name)))
    .filter((repo) => !repo.isFork && !repo.isArchived)
    .filter(shouldCreateGithubOnlyProject)
    .slice(0, 8)
    .map(repoToProject);

  return [...syncedProjects, ...githubOnlyProjects];
};

export const getGithubProjectStats = (projects) => ({
  total: projects.length,
  synced: projects.filter((project) => project.sincronizadoGithub).length,
  generated: projects.filter((project) => project.origemGithub).length,
});
