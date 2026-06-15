import { FaGithub } from "react-icons/fa6";
import { useGitHubPortfolio } from "../hooks/useGitHubPortfolio";
import "./GitHubInsights.css";

const numberFormatter = new Intl.NumberFormat("pt-BR");
const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  month: "short",
  year: "numeric",
});

const formatDate = (date) => {
  if (!date) return "sem data";
  return dateFormatter.format(new Date(date));
};

const StatItem = ({ label, value }) => (
  <div className="github-stat">
    <strong>{numberFormatter.format(value || 0)}</strong>
    <span>{label}</span>
  </div>
);

const GitHubSkeleton = () => (
  <section className="github-insights" aria-busy="true">
    <div className="github-insights-header">
      <div className="github-icon-placeholder"></div>
      <div className="github-title-placeholder"></div>
    </div>
    <div className="github-stats-grid">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="github-stat github-stat-loading"></div>
      ))}
    </div>
  </section>
);

const GitHubInsights = () => {
  const { data, loading, error } = useGitHubPortfolio(6);

  if (!data && loading) {
    return <GitHubSkeleton />;
  }

  if (!data && error) {
    return (
      <section className="github-insights github-insights-error">
        <div className="github-insights-header">
          <FaGithub size={26} />
          <div>
            <h3>GitHub</h3>
            <p>Perfil indisponivel no momento.</p>
          </div>
        </div>
        <a href="https://github.com/bernardoHeckler" target="_blank" rel="noopener noreferrer">
          Abrir perfil
        </a>
      </section>
    );
  }

  const profile = data.profile;
  const stats = data.stats;
  const repos = data.featuredRepos?.slice(0, 4) || [];
  const topLanguages = stats.topLanguages || [];

  return (
    <section className="github-insights">
      <div className="github-insights-header">
        <FaGithub size={26} />
        <div>
          <h3>GitHub em Numeros</h3>
          <a href={profile.htmlUrl} target="_blank" rel="noopener noreferrer">
            @{profile.login}
          </a>
        </div>
      </div>

      <div className="github-stats-grid">
        <StatItem label="repositorios publicos" value={stats.publicRepos} />
        <StatItem label="repositorios autorais" value={stats.originalRepos} />
        <StatItem label="seguidores" value={stats.followers} />
        <StatItem label="candidatos ao portfolio" value={stats.portfolioReadyRepos} />
      </div>

      {topLanguages.length > 0 && (
        <div className="github-languages" aria-label="Linguagens mais usadas">
          {topLanguages.map((language) => (
            <span key={language.name}>
              {language.name} <small>{language.total}</small>
            </span>
          ))}
        </div>
      )}

      {repos.length > 0 && (
        <div className="github-repos">
          {repos.map((repo) => (
            <a
              key={repo.id}
              className="github-repo"
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{repo.name}</strong>
              <span>{repo.description}</span>
              <small>
                {repo.language || "Sem linguagem"} - atualizado em {formatDate(repo.pushedAt || repo.updatedAt)}
              </small>
            </a>
          ))}
        </div>
      )}
    </section>
  );
};

export default GitHubInsights;
