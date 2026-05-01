import { useEffect, useState } from 'react';
import '../styles/Hero.css';

const PHRASES = [
  'Full Stack Developer.',
  'React Engineer.',
  'AI Enthusiast.',
  'Problem Solver.',
  'Next.js Builder.',
];

function Typewriter() {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIdx];
    let timeout;

    if (!deleting && text === phrase) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === '') {
      setDeleting(false);
      setPhraseIdx(i => (i + 1) % PHRASES.length);
    } else {
      timeout = setTimeout(() => {
        setText(deleting ? phrase.slice(0, text.length - 1) : phrase.slice(0, text.length + 1));
      }, deleting ? 55 : 85);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx]);

  return (
    <>
      <span className="typewriter-text">{text}</span>
      <span className="cursor-blink" />
    </>
  );
}

// SVG Icons
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-blob b1" />
      <div className="hero-blob b2" />

      <div className="hero-inner">
        {/* Text */}
        <div className="hero-text">
          <div className="hero-available-badge">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm<br/>
            <span className="name">Ayush</span><br/>
            Choudhary.
          </h1>

          <p className="hero-subtitle">
            I'm a <Typewriter /><br/>
            A software developer keen to build unique applications and real-life ideas.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects ↗</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Ayu0607" target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <GithubIcon />
            </a>
            <a href="https://www.linkedin.com/in/ayush-choudhary-13a2312a3/" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="mailto:ayushchoudhary0607@gmail.com" className="social-link" title="Email">
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* Photo */}
        <div className="hero-photo-wrap">
          <div className="photo-ring">
            <img src="/ayush.jpeg" alt="Ayush Choudhary" />
          </div>
        </div>
      </div>
    </section>
  );
}
