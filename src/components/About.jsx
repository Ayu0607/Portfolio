import useScrollReveal from '../hooks/useScrollReveal';
import '../styles/sections.css';

export default function About() {
  const imgRef = useScrollReveal();
  const textRef = useScrollReveal();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/AyushChoudhary_Resume.pdf';
    link.download = 'AyushChoudhary_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section">
      <div className="section-inner">
        <div className="about-grid">
          {/* Left – photo + stats */}
          <div ref={imgRef} className="about-img-col reveal">
            <div className="about-img-wrap">
              <img src="/ayush.jpeg" alt="Ayush Choudhary" className="about-img" />
              <div className="about-img-border" />
            </div>
            <div className="about-stats">
              {[
                { num: '2+', label: 'Years Coding' },
                { num: '3+', label: 'Projects Built' },
                { num: '2',  label: 'Internships' },
                { num: '15+', label: 'Skills' },
              ].map(s => (
                <div key={s.label} className="stat-card">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – text */}
          <div ref={textRef} className="about-text reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="section-label">About Me</div>
            <h2 className="section-title">I Build Things<br/>That Matter.</h2>
            <p>
              Hi, I'm Ayush Choudhary — a full-stack developer based in Pune, India who is passionate about software development and building real-life ideas that are interesting and challenging.
            </p>
            <p>
              I'm a creative graduate seeking to grow in software and artificial intelligence development, gain industry skills, and turn bold ideas into working products. I enjoy collaborating with others and pushing my limits with every project.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to my college coding team, and thinking of the next big idea to build. I was also awarded a scholarship from my university for academic excellence.
            </p>

            <div className="about-contact-row"><span className="ico">📍</span> Pune, India</div>
            <div className="about-contact-row"><span className="ico">✉️</span> ayushchoudhary0607@gmail.com</div>
            <div className="about-contact-row"><span className="ico">📞</span> +91 7357685517</div>

            <br/>
            <button className="btn btn-primary" onClick={handleDownload} style={{ border: 'none', cursor: 'pointer' }}>
              Download Resume ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
