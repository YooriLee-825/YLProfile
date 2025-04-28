'use client';

import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Protect against SSR

    const mediaQueryList = window.matchMedia(query);

    // Set initial value
    setMatches(mediaQueryList.matches);

    // Event listener callback
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQueryList.addEventListener('change', listener);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
