import { useEffect, useState } from 'react';
export default function Loader() {
  const [s, setS] = useState('show');
  useEffect(() => {
    const a = setTimeout(() => setS('hide'), 1100), b = setTimeout(() => setS('gone'), 1700);
    return () => { clearTimeout(a); clearTimeout(b); };
  }, []);
  if (s === 'gone') return null;
  return <div className={'loader' + (s === 'hide' ? ' hide' : '')} aria-hidden="true"><div className="lg"><span className="lr" /><b>SN</b></div></div>;
}