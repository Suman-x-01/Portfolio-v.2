import { useState } from 'react';
import Lightbox from './LightBox.jsx';

export default function ImageBox({ src, alt, empty = 'Image coming soon' }) {
  const [open, setOpen] = useState(false);
  if (!src) return <div className="shot"><span>{empty}</span></div>;
  return (
    <>
      <button type="button" className="shot has zoom" onClick={() => setOpen(true)} aria-label={'View larger: ' + alt}>
        <img src={src} alt={alt} />
        <i className="zi" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5M11 8v6M8 11h6" /></svg>
        </i>
      </button>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}