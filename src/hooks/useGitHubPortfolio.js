import { useEffect, useState } from "react";
import { fetchGitHubPortfolio } from "../services/githubPortfolio";

const CACHE_KEY = "githubPortfolioData:v1";
const CACHE_TTL = 15 * 60 * 1000;

const getCacheKey = (limit) => `${CACHE_KEY}:${limit}`;

const readCacheSnapshot = (limit, options = {}) => {
  try {
    if (typeof localStorage === "undefined") return null;

    const cached = JSON.parse(localStorage.getItem(getCacheKey(limit)));
    if (!cached?.savedAt || !cached?.data) return null;

    const isExpired = Date.now() - cached.savedAt > CACHE_TTL;
    if (isExpired && !options.allowExpired) return null;

    return {
      data: cached.data,
      savedAt: cached.savedAt,
      isExpired,
    };
  } catch {
    return null;
  }
};

const writeCache = (limit, data) => {
  try {
    if (typeof localStorage === "undefined") return null;

    const savedAt = Date.now();
    localStorage.setItem(getCacheKey(limit), JSON.stringify({ savedAt, data }));
    return savedAt;
  } catch {
    // Cache is optional; private browsing or quota limits should not break the page.
    return null;
  }
};

const getInitialState = (limit) => {
  const snapshot = readCacheSnapshot(limit, { allowExpired: true });

  return {
    data: snapshot?.data || null,
    cacheSavedAt: snapshot?.savedAt || null,
    isStale: snapshot?.isExpired || false,
  };
};

export const useGitHubPortfolio = (limit = 8) => {
  const [portfolio, setPortfolio] = useState(() => getInitialState(limit));
  const [loading, setLoading] = useState(() => !portfolio.data || portfolio.isStale);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const cachedSnapshot = readCacheSnapshot(limit, { allowExpired: true });

    if (cachedSnapshot) {
      setPortfolio({
        data: cachedSnapshot.data,
        cacheSavedAt: cachedSnapshot.savedAt,
        isStale: cachedSnapshot.isExpired,
      });
    } else {
      setPortfolio({
        data: null,
        cacheSavedAt: null,
        isStale: false,
      });
    }

    const loadGitHubData = async () => {
      setLoading(true);
      setError(null);

      try {
        const payload = await fetchGitHubPortfolio({
          signal: controller.signal,
          limit,
        });

        const savedAt = writeCache(limit, payload);
        setPortfolio({
          data: payload,
          cacheSavedAt: savedAt,
          isStale: false,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          const staleSnapshot = readCacheSnapshot(limit, { allowExpired: true });

          if (staleSnapshot) {
            setPortfolio({
              data: staleSnapshot.data,
              cacheSavedAt: staleSnapshot.savedAt,
              isStale: true,
            });
          }

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

  const updatedAt =
    portfolio.data?.fetchedAt ||
    (portfolio.cacheSavedAt ? new Date(portfolio.cacheSavedAt).toISOString() : null);
  const isStale = Boolean(portfolio.data && (portfolio.isStale || error));

  return {
    data: portfolio.data,
    loading,
    refreshing: loading && Boolean(portfolio.data),
    error,
    isStale,
    updatedAt,
    source: isStale ? "cache-local" : portfolio.data?.source,
  };
};
