import './App.css';
import React from 'react';
import pp from './pp.jpg';

function CodeRain() {
  React.useEffect(() => {
    const canvas = document.getElementById('code-rain-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const fontSize = 18;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(0).map(() => Math.floor(Math.random() * (height / fontSize)));
    const chars = '01<>[]{}()#$_=+-%;:|&^~ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function draw() {
      ctx.fillStyle = 'rgba(18, 63, 103, 0.13)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = fontSize + 'px monospace';
      ctx.fillStyle = '#58A0C8';
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.25;
      }
    }
    let animationId;
    function animate() {
      draw();
      animationId = requestAnimationFrame(animate);
    }
    animate();
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <canvas
      id="code-rain-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}

const skills = [
  { name: 'C#', level: 85, icon: (
    <svg width="20" height="20" viewBox="0 0 32 32"><polygon points="16,3 29,10.5 29,25.5 16,33 3,25.5 3,10.5" fill="#68217A"/><text x="16" y="22" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">C#</text></svg>
  ) },
  { name: 'Python', level: 75, icon: (
    <svg width="20" height="20" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#3776AB"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Py</text></svg>
  ) },
  { name: 'Java', level: 70, icon: (
    <svg width="20" height="20" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#E76F00"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">Java</text></svg>
  ) },
  { name: 'React', level: 80, icon: (
    <svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#222"/><g><ellipse cx="12" cy="12" rx="10" ry="4.5" fill="none" stroke="#61DAFB" strokeWidth="2"/><ellipse cx="12" cy="12" rx="4.5" ry="10" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="4.5" ry="10" fill="none" stroke="#61DAFB" strokeWidth="2" transform="rotate(120 12 12)"/></g><circle cx="12" cy="12" r="2.5" fill="#61DAFB"/></svg>
  ) },
  { name: 'JavaScript', level: 80, icon: (
    <svg width="20" height="20" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#F7DF1E"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#222" fontWeight="bold">JS</text></svg>
  ) },
  { name: 'SQL', level: 65, icon: (
    <svg width="20" height="20" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#336791"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">SQL</text></svg>
  ) },
];

const socialSkills = [
  { name: 'Takım Çalışması', level: 90 },
  { name: 'Problem Çözme', level: 85 },
  { name: 'İletişim', level: 80 },
  { name: 'Liderlik', level: 70 },
  { name: 'Uyum Sağlama', level: 85 },
];

const projects = [
  {
    title: 'Araç Kiralama Sitesi',
    desc: 'React ve Node.js ile geliştirilmiş tam işlevli araç kiralama uygulaması. Kullanıcı yönetimi, rezervasyon takibi ve raporlama özellikleriyle eksiksiz bir çözüm sunar.',
    tags: ['React', 'Node.js'],
    link: 'https://github.com/hikmetdev/ogrenci-yonetim',
  },
  {
    title: 'Basit Mesajlaşma Uygulaması',
    desc: 'Python, PHP ve MongoDB ile geliştirilmiş basit bir mesajlaşma uygulaması. Gerçek zamanlı sohbet, kullanıcı yönetimi ve veri saklama özellikleri sunar.',
    tags: ['Python', 'MongoDB', 'PHP'],
    link: 'https://github.com/hikmetdev/ai-goruntu',
  },
  {
    title: 'Muhasebe Uygulaması',
    desc: 'C# ve MySQL ile geliştirilmiş temel muhasebe uygulaması. Gelir-gider takibi, veri yönetimi ve raporlama özellikleri sunar.',
    tags: ['C#', 'MySQL'],
    link: 'https://github.com/hikmetdev/blog',
  },
  {
    title: 'Çağrı Merkezi Uygulaması',
    desc: 'Java, React ve JavaScript ile geliştirilmiş çağrı merkezi uygulaması. Çağrı yönetimi, kullanıcı etkileşimi ve temel analiz ve raporlama özellikleri sunar.',
    tags: ['React Native', 'Java', 'JavaScript', 'PostgreSQL'],
    link: 'https://github.com/hikmetdev/mobil-notlar',
  },
];

function App() {
  return (
    <div className="cv-bg">
      <CodeRain />
      <div className="cv-centered-container">
        <div className="cv-corner-deco top-right"></div>
        <div className="cv-corner-deco bottom-left"></div>
        <img
          src={pp}
          className="cv-profile-pic"
          alt="Profil"
        />
        <h1 className="cv-name">Hikmet Alanlı</h1>
        <h2 className="cv-title">Bilgisayar Mühendisliği Öğrencisi</h2>
        <p className="cv-summary">
          Bilgisayar Mühendisliği öğrencisiyim; savunma sanayinde staj tecrübesi ile C#, .NET, Python ve Java dillerinde uygulama geliştirme süreçlerinde yer aldım.<br /> 
          Analitik düşünmeye ve takım çalışmasına yatkın; Kapsül Omega İHA projesinde aktif rol alarak hem yazılım hem de sistem entegrasyonu konusunda pratik deneyim kazandım.<br />
          Savunma sanayine odaklanarak kariyerime katkı sağlamayı hedefliyorum.
        </p>
        {/* Teknik Yetenekler Progress Bar */}
        <section className="cv-section cv-section-tech">
          <h2>Teknik Yetenekler</h2>
          <div className="cv-skills-list">
            {skills.map((s, i) => (
              <div className="cv-skill-bar" key={s.name}>
                <span className="cv-skill-label">{s.icon} {s.name}</span>
                <div className="cv-skill-progress"><div style={{width: s.level + '%'}}></div></div>
              </div>
            ))}
          </div>
        </section>
        {/* Sosyal Yetenekler Progress Bar */}
        <section className="cv-section cv-section-social">
          <h2>Sosyal Yetenekler</h2>
          <div className="cv-skills-list">
            {socialSkills.map((s, i) => (
              <div className="cv-skill-bar" key={s.name}>
                <span className="cv-skill-label">{s.name}</span>
                <div className="cv-skill-progress"><div style={{width: s.level + '%'}}></div></div>
              </div>
            ))}
          </div>
        </section>
        {/* Projeler Grid */}
        <section className="cv-section cv-section-projects">
          <h2>Projeler</h2>
          <div className="cv-projects-grid cv-projects-centered">
            {projects.map((p, i) => (
              <div className="cv-project-card" key={p.title}>
                <div className="cv-project-header">
                  <h4>{p.title}</h4>
                  <div className="cv-project-tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="cv-project-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Alt kısım: Eğitim (sadece üniversite ve staj), altında diller ve iletişim alt alta */}
        <div className="cv-bottom-row" style={{flexDirection: 'column', gap: '24px'}}>
          <section className="cv-section cv-timeline-section" style={{maxWidth: '900px', margin: '0 auto', width: '100%'}}>
            <h2>Eğitim</h2>
            <div className="cv-timeline">
              <div className="cv-timeline-item">
                <div className="cv-timeline-dot" />
                <div className="cv-timeline-content">
                  <h4>Selçuk Üniversitesi</h4>
                  <span>Bilgisayar Mühendisliği (2023-2027)</span>
                </div>
              </div>
            </div>
          </section>
          {/* Staj Deneyimi Bölümü */}
          <section className="cv-section cv-timeline-section" style={{maxWidth: '900px', margin: '0 auto', width: '100%'}}>
            <h2>Staj Deneyimi</h2>
            <div className="cv-timeline">
              <div className="cv-timeline-item">
                <div className="cv-timeline-dot" />
                <div className="cv-timeline-content">
                  <h4>Bilgi Teknolojileri ve İletişim Kurumu</h4>
                  <span>Stajyer (2025)</span>
                  <p>Ekip çalışması, proje yönetimi ve yazılım geliştirme süreçlerinde deneyim kazandım.</p>
                </div>
              </div>
              <div className="cv-timeline-item">
                <div className="cv-timeline-dot" />
                <div className="cv-timeline-content">
                  <h4>Anayurt Savunma</h4>
                  <span>Stajyer (2024)</span>
                  <p>Savunma sanayisinde kullanılan temel yazılım uygulamaları ve teknolojiler üzerine gözlem ve uygulama deneyimi.</p>
                </div>
              </div>
            </div>
          </section>
          <div style={{display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '900px', margin: '0 auto', width: '100%'}}>
            {/* Bildiği Diller Bölümü */}
            <section className="cv-section" style={{textAlign: 'center'}}>
              <h2>Bildiği Diller</h2>
              <ul className="cv-contact" style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', display: 'flex'}}>
                <li><b>İngilizce:</b> A2-B1 (Başlangıç-Orta Seviye)</li>
              </ul>
            </section>
            <section className="cv-section cv-section-contact" style={{textAlign: 'center'}}>
              <h2>İletişim ve Adres</h2>
              <ul className="cv-contact" style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', display: 'flex'}}>
                <li><svg className="icon-phone" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="#34699A"/></svg><b>Telefon:</b> +90 531 451 53 30</li>
                <li><svg className="icon-location" viewBox="0 0 24 24" fill="#34699A"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg><b>Konum:</b> Konya, Türkiye</li>
              </ul>
              <div className="cv-social-bottom" style={{justifyContent: 'center'}}>
                <a href="mailto:hikmetalanli@outlook.com" title="E-posta" className="cv-social-btn cv-mail">
                  <svg className="icon-mail" viewBox="0 0 24 24"><path d="M12 13.065 2.4 6.6A2 2 0 0 1 4 6h16a2 2 0 0 1 1.6.6z"/><path d="M21.6 7.8 12 14.935 2.4 7.8V18a2 2 0 0 0 2 2h15.2a2 2 0 0 0 2-2z"/></svg>
                </a>
                <a href="https://github.com/hikmetdev" target="_blank" rel="noopener noreferrer" title="GitHub" className="cv-social-btn cv-github">
                  <svg className="icon-github" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.68 5.41-5.24 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/hikmet-alanl%C4%B1-4493b02a4" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="cv-social-btn cv-linkedin">
                  <svg className="icon-linkedin" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
                </a>
              </div>
            </section>
            {/* CV İndir Butonu */}
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '18px'}}>
              <a href="./cv.pdf" download className="cv-social-btn" style={{fontWeight: 700, fontSize: '1.08rem', padding: '12px 32px', background: '#58A0C8', color: '#fff', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 2px 8px #58A0C8', transition: 'background 0.18s, color 0.18s, box-shadow 0.18s, transform 0.18s'}}>
                CV İndir
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer style={{textAlign: 'center', marginTop: 32, marginBottom: 12, color: '#34699A', fontWeight: 500, fontSize: '1rem', opacity: 0.7}}>
        © 2025 Hikmet Alanlı. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}

export default App;
