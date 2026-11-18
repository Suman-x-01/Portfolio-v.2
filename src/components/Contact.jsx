import { useCallback, useState } from 'react';
import Section from './Section.jsx';
import Modal from './Modal.jsx';
import { CFG } from '../config.js';
export default function Contact() {
  const [sending, setSending] = useState(false);
  const [modal, setModal] = useState(null);
  const close = useCallback(() => setModal(null), []);
  const submit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form));
    const mailto = `mailto:${CFG.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(`Name: ${d.name}\nEmail: ${d.email}\n\n${d.message}`)}`;
    setSending(true);
    let ok = false;
    try {
      if (CFG.key) {
        const r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ access_key: CFG.key, ...d }) });
        ok = !!(await r.json()).success;
      } else {
        // Netlify Forms: works after deploying on Netlify (no key needed)
        const r = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ 'form-name': 'contact', ...d }).toString() });
        ok = r.ok && import.meta.env.PROD;
      }
    } catch { ok = false; }
    setSending(false);
    if (ok) { form.reset(); setModal({ ok: true, title: 'Message sent!', text: `Thank you, ${d.name}. Your message has been delivered to Suman, and he will reply to you soon.` }); }
    else setModal({ ok: false, title: 'Couldn’t send directly', text: 'Direct sending isn’t switched on yet. You can send the same message from your email app instead.', link: mailto });
  };
  return (
    <Section id="contact" title="Let’s connect" sub="Have a project, an opening or a question? Send a message.">
      <div className="contact">
        <div className="info">
          <div className="card glass"><h3>Email</h3><p>{CFG.email}</p></div>
          <div className="card glass"><h3>Phone</h3><p>9732335816</p></div>
          <div className="card glass"><h3>Location</h3><p>Kolkata, West Bengal, India</p></div>
        </div>
        <form className="card glass" onSubmit={submit}>
          <input name="name" placeholder="Your name" aria-label="Your name" required />
          <input name="email" type="email" placeholder="Your email" aria-label="Your email" required />
          <input name="subject" placeholder="Subject" aria-label="Subject" required />
          <textarea name="message" placeholder="Your message" aria-label="Your message" required />
          <button className="btn main" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'}</button>
        </form>
      </div>
      <Modal state={modal} onClose={close} />
    </Section>
  );
}
