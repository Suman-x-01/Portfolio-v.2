
import { CFG } from '../config.js';
import {
  GitHub,
  LinkedIn,
  Mail,
  WhatsApp,
  Phone,
  Facebook,
  LeetCode
} from './Icons.jsx';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

export default function SocialLinks() {
  return (
    <div className="social">

      {/* GitHub */}
      <a className="glass" href={CFG.github}
         aria-label="GitHub" {...ext}>
        <GitHub />
      </a>

      {/* LinkedIn */}
      <a className="glass" href={CFG.linkedin}
         aria-label="LinkedIn" {...ext}>
        <LinkedIn />
      </a>

      {/* LeetCode */}
      <a className="glass" href={CFG.leetcode}
         aria-label="LeetCode" {...ext}>
        <LeetCode />
      </a>

      {/* Facebook */}
      <a className="glass" href={CFG.facebook}
         aria-label="Facebook" {...ext}>
        <Facebook />
      </a>

      {/* WhatsApp */}
      <a
        className="glass"
        href={`https://wa.me/${CFG.phone}?text=${encodeURIComponent(CFG.wa)}`}
        aria-label="WhatsApp"
        {...ext}
      >
        <WhatsApp />
      </a>

      {/* Email */}
      <a
        className="glass"
        href={`mailto:${CFG.email}?subject=${encodeURIComponent('Hello Suman')}`}
        aria-label="Email"
      >
        <Mail />
      </a>

      {/* Phone */}
      <a
        className="glass"
        href={`tel:+${CFG.phone}`}
        aria-label="Call"
      >
        <Phone />
      </a>

    </div>
  );
}
