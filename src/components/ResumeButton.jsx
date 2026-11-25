import { useState } from 'react';
import { Download } from './Icons.jsx';
import { CFG } from '../config.js';

export default function ResumeButton() {
  const [note, setNote] = useState('');
  const get = async e => {
    e.preventDefault();
    setNote('');
    try {
      const r = await fetch(CFG.resume, { method: 'HEAD' });
      const type = r.headers.get('content-type') || '';
      if (!r.ok || !type.includes('pdf')) throw new Error('missing');
      const a = document.createElement('a');
      a.href = CFG.resume; a.download = CFG.resumeName; document.body.appendChild(a); a.click(); a.remove();
    } catch {
      setNote('Resume is not available right now. Please contact me by email.');
      setTimeout(() => setNote(''), 5000);
    }
  };
  return (
    <span className="resume-wrap">
      <a className="btn ghost glass" href={CFG.resume} onClick={get}>Resume <Download /></a>
      {note && <small className="rnote" role="status">{note}</small>}
    </span>
  );
}