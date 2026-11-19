import Section from './Section.jsx';
import { SKILLS } from '../config.js';
export default function Skills() {
  return (
    <Section id="skills" title="Skills" sub="The tools I use to take an idea from database to browser.">
      <div className="grid wide">
        {SKILLS.map(g => (
          <div className="card glass" key={g.t}>
            <h3>{g.t}</h3>
            <ul className="sklist">
              {g.items.map(i => (
                <li key={i.n}>
                  <span className="mono">{i.n.slice(0, 2)}</span>
                  <div className="skb">
                    <div className="skr"><b>{i.n}</b><em>{i.l}%</em></div>
                    <div className="bar"><i style={{ '--w': i.l + '%' }} /></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}