const sourceLabels = {
  "github-api-token": "GitHub via Vercel",
  "github-api-public": "GitHub via Vercel",
  "github-public-api": "GitHub público",
  "cache-local": "cache local",
};

const syncDateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export const getGitHubSourceLabel = (source) =>
  sourceLabels[source] || "GitHub";

export const formatGitHubSyncDate = (date) => {
  if (!date) return null;

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return null;

  return syncDateFormatter.format(parsedDate);
};
