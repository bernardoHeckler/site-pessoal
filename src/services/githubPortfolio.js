const DEFAULT_USERNAME = "bernardoHeckler";
const GITHUB_API = "https://api.github.com";

const normalizeProfile = (profile) => ({
  login: profile.login,
  name: profile.name,
  bio: profile.bio,
  blog: profile.blog,
  htmlUrl: profile.html_url,
  avatarUrl: profile.avatar_url,
  publicRepos: profile.public_repos,
  followers: profile.followers,
  following: profile.following,
  createdAt: profile.created_at,
  updatedAt: profile.updated_at,
  hireable: profile.hireable,
});

const normalizeRepo = (repo) => ({
  id: repo.id,
  name: repo.name,
  fullName: repo.full_name,
  description: repo.description,
  htmlUrl: repo.html_url,
  homepage: repo.homepage,
  language: repo.language,
  topics: repo.topics || [],
  stars: repo.stargazers_count,
  forks: repo.forks_count,
  isFork: repo.fork,
  isArchived: repo.archived,
  createdAt: repo.created_at,
  updatedAt: repo.updated_at,
  pushedAt: repo.pushed_at,
});

const getTopLanguages = (repos) => {
  const counts = repos.reduce((acc, repo) => {
    if (!repo.language || repo.fork || repo.archived) return acc;
    acc[repo.language] = (acc[repo.language] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts)
    .map(([name, total]) => ({ name, total }))
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name))
    .slice(0, 8);
};

const scoreRepo = (repo) => {
  const activity = new Date(repo.pushed_at || repo.updated_at || 0).getTime() / 100000000000;
  const hasDescription = repo.description ? 6 : 0;
  const hasHomepage = repo.homepage ? 4 : 0;
  const hasTopics = repo.topics?.length ? 3 : 0;

  return hasDescription + hasHomepage + hasTopics + repo.stargazers_count + activity;
};

const getFeaturedRepos = (repos, limit) =>
  repos
    .filter((repo) => !repo.fork && !repo.archived && repo.description)
    .sort((a, b) => scoreRepo(b) - scoreRepo(a))
    .slice(0, limit)
    .map(normalizeRepo);

const fetchJson = async (url, options = {}) => {
  const response = await fetch(url, options);
  const contentType = response.headers.get("content-type") || "";

  if (!response.ok || !contentType.includes("application/json")) {
    throw new Error(`Falha ao carregar ${url}`);
  }

  return response.json();
};

const fetchPublicGitHubData = async ({ signal, limit = 8 } = {}) => {
  const [profile, repos] = await Promise.all([
    fetchJson(`${GITHUB_API}/users/${DEFAULT_USERNAME}`, { signal }),
    fetchJson(`${GITHUB_API}/users/${DEFAULT_USERNAME}/repos?per_page=100&sort=updated&type=owner`, { signal }),
  ]);

  const featuredRepos = getFeaturedRepos(repos, limit);
  const originalRepos = repos.filter((repo) => !repo.fork && !repo.archived);

  return {
    source: "github-public-api",
    username: DEFAULT_USERNAME,
    fetchedAt: new Date().toISOString(),
    profile: normalizeProfile(profile),
    stats: {
      publicRepos: profile.public_repos,
      followers: profile.followers,
      following: profile.following,
      originalRepos: originalRepos.length,
      forkedRepos: repos.filter((repo) => repo.fork).length,
      portfolioReadyRepos: featuredRepos.length,
      topLanguages: getTopLanguages(repos),
    },
    repos: repos.map(normalizeRepo),
    featuredRepos,
  };
};

export const fetchGitHubPortfolio = async ({ signal, limit = 8 } = {}) => {
  try {
    return await fetchJson(`/api/github?limit=${limit}`, { signal });
  } catch {
    return fetchPublicGitHubData({ signal, limit });
  }
};
