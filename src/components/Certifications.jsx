import { useRef, useState } from 'react';
import Section from './Section.jsx';
import { External } from './Icons.jsx';
import { CERTS } from '../config.js';

function CertCard({ c }) {
  const [img, setImg] = useState(c.img);
  const file = useRef(null);
  const pick = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader(); r.onload = () => setImg(r.result); r.readAsDataURL(f);
  };
  const choose = () => { if (!c.img) file.current.click(); };
  return (
    <div className="card glass cert">
      <div className={'shot' + (img ? ' has' : '')} tabIndex={0} role="button" aria-label="Certificate image"
        onClick={choose} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(); } }}>
        {img ? <img src={img} alt={c.t + ' certificate'} /> : <span>Add certificate image</span>}
      </div>
      <input type="file" accept="image/*" hidden ref={file} onChange={pick} />
      <span className="when">{c.year}</span>
      <h3>{c.t}</h3>
      <p className="by">{c.by}</p>
      <p className="cdesc">{c.desc}</p>
      {c.link && <a className="vlink" href={c.link} target="_blank" rel="noopener">View certificate <External /></a>}
    </div>
  );
}

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications & Achievements" sub="Courses, contests and milestones. Edit them in src/config.js.">
      <div className="grid">{CERTS.map(c => <CertCard key={c.t} c={c} />)}</div>
    </Section>
  );
}