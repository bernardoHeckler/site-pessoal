import { useState, useRef, useEffect } from 'react';
import './LazyImage.css';

const LazyImage = ({ src, alt, className = '', placeholder = null }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setHasError(true);

  return (
    <div ref={imgRef} className={`lazy-image-container ${className}`}>
      {!isInView && (
        <div className="lazy-placeholder">
          {placeholder || <div className="lazy-skeleton" />}
        </div>
      )}
      
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
      
      {hasError && (
        <div className="lazy-error">
          <span>⚠️ Imagem não disponível</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;