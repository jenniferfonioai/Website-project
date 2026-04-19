// Services.jsx — 3-column services grid, no eyebrow
function Services() {
  const items = [
    { title: 'Webdesign', body: 'Von der ersten Skizze bis zum fertigen Layout. Klar, modern, markenstark.' },
    { title: 'Entwicklung', body: 'Performante Umsetzung in modernen Stacks — sauber gebaut, leicht zu pflegen.' },
    { title: 'Branding',  body: 'Logo, Farbe, Typografie. Ein konsistentes System statt einzelner Bausteine.' },
  ];
  return (
    <section id="leistungen" style={{ padding: '100px 32px', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 48, alignItems: 'end', marginBottom: 48 }}>
          <h2 style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Drei Dinge. Alle sauber gemacht.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--text-secondary)', maxWidth: 520, lineHeight: 1.55 }}>
            Wir konzentrieren uns auf das, was Websites stark macht. Alles andere lassen wir weg.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {items.map((it, i) => (
            <div key={i} className="card" style={{ padding: 28 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: 'var(--fonio-blau-soft)', color: 'var(--fonio-blau)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'ui-monospace, Menlo', fontSize: 14, fontWeight: 500, marginBottom: 20,
              }}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={{ fontSize: 22, fontWeight: 500, marginBottom: 10 }}>{it.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.55 }}>{it.body}</p>
              <a href="#" style={{ display: 'inline-block', marginTop: 20, color: 'var(--fonio-blau)', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>Mehr erfahren</a>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
          <a className="btn btn-secondary" style={{ textDecoration: 'none' }}>Alle Leistungen ansehen</a>
        </div>
      </div>
    </section>
  );
}

window.Services = Services;
