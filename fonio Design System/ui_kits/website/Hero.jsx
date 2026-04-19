// Hero.jsx — vertical hero with Wobble bleeding off both edges
function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 60, paddingBottom: 100 }}>
      {/* Wobble accents, absolute left & right, bleeding off viewport */}
      <img src="../../assets/Wobble.webp" alt=""
        style={{
          position: 'absolute', left: '-28%', top: '8%', width: '55%',
          pointerEvents: 'none', zIndex: 0, opacity: 0.95,
        }} />
      <img src="../../assets/Wobble.webp" alt=""
        style={{
          position: 'absolute', right: '-28%', top: '22%', width: '55%',
          pointerEvents: 'none', zIndex: 0, opacity: 0.95, transform: 'scaleX(-1)',
        }} />

      {/* Vertical column: copy stacked above sphere */}
      <div style={{
        maxWidth: 920, margin: '0 auto', padding: '40px 32px 0',
        position: 'relative', zIndex: 1, textAlign: 'center',
      }}>
        <h1 style={{ fontSize: 88, lineHeight: 1.02, letterSpacing: '-0.02em', fontWeight: 500 }}>
          Webdesign,<br />das funktioniert.
        </h1>
        <p style={{
          fontSize: 20, color: 'var(--text-secondary)', marginTop: 24,
          maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.5,
        }}>
          Wir gestalten Websites für Marken, die sich abheben wollen — ohne Lärm, ohne Umwege.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 36, justifyContent: 'center' }}>
          <a className="btn btn-primary" style={{ textDecoration: 'none' }}>Projekt anfragen</a>
          <a className="btn btn-tertiary" style={{ textDecoration: 'none' }}>Portfolio ansehen</a>
        </div>
      </div>

      {/* Sphere as the product visualization, centered below copy */}
      <div style={{
        maxWidth: 640, margin: '40px auto 0',
        position: 'relative', zIndex: 1, padding: '0 32px',
      }}>
        <img src="../../assets/Sphere.webp" alt=""
          style={{ width: '100%', display: 'block' }} />
      </div>
    </section>
  );
}

window.Hero = Hero;
