import Section from './Section.jsx';
import Art from './Art.jsx';
import { Cap, Bank } from './Icons.jsx';
import { EDU } from '../config.js';
export default function Education() {
  return (
    <Section id="education" title="Education" sub="Educational Qualification">
      <div className="split">
        <div className="timeline">
          {EDU.map(e => (
            <div className="card glass edu" key={e.t}>
              <div className="eic">{e.icon === 'cap' ? <Cap /> : <Bank />}</div>
              <div><span className="when">{e.when}</span><h3>{e.t}</h3><p>{e.d}</p></div>
            </div>
          ))}
        </div>
        <Art kind="cap" />
      </div>
    </Section>
  );
}
