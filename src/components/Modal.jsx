import { useEffect, useRef } from 'react';
import { Check, Alert } from './Icons.jsx';
export default function Modal({ state, onClose }) {
  const btn = useRef(null);
  const open = !!state;
  useEffect(() => {
    if (!open) return;
    btn.current.focus();
    const esc = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', esc);
    return () => document.removeEventListener('keydown', esc);
  }, [open, onClose]);
  const s = state || {};
  return (
    <div className={'modal' + (open ? ' open' : '')} aria-hidden={!open} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="mbox glass" role="dialog" aria-modal="true" aria-labelledby="mt">
        <div className="mic">{s.ok ? <Check /> : <Alert />}</div>
        <h3 id="mt">{s.title}</h3><p>{s.text}</p>
        {s.link && <a className="btn main" href={s.link}>Open email app</a>}
        <button className="btn ghost glass" type="button" ref={btn} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
