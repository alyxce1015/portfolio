import { useEffect } from 'react';

/**
 * useFadeIn
 * Re-runs every time `trigger` changes (e.g. when navigating back to home).
 * Resets all .fade-in elements to hidden first, then re-observes them.
 */
export default function useFadeIn(trigger = 0) {
  useEffect(() => {
    // Small delay so the DOM has rendered before we observe
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');

      // Reset visibility so animations replay cleanly
      elements.forEach((el) => el.classList.remove('visible'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [trigger]);
}