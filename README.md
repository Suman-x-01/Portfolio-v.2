# Suman Kumar Nayak – Portfolio (React + Vite)

    npm install
    npm run dev        # local preview
    npm run build      # production build in /dist

Edit your phone, email, links, skills, projects and education in `src/config.js`.
Put your photo in `/public` and set `photo: '/your-photo.jpg'` in `src/config.js`.
For a contact form that emails you directly, get a free key at web3forms.com, set `key` in config, and host the built site on Netlify, Vercel or GitHub Pages.

## Resume button
Replace `public/resume.pdf` with your own resume (keep the file name, or change `resume` in `src/config.js`).

## Contact form → your inbox
Option A (Netlify, no key): deploy on Netlify, then Site settings → Forms → Form notifications → add your email for the `contact` form.
Option B: free key from web3forms.com in `CFG.key`.
Forms only deliver from the deployed site, not from `npm run dev`.
