import { useState, useRef } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/sections.css';

// ─────────────────────────────────────────────────────────
// 🔧 SETUP: Replace the value below with your Formspree ID.
//    1. Go to https://formspree.io and create a free account.
//    2. Create a new form → copy the endpoint ID (e.g. "xyzabcde")
//    3. Paste it below ↓
const FORMSPREE_ID = 'mojrqykb';
// ─────────────────────────────────────────────────────────

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
);

export default function Contact() {
  const textRef = useScrollReveal();
  const formRef = useScrollReveal();

  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'err'

  const handleChange = e => setFields(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
      setStatus('setup');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus('ok');
        setFields({ name: '', email: '', message: '' });
      } else {
        setStatus('err');
      }
    } catch {
      setStatus('err');
    }
  };

  const isSending = status === 'sending';

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <div className="contact-grid">
          {/* Left */}
          <div ref={textRef} className="contact-text reveal">
            <div className="section-label">Say Hello</div>
            <h2 className="section-title">Let's Work<br/>Together.</h2>
            <p>
              I'm always open to new opportunities, collaborations, or just a friendly chat about tech. Feel free to reach out!
            </p>
            <div className="contact-info-links">
              <a href="mailto:ayushchoudhary0607@gmail.com" className="contact-link">
                <div className="contact-link-icon"><EmailIcon /></div>
                <div>
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">ayushchoudhary0607@gmail.com</div>
                </div>
              </a>
              <a href="https://github.com/Ayu0607" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon"><GithubIcon /></div>
                <div>
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-value">github.com/Ayu0607</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/ayush-choudhary-13a2312a3/" target="_blank" rel="noreferrer" className="contact-link">
                <div className="contact-link-icon"><LinkedinIcon /></div>
                <div>
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">Ayush Choudhary</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right – form */}
          <form ref={formRef} className="contact-form reveal" style={{ transitionDelay: '0.15s' }} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" placeholder="John Doe" value={fields.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="john@example.com" value={fields.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Let's work together..." value={fields.message} onChange={handleChange} required />
            </div>

            <button
              type="submit"
              className={`form-submit${status === 'ok' ? ' success' : ''}`}
              disabled={isSending}
            >
              {isSending ? 'Sending…' : status === 'ok' ? 'Message Sent! ✓' : 'Send Message →'}
            </button>

            {status === 'ok' && (
              <div className="form-status ok">✓ Your message was sent! I'll get back to you soon.</div>
            )}
            {status === 'err' && (
              <div className="form-status err">⚠ Something went wrong. Please email me directly.</div>
            )}
            {status === 'setup' && (
              <div className="form-status err">
                ⚙ Formspree not configured yet. Open <code>src/components/Contact.jsx</code> and replace <code>YOUR_FORMSPREE_ID</code> with your ID from <a href="https://formspree.io" target="_blank" rel="noreferrer" style={{color:'inherit'}}>formspree.io</a>.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
