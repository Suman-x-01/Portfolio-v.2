import { useEffect, useRef } from 'react';
export default function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.classList.add('in'); io.disconnect(); } }, { threshold: .12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return ref;
}
