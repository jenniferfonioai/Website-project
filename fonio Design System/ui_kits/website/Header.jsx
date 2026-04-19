// Header.jsx — fonio marketing site top nav
const { useState, useEffect } = React;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      backdropFilter: scrolled ? 'saturate(140%) blur(8px)' : 'none',
      transition: 'background .2s ease, border-color .2s ease',
    }}>
      <style>{`
        .fonio-nav a {
          color: var(--text-secondary);
          font-size: 15px;
          font-weight: 400;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 8px;
          transition: color .15s ease;
        }
        .fonio-nav a:hover { color: var(--fonio-blau); }
      `}</style>
      <div style={{
        maxWidth: 1240, margin: '0 auto', padding: '18px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="../../assets/logo.png" alt="fonio.ai" style={{ height: 28 }} />
        </a>
        <nav className="fonio-nav" style={{ display: 'flex', gap: 4, marginLeft: 'auto' }}>
          <a href="#leistungen">Leistungen</a>
          <a href="#projekte">Projekte</a>
          <a href="#studio">Studio</a>
          <a href="#journal">Journal</a>
          <a href="#kontakt" style={{ marginLeft: 8 }}>Kontakt</a>
          <a href="#anfrage" className="btn btn-primary" style={{ marginLeft: 12, color: 'var(--white)' }}>Projekt anfragen</a>
        </nav>
      </div>
    </header>
  );
}

window.Header = Header;
