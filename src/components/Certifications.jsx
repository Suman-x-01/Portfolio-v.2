import Section from './Section.jsx';
import ImageBox from './ImageBox.jsx';
import { External } from './Icons.jsx';
import { CERTS } from '../config.js';

function CertCard({ c }) {
  return (
    <div className="card glass cert">
      <ImageBox src={c.img} alt={c.t + ' certificate'} empty="Certificate image coming soon" />
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