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
  return <div className="typing" aria-live="off"><span>{text}</span><span className="cursor" /></div>;
}
