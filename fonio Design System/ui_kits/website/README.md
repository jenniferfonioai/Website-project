# fonio Website — UI Kit

High-fidelity recreation of fonio's marketing site using the design system tokens.

## Screens
- `index.html` — one-page marketing layout (hero → services → projects → CTA → footer)

## Components
- `Header.jsx` — sticky transparent→solid nav with logo, links, primary CTA
- `Hero.jsx` — headline + Sphere visual, Wave background behind
- `Services.jsx` — 3-card services grid with numbered tags
- `Projects.jsx` — 2-column featured project grid with color placeholders
- `CTA.jsx` — contact block with Wave background; also exports `Footer`

## Visual rules followed
- Wordmark kept as the provided gradient SVG; inverted for dark footer.
- fonio blau used as single accent (primary CTA, links, eyebrow labels).
- Cards use bordered style in grids; no mixed borders + shadows.
- Roboto across the board; 500-weight headings; tight tracking on display sizes.
- Wave image anchored to section bottom; Sphere floats right in hero.
- German copy, sentence case, "→" suffix on primary CTAs.
