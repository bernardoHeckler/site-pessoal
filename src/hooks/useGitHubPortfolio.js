import { useEffect, useState } from "react";
import { fetchGitHubPortfolio } from "../services/githubPortfolio";

const CACHE_KEY = "githubPortfolioData:v1";
const CACHE_TTL = 15 * 60 * 1000;

const readCache = () => {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
    if (!cached?.savedAt || Date.now() - cached.savedAt > CACHE_TTL) return null;
    return cached.data;
  } catch {
    return null;
  }
};

const writeCache = (data) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ savedAt: Date.now(), data }));
  } catch {
    // Cache is optional; private browsing or quota limits should not break the page.
  }
};

export const useGitHubPortfolio = (limit = 8) => {
  const [data, setData] = useState(() => readCache());
  const [loading, setLoading] = useState(!data);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadGitHubData = async () => {
      setLoading(true);
      setError(null);

      try {
        const payload = await fetchGitHubPortfolio({
          signal: controller.signal,
          limit,
        });

        setData(payload);
        writeCache(payload);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadGitHubData();

    return () => controller.abort();
  }, [limit]);

  return {
    data,
    loading,
    error,
  };
};
