import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const links = ['Home','About','Skills','Projects','Experience','Education','Contact'];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  // Close on resize
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <>
      <nav className="navbar">
        <a href="#home" className="nav-logo">AC.</a>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} />
    </>
  );
}
