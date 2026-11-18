import { useEffect, useState } from 'react';
const read = () => { try { return localStorage.getItem('theme'); } catch { return null; } };
export default function useTheme() {
  const [theme, setTheme] = useState(read);
  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);
  const toggle = () => {
    const dark = theme ? theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(dark ? 'light' : 'dark');
  };
  return { theme, toggle };
}
