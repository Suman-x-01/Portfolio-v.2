import useReveal from '../hooks/useReveal.js';
export default function Section({ id, title, sub, children }) {
  const ref = useReveal();
  return <section className="sec reveal" id={id} ref={ref}><h2>{title}</h2><p className="sub">{sub}</p>{children}</section>;
}
