import React, { useEffect } from 'react';

export function useInfiniteScroll(
  ref: React.RefObject<HTMLDivElement>,
  fetchNext: () => Promise<void>
) {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (element) => {
          if (element.isIntersecting) {
            await fetchNext();
          }
        });
      },
      {
        root: ref.current?.parentElement,
        rootMargin: '200px',
        threshold: 1,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, fetchNext]);
}
