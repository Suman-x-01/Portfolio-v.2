import { useEffect, useRef, useState } from 'react';
import { Moon, Sun, Bars, Close } from './Icons.jsx';

const LINKS = [['about','About'],['skills','Skills'],['projects','Projects'],['experience','Experience'],['education','Education'],['certifications','Certifications'],['contact','Contact']];
export default function Navbar({ onTheme }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const out = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = e => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('click', out); document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('click', out); document.removeEventListener('keydown', esc); };
  }, []);
  return (
    <nav ref={ref} className={'glass' + (open ? ' open' : '')}>
      <a className="logo" href="#top">Suman K. Nayak</a>
      <div className="links" id="links">
        {LINKS.map(([id, label]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
      <div className="ctrl">
        <button id="theme" aria-label="Toggle light and dark theme" onClick={onTheme}><Moon /><Sun /></button>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="links" onClick={() => setOpen(o => !o)}><Bars /><Close /></button>
      </div>
    </nav>
  );
}
