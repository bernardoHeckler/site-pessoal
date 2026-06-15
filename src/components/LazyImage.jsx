import { useEffect, useRef, useState } from "react";
import "./LazyImage.css";

const LazyImage = ({
  src,
  alt,
  className = "",
  placeholder = null,
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
  rootMargin = "280px",
  sizes,
}) => {
  const shouldLoadImmediately = loading === "eager" || fetchPriority === "high";
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(shouldLoadImmediately);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    setShouldLoad(shouldLoadImmediately);
  }, [src, shouldLoadImmediately]);

  useEffect(() => {
    if (shouldLoad || shouldLoadImmediately) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );
    const currentContainer = containerRef.current;

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => observer.disconnect();
  }, [rootMargin, shouldLoad, shouldLoadImmediately]);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);
  const showPlaceholder = !shouldLoad || (!isLoaded && !hasError);

  return (
    <div ref={containerRef} className={`lazy-image-container ${className}`}>
      {showPlaceholder && (
        <div className="lazy-placeholder" aria-hidden="true">
          {placeholder || <div className="lazy-skeleton" />}
        </div>
      )}

      {shouldLoad && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? "loaded" : "loading"}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          fetchPriority={fetchPriority}
          decoding={decoding}
          sizes={sizes}
        />
      )}

      {hasError && (
        <div className="lazy-error" role="img" aria-label={alt}>
          <span>Imagem indisponível</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
