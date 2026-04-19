// CTA.jsx — contact block (Wave bg) + white-bg Footer
function CTA() {
  return (
    <section id="anfrage" style={{ position: 'relative', overflow: 'hidden', padding: '120px 32px', background: 'var(--bg-primary)' }}>
      <img src="../../assets/Wave_Transparent.avif" alt=""
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, width: '100%', height: 480, objectFit: 'cover', zIndex: 0 }} />
      <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.02em' }}>
          Bereit für ein neues Projekt?
        </h2>
        <p style={{ fontSize: 19, color: 'var(--text-secondary)', marginTop: 20, lineHeight: 1.5 }}>
          Eine kurze Nachricht reicht. Wir melden uns innerhalb von 48 Stunden.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
          <a className="btn btn-secondary" style={{ textDecoration: 'none' }}>Projekt anfragen</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: 'var(--white)', color: 'var(--text-primary)', padding: '64px 32px 32px', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32, paddingBottom: 48 }}>
          <div>
            <img src="../../assets/logo.png" alt="fonio.ai" style={{ height: 26 }} />
            <p style={{ marginTop: 16, color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.55, maxWidth: 280 }}>
              Webdesign-Studio aus Hamburg. Wir arbeiten mit Marken, die auf Substanz setzen.
            </p>
          </div>
          {[
            { h: 'Studio',      l: ['Über uns', 'Team', 'Journal', 'Kontakt'] },
            { h: 'Leistungen',  l: ['Webdesign', 'Entwicklung', 'Branding', 'Beratung'] },
            { h: 'Rechtliches', l: ['Impressum', 'Datenschutz', 'AGB'] },
          ].map((c, i) => (
            <div key={i}>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{c.h}</div>
              {c.l.map((x, j) => (
                <a key={j} href="#" style={{ display: 'block', color: 'var(--text-secondary)', fontSize: 14, textDecoration: 'none', marginBottom: 8 }}>{x}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: 13 }}>
          <span>© 2026 fonio. Alle Rechte vorbehalten.</span>
          <span>studio@fonio.de</span>
        </div>
      </div>
    </footer>
  );
}

window.CTA = CTA;
window.Footer = Footer;
