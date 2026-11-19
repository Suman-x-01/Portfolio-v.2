import { useRef, useState } from 'react';
import Section from './Section.jsx';
import { GitHub, External } from './Icons.jsx';
import { PROJECTS } from '../config.js';
function ProjectCard({ p }) {
  const [img, setImg] = useState(p.img);
  const file = useRef(null);
  const pick = e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => setImg(r.result); r.readAsDataURL(f); };
  return (
    <div className="card glass">
      <div className={'shot' + (img ? ' has' : '')} tabIndex={0} role="button" aria-label="Add project photo"
        onClick={() => file.current.click()} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); file.current.click(); } }}>
        {img ? <img src={img} alt={p.t + ' screenshot'} /> : <span>Add project photo</span>}
      </div>
      <input type="file" accept="image/*" hidden ref={file} onChange={pick} />
      <h3>{p.t}</h3><p>{p.d}</p>
      <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
      <div className="plinks">
        <a className={'btn main sm' + (p.live ? '' : ' off')} href={p.live || undefined} target="_blank" rel="noopener">Live demo <External /></a>
        <a className={'btn ghost glass sm' + (p.code ? '' : ' off')} href={p.code || undefined} target="_blank" rel="noopener">Code <GitHub /></a>
      </div>
    </div>
  );
}
export default function Projects() {
  return (
    <Section id="projects" title="Projects" sub="Sample entries. Replace them with your own work in src/config.js.">
      <div className="grid">{PROJECTS.map(p => <ProjectCard key={p.t} p={p} />)}</div>
    </Section>
  );
}