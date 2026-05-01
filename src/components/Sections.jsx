import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/sections.css';

/* ═══════════════════ SKILLS ═══════════════════ */
const SKILLS = [
  'JavaScript','React','Next.js','Node.js','Python','Django',
  'Tailwind CSS','HTML5','CSS3','C Programming','C++','Flutter',
  'React Native','Figma','Git & GitHub','WordPress','Blockchain','SEO',
];

export function Skills() {
  const labelRef = useScrollReveal();
  const gridRef  = useScrollReveal();
  return (
    <section id="skills" className="skills-section">
      <div className="section-inner">
        <div ref={labelRef} className="reveal">
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title">Skills &amp; Tools</h2>
        </div>
        <div ref={gridRef} className="skills-grid reveal" style={{ transitionDelay: '0.1s' }}>
          {SKILLS.map(s => (
            <div key={s} className="skill-badge">
              <span className="skill-dot" />{s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ PROJECTS ═══════════════════ */
const PROJECTS = [
  {
    num: '01',
    name: 'Pulse Chat App',
    desc: 'A modern, full-stack real-time communication platform with a sleek UI and robust backend designed for instant message delivery and seamless user authentication.',
    live: 'https://pulse-webchat.vercel.app/',
    github: 'https://github.com/Ayu0607/Pulse-Chat-web-app-',
  },
  {
    num: '02',
    name: 'Golf Charity Platform',
    desc: 'A full-stack, mobile-first web app combining golf score tracking, subscription-based access, monthly prize draws, and charity contributions — built with Next.js 14, Supabase, and Stripe.',
    live: 'https://golf-charity-platform-rho.vercel.app/',
    github: 'https://github.com/Ayu0607/Golf-charity-platform',
  },
  {
    num: '03',
    name: 'Binance AI Trading Bot',
    desc: 'A lightweight, production-ready Python wrapper for the Binance USDT-M Futures API supporting Market, Limit, Stop-Limit, and OCO orders with built-in logging and input validation.',
    github: 'https://github.com/Ayu0607/Binance-AI-Trading-Bot',
  },
];

export function Projects() {
  const labelRef = useScrollReveal();
  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <div ref={labelRef} className="reveal">
          <div className="section-label">My Work</div>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => {
            const cardRef = useScrollReveal(); // eslint-disable-line
            return (
              <div key={p.num} ref={cardRef} className="project-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="project-num">{p.num}</div>
                <div className="project-name">{p.name}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-links">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="proj-btn live">Live ↗</a>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-btn gh">GitHub</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ EXPERIENCE ═══════════════════ */
const EXPERIENCE = [
  {
    period: 'May 2025 – Jul 2025',
    role: 'Frontend & Backend Developer',
    company: 'Nexus · Internship · Virtual',
    points: [
      'Built the complete UI of the web application from scratch.',
      'Made backend improvements to enhance performance and smoothness.',
      'Developed 2 fully working online connection games within the platform.',
    ],
  },
  {
    period: 'Jan 2024 – Apr 2024',
    role: 'Web Developer',
    company: 'Business Limited · Internship · Bangalore, Virtual',
    points: [
      'Built and launched the company website from the ground up.',
      'Maintained and updated the site for 3 months post-launch.',
      'Gained hands-on industry-level experience in a real-world environment.',
    ],
  },
];

export function Experience() {
  const labelRef = useScrollReveal();
  const timelineRef = useScrollReveal();
  return (
    <section id="experience" className="experience-section">
      <div className="section-inner">
        <div ref={labelRef} className="reveal">
          <div className="section-label">Career</div>
          <h2 className="section-title">Work Experience</h2>
        </div>
        <div ref={timelineRef} className="timeline reveal" style={{ transitionDelay: '0.1s' }}>
          {EXPERIENCE.map(e => (
            <div key={e.period} className="timeline-item">
              <div className="timeline-dot" />
              <div className="exp-period">{e.period}</div>
              <div className="exp-role">{e.role}</div>
              <div className="exp-company">{e.company}</div>
              <ul className="exp-points">
                {e.points.map(pt => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ EDUCATION ═══════════════════ */
const EDU = [
  { icon: '🎓', degree: 'B.Tech in Computer Engineering', school: 'MIT ADT University, Pune', tag: 'Current' },
  { icon: '🏆', degree: 'University Scholarship Recipient', school: 'Awarded for academic excellence', tag: 'Achievement' },
  { icon: '💻', degree: 'College Coding Team Member', school: 'Competitive programming & tech events', tag: 'Extracurricular' },
];

export function Education() {
  const labelRef = useScrollReveal();
  const cardsRef = useScrollReveal();
  return (
    <section id="education" className="education-section">
      <div className="section-inner">
        <div ref={labelRef} className="reveal">
          <div className="section-label">Background</div>
          <h2 className="section-title">Education</h2>
        </div>
        <div ref={cardsRef} className="edu-cards reveal" style={{ transitionDelay: '0.1s' }}>
          {EDU.map(e => (
            <div key={e.degree} className="edu-card">
              <div className="edu-icon">{e.icon}</div>
              <div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
              </div>
              <div className="edu-tag">{e.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ FOOTER ═══════════════════ */
export function Footer() {
  return (
    <footer className="footer">
      <p>Designed &amp; Built with ♥ by <span>Ayush Choudhary</span> · 2025</p>
    </footer>
  );
}
