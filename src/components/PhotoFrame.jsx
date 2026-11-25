import { useRef, useState } from 'react';
import { CFG } from '../config.js';

export default function PhotoFrame() {
  const [src, setSrc] = useState(CFG.photo);
  const file = useRef(null);
  const pick = e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader(); r.onload = () => setSrc(r.result); r.readAsDataURL(f);
  };
  return (
    <div className="photo-side">
      <span className="ring"><i /><i className="b" /></span><span className="ring r2"><i /></span>
      <span className="dot d1" /><span className="dot d2" /><span className="dot d3" />
      <span className="chip glass c1">Full stack Dev</span><span className="chip glass c2">MCA</span>
      <div className={'frame glass' + (src ? ' has' : '')} tabIndex={0} role="button" aria-label="Photograph frame. Activate to choose your photo."
        onClick={() => file.current.click()} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); file.current.click(); } }}>
        <div className="pic">
          {src && <img src={src} alt="Portrait of Suman Kumar Nayak" />}
          {!src && <div className="ph">SN<small>Click to add your photo</small></div>}
        </div>
        <span className="badge glass"><i />Open to work</span>
      </div>
      <input type="file" accept="image/*" hidden ref={file} onChange={pick} />
    </div>
  );
}