import Section from './Section.jsx';
import { SKILLS } from '../config.js';
export default function Skills() {
  return (
    <Section id="skills" title="Skills" sub="The tools I use to take an idea from database to browser.">
      <div className="grid">
        {SKILLS.map(s => (
          <div className="card glass" key={s.t}><h3>{s.t}</h3><p>{s.d}</p>
            <div className="tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div></div>
        ))}
      </div>
    </Section>
  );
}
