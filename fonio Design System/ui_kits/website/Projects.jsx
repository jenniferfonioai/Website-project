// Projects.jsx — featured project grid (no eyebrow)
function Projects() {
  const projects = [
    { client: 'Atelier Noord',  kind: 'Relaunch',       tag: 'Mode',           color: '#E8E6DE' },
    { client: 'Gruene Linie',   kind: 'Branding & Site',tag: 'Nachhaltigkeit', color: '#D9E6D6' },
    { client: 'Format Studio',  kind: 'Portfolio',      tag: 'Architektur',    color: '#E4E6F2' },
    { client: 'Heller Verlag',  kind: 'E-Commerce',     tag: 'Publishing',     color: '#F1E4DC' },
    { client: 'Nord Kaffee',    kind: 'Site & Shop',    tag: 'Gastronomie',    color: '#E6DCD2' },
    { client: 'Sanft Studio',   kind: 'Webdesign',      tag: 'Wellness',       color: '#E4EDE8' },
  ];
  return (
    <section id="projekte" style={{ padding: '100px 32px', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: 40 }}>
          <h2 style={{ fontSize: 44, fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Was zuletzt entstand.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {projects.map((p, i) => (
            <a key={i} href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                aspectRatio: '16/10', borderRadius: 15, background: p.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Roboto', fontSize: 36, fontWeight: 500,
                color: 'rgba(15,15,22,0.35)', letterSpacing: '-0.02em',
              }}>{p.client}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 14 }}>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 500 }}>{p.client}</div>
                  <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 2 }}>{p.kind}</div>
                </div>
                <span style={{
                  fontSize: 11, color: 'var(--text-secondary)', fontWeight: 500,
                  border: '1px solid var(--border)', padding: '3px 8px', borderRadius: 10,
                }}>{p.tag}</span>
              </div>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
          <a className="btn btn-secondary" style={{ textDecoration: 'none' }}>Alle Projekte ansehen</a>
        </div>
      </div>
    </section>
  );
}

window.Projects = Projects;
