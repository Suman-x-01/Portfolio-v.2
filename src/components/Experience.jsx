import Section from './Section.jsx';
import Art from './Art.jsx';
import { Briefcase } from './Icons.jsx';
import { EXP } from '../config.js';
export default function Experience() {
  return (
    <Section id="experience" title="Experience" sub="Where I’ve worked and what I’ve built. Edit the entries in src/config.js.">
      <div className="split">
        <Art kind="laptop" />
        <div className="timeline">
          {EXP.map(e => (
            <div className="card glass edu" key={e.t}>
              <div className="eic"><Briefcase /></div>
              <div><span className="when">{e.when}</span><h3>{e.t}</h3><p>{e.d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
