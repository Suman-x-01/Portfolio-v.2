import { useEffect, useState } from 'react';
import { TITLES } from '../config.js';

export default function Typing() {
  const [text, setText] = useState('');
  useEffect(() => {
    let i = 0, c = 0, del = false, t;
    const tick = () => {
      const w = TITLES[i]; c += del ? -1 : 1; setText(w.slice(0, c));
      let d = del ? 45 : 95;
      if (!del && c === w.length) { del = true; d = 1500; }
      else if (del && c === 0) { del = false; i = (i + 1) % TITLES.length; d = 350; }
      t = setTimeout(tick, d);
    };
    tick();
    return () => clearTimeout(t);
  }, []);
  return (
    <div className="code" aria-label="Typing animation of my job titles">
      <div className="cbar"><i /><i /><i /><span>developer.js</span></div>
      <div className="cbody" aria-hidden="true">
        <div className="cl"><span className="n">1</span><code><span className="k">const</span> <span className="v">developer</span> <span className="o">= {'{'}</span></code></div>
        <div className="cl"><span className="n">2</span><code>  <span className="p">role</span><span className="o">:</span> <span className="s">"{text}</span><span className="cursor" /><span className="s">"</span><span className="o">,</span></code></div>
        <div className="cl"><span className="n">3</span><code><span className="o">{'};'}</span></code></div>
      </div>
    </div>
  );
}