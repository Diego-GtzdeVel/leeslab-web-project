import { useEffect, useState } from 'react';

/** true mientras el elemento esté visible al menos en `threshold` de su área */
export default function useInView(ref, { threshold = 0.4 } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}
