import { useEffect, useRef } from 'react';
export default function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    const f = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      bar.current.style.transform = `scaleX(${h > 0 ? Math.min(scrollY / h, 1) : 0})`;
    };
    f(); addEventListener('scroll', f, { passive: true }); addEventListener('resize', f);
    return () => { removeEventListener('scroll', f); removeEventListener('resize', f); };
  }, []);
  return <div className="progress" aria-hidden="true"><i ref={bar} /></div>;
}