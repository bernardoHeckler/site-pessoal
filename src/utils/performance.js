export const preloadImage = (src, options = {}) => {
  if (!src || typeof document === "undefined") return;

  const preloadAlreadyExists = Array.from(
    document.head.querySelectorAll('link[rel="preload"][as="image"]')
  ).some((link) => link.href === new URL(src, window.location.href).href);

  if (preloadAlreadyExists) return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  if (options.fetchPriority) {
    link.fetchPriority = options.fetchPriority;
  }
  document.head.appendChild(link);
};

export const preloadImages = (images) => {
  images.forEach((image) => {
    if (typeof image === "string") {
      preloadImage(image);
      return;
    }

    preloadImage(image.src, image);
  });
};

// Lazy load observer
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};
