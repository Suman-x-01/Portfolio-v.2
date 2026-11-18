const Defs = () => (
  <defs>
    <radialGradient id="gA"><stop offset="0" style={{ stopColor: 'var(--accent)', stopOpacity: .5 }} /><stop offset="1" style={{ stopColor: 'var(--accent)', stopOpacity: 0 }} /></radialGradient>
    <linearGradient id="gB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style={{ stopColor: 'var(--accent)' }} /><stop offset="1" style={{ stopColor: 'var(--accent2)' }} /></linearGradient>
  </defs>
);
const Back = () => (<>
  <circle className="pu" cx="200" cy="160" r="140" fill="url(#gA)" />
  <circle className="sp" cx="200" cy="160" r="150" fill="none" stroke="var(--glow)" strokeWidth="2" strokeDasharray="6 10" />
  <g className="sp2"><circle cx="200" cy="10" r="7" fill="url(#gB)" /><circle cx="62" cy="270" r="5" fill="var(--accent2)" /></g>
  <ellipse cx="200" cy="268" rx="130" ry="12" fill="var(--glow)" opacity=".5" />
</>);
const CODE = [[132, 96, 70, '#a79bff'], [148, 112, 96, '#6fb4ff'], [148, 128, 60, '#ffffff'], [132, 144, 84, '#a79bff'], [148, 160, 48, '#6fb4ff']];
export default function Art({ kind }) {
  return (
    <div className="art" aria-hidden="true">
      <svg viewBox="0 0 400 320"><Defs /><Back />
        {kind === 'laptop' ? (<>
          <g className="fl">
            <rect x="110" y="70" width="180" height="120" rx="12" fill="url(#gB)" />
            <rect x="120" y="80" width="160" height="100" rx="7" fill="#101230" />
            {CODE.map(([x, y, w, c], i) => <rect key={i} className="ln" style={{ animationDelay: `${i * .4}s` }} x={x} y={y} width={w} height="6" rx="3" fill={c} />)}
            <path d="M90 196h220l26 32H64z" fill="url(#gB)" />
            <rect x="170" y="206" width="60" height="10" rx="5" fill="#101230" opacity=".45" />
          </g>
          <g className="fl2"><rect x="44" y="80" width="42" height="58" rx="10" fill="url(#gB)" /><rect x="40" y="72" width="50" height="14" rx="7" fill="var(--accent2)" /><circle cx="65" cy="112" r="6" fill="#fff" opacity=".85" /></g>
        </>) : (<>
          <g className="fl">
            <path d="M200 60 80 118l120 58 120-58z" fill="url(#gB)" />
            <path d="M138 150v46c0 16 28 30 62 30s62-14 62-30v-46l-62 30z" fill="url(#gB)" opacity=".8" />
            <path d="M312 122v62" stroke="var(--accent2)" strokeWidth="4" strokeLinecap="round" /><circle cx="312" cy="192" r="8" fill="var(--accent2)" />
          </g>
          <g className="fl2"><rect x="46" y="212" width="96" height="16" rx="4" fill="url(#gB)" /><rect x="56" y="194" width="80" height="16" rx="4" fill="var(--accent2)" /><rect x="50" y="176" width="88" height="16" rx="4" fill="url(#gB)" opacity=".8" /></g>
        </>)}
      </svg>
    </div>
  );
}
