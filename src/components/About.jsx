import Section from './Section.jsx';
import { ABOUT } from '../config.js';
export default function About() {
  return (
    <Section id="about" title="About me" sub="A little more about who I am.">
      <div className="split about">
        <div className="card glass"><p>{ABOUT.text}</p></div>
        <div className="facts">
          {ABOUT.facts.map(([k, v]) => <div className="card glass" key={k}><span className="when">{k}</span><p>{v}</p></div>)}
        </div>
      </div>
    </Section>
  );
}