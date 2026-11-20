import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Close } from './Icons.jsx';

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const esc = e => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', esc);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', esc); document.body.style.overflow = prev; };
  }, [onClose]);
  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <button className="lbx" type="button" aria-label="Close" onClick={onClose}><Close /></button>
      <img src={src} alt={alt} onClick={e => e.stopPropagation()} />
    </div>,
    document.body
  );
}