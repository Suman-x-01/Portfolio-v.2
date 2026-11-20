import Section from './Section.jsx';
import ImageBox from './ImageBox.jsx';
import { GitHub, External } from './Icons.jsx';
import { PROJECTS } from '../config.js';

function ProjectCard({ p }) {
  return (
    <div className="card glass">
      <ImageBox src={p.img} alt={p.t + ' screenshot'} empty="Project image coming soon" />
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