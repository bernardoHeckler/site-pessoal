const GITHUB_API = "https://api.github.com";
const DEFAULT_USERNAME = "bernardoHeckler";
const DEFAULT_LIMIT = 8;

const json = (res, statusCode, payload) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
};

const getRequestHeaders = () => {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "bernardo-heckler-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
};

const fetchGitHub = async (path) => {
  const response = await fetch(`${GITHUB_API}${path}`, {
    headers: getRequestHeaders(),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`GitHub API ${response.status}: ${detail}`);
  }

  return response.json();
};

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
  const hasDescription = repo.description ? 6 : 0;
  const hasHomepage = repo.homepage ? 4 : 0;
  const hasTopics = repo.topics?.length ? 3 : 0;
  const activity = new Date(repo.pushed_at || repo.updated_at || 0).getTime() / 100000000000;

  return hasDescription + hasHomepage + hasTopics + repo.stargazers_count + activity;
};

const getFeaturedRepos = (repos, limit) =>
  repos
    .filter((repo) => !repo.fork && !repo.archived && repo.description)
    .sort((a, b) => scoreRepo(b) - scoreRepo(a))
    .slice(0, limit)
    .map(normalizeRepo);

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=3600");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "GET") {
    json(res, 405, { error: "Method not allowed" });
    return;
  }

  const username = process.env.GITHUB_USERNAME || DEFAULT_USERNAME;
  const limit = Number.parseInt(req.query?.limit, 10) || DEFAULT_LIMIT;
  const safeLimit = Math.min(Math.max(limit, 1), 24);

  try {
    const [profile, repos] = await Promise.all([
      fetchGitHub(`/users/${username}`),
      fetchGitHub(`/users/${username}/repos?per_page=100&sort=updated&type=owner`),
    ]);

    const publicRepos = repos.map(normalizeRepo);
    const originalRepos = repos.filter((repo) => !repo.fork && !repo.archived);
    const featuredRepos = getFeaturedRepos(repos, safeLimit);

    json(res, 200, {
      source: "github-api",
      username,
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
      repos: publicRepos,
      featuredRepos,
    });
  } catch (error) {
    json(res, 502, {
      error: "Nao foi possivel consultar a API do GitHub.",
      ...(process.env.NODE_ENV !== "production" ? { detail: error.message } : {}),
    });
  }
}
