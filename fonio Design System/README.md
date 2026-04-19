# fonio Design System

Design system for **fonio Webdesign** — a web-design studio. The brand is built around a single, strong primary color ("fonio blau"), clean black-on-white typography set in Roboto, soft neutral surfaces, and two signature gradient visuals (a blue glow "Wave" and a pearlescent "Sphere") that carry the brand's airy, modern feel.

## Sources & Inputs

The system was built from assets and specs provided directly by the fonio team:

- `uploads/fonio 3.0.png` — current wordmark (fonio.ai 3.0); black-to-blau horizontal gradient with a version pill
- `uploads/Sphere.webp` — brand illustration, pearlescent soft-bloom orb
- `uploads/Wave_Transparent.avif` — brand illustration, blue bottom-glow gradient
- Brand spec: colors, Roboto type scale, button sizing, radius, shadow rules (shared by the team directly — see "Visual Foundations" below for the canonical values)

> Fonts are self-hosted from `fonts/Roboto-VariableFont_wdth_wght.ttf` (weight + width variable axes) via `@font-face` in `colors_and_type.css`.

---

## Content Fundamentals

fonio's copy voice is **quiet, direct, and German-leaning minimal**. It favors short declarative sentences over marketing fluff and trusts the visuals to carry weight.

- **Voice**: calm, professional, slightly understated. Closer to a studio portfolio than a SaaS landing page.
- **Person**: "wir" (we) for the studio, "Sie" or "du" for the client depending on formality — prefer "du" for design-forward audiences, "Sie" for enterprise.
- **Language**: primarily German. English kept short, sentence-case.
- **Casing**: sentence case everywhere — in headings, labels, buttons. The brand name **fonio** itself is always lowercase, never capitalized (even at sentence start, ideally).
- **Tone**: confident without being loud. No exclamation marks. No hype words ("revolutionary", "game-changing"). No emoji.
- **Numbers / stats**: used sparingly and only when concrete (e.g. "seit 2019", "12 Projekte in 2025"). No invented metrics.
- **CTA style**: short verb phrases — "Projekt anfragen", "Portfolio ansehen", "Jetzt starten", "Mehr erfahren". Never "Click here".
- **Headlines**: one strong idea per headline. Sub-heads are a half-shade lighter (`--text-secondary`) and sit right under the main line.

Emoji are **not** used in the brand. Icons are line-style, monochrome, and used only when they add clarity.

---

## Visual Foundations

### Colors

The palette is deliberately small and semantic. One brand color does all the heavy lifting; everything else is a neutral.

| Token | Hex | Role |
|---|---|---|
| `--fonio-blau` | `#585DFE` | Brand primary. Links, primary buttons, accents, focus rings. |
| `--black` | `#0F0F16` | Primary text. Also secondary-button fill, and tertiary background for dark sections. |
| `--bg-primary` | `#FFFFFF` | Primary surface. |
| `--bg-secondary` | `#F7F8FC` | Secondary surface — alternating sections, input backgrounds on dark layouts. |
| `--border` | `#E1E3F4` | Primary border — cards, inputs, dividers. |
| `--text-secondary` | `#555B6E` | Secondary text — sub-heads, meta. |
| `--text-muted` | `#A4A6B6` | Muted text — captions, placeholders, disabled states. |

Blau is used sparingly. Full-saturation `#585DFE` should feel like an accent, not a flood — typically one element per screen (a CTA, a highlight, a hovered link).

### Typography

- **Family**: Roboto. One family across everything.
- **Body**: 16 / 400, line-height 1.5.
- **Headings**: weight 500 (medium), tight line-height (1.1–1.25), slight negative tracking (`-0.02em`).
- **Scale**: 12 · 14 · 16 · 18 · 20 · 24 · 32 · 40 · 52 · 72. (H1 52, H2 40, H3 32, H4 24.)
- No serifs, no scripts, no decorative faces. The system type *is* the brand type.

### Spacing

4-pt grid. Tokens `--s-1` through `--s-24`. Generous vertical rhythm between sections — fonio layouts breathe.

### Corner Radii

- `--radius-sm` = **10px** — chips, tags, small UI elements.
- `--radius-md` = **12px** — buttons, cards, inputs, menus. *Default for most UI.*
- `--radius-lg` = **15px** — large media, hero images, featured blocks.

### Shadows

One canonical "medium" shadow is used across cards and elevated surfaces. It's soft and diffuse — never crunchy or dark. `--shadow-md` is the default. `--shadow-sm` for inputs on hover. `--shadow-lg` reserved for modals/popovers.

### Backgrounds & Imagery

Three signature visuals anchor the brand. Each has one job — don't mix them up.

- **Sphere** (`assets/Sphere.webp`) — soft pearlescent orb, blue-to-lime iridescence. **Hero only.** Used as the product visualization on the right side of the hero section. Never cropped tight, never repeated in later sections.
- **Wave** (`assets/Wave_Transparent.avif`) — blue glow rising from the bottom, fading to white. **Banner sections.** Full-bleed horizontal behind CTAs and feature banners, anchored to the bottom edge.
- **Wobble** (`assets/Wobble.webp`) — iridescent open loop. **Absolute left/right accents.** Positioned absolutely against the page edges and intentionally bleeding off the viewport. Primary placement is in the hero; on long pages, reuse once in a later section for rhythm. Never centered, never contained.

Outside of these two, photography (when used) is cool-toned, airy, low-contrast. Never warm, never grainy. No hand-drawn illustrations. No repeating patterns. No textures.

### Gradients

- Brand gradient: **black → fonio blau**, left-to-right, used in the wordmark. Avoid recreating this elsewhere — it belongs to the logo.
- Protection: flat `--bg-secondary` behind dense content, never a gradient as a generic backdrop. The Wave and Sphere provide all the "gradient" the brand needs.

### Animation

- **Easing**: `ease` or `ease-out`, 150–250ms.
- **Hover**: desaturated/darker background (buttons), border darkens to `--border-strong` (cards, inputs).
- **Press**: 1px vertical translate, no scale, no ripple.
- **Focus**: 3px `rgba(88,93,254,0.18)` ring + blau border. Always visible for keyboard users.
- No bounces, no springs, no parallax, no scroll-hijacks. Fades and small translations only.

### Borders vs Shadows

Surfaces either have a **1px border** (`--border`) *or* a **`--shadow-md`** — rarely both. Borders for utility surfaces (cards in a grid, inputs); shadows for floating/hero surfaces.

### Transparency & Blur

Used only under the Wave/Sphere visuals (the images themselves have transparency). No frosted-glass / backdrop-blur UI chrome. The brand is crisp, not glassy.

### Layout Rules

- Max content width: **1240px**.
- Section vertical padding: 80–120px on desktop, 48–64px on mobile.
- Generous gutters; copy columns cap at ~640px for readability.
- Sticky top nav, transparent on hero then solid white on scroll.

### Grids

Grid column counts are prescriptive:

- **3 columns** — default for card grids and similar content (services, case studies, team).
- **4 columns** — for smaller cards or denser content (feature chips, logo walls, small tiles).
- **2 columns** — reserved for **side-by-side sections only** (e.g. image + copy, split hero). Never used for card grids.

### Cards

- Background `--bg-primary`.
- Border `1px solid --border` **or** shadow `--shadow-md`, not both.
- Radius `--radius-md` (12px).
- Padding 16px **or** 32px.
- No colored left-border accents. No gradient fills.

---

## Iconography

fonio doesn't ship a custom icon set. Icons are used sparingly and should read as **quiet** — line-style, **2px stroke**, monochrome, **16px**, inheriting `currentColor` so they sit naturally against either black or fonio blau. 20px is acceptable as an upper bound; never larger.

**Recommended source**: [Lucide](https://lucide.dev) via CDN. It matches the brand's stroke weight and geometric-humanist feel. Where Lucide is missing a glyph, we substitute from [Phosphor](https://phosphoricons.com/) at "regular" weight.

```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="arrow-right"></i>
```

- **Emoji**: never used.
- **Unicode symbols**: only `→` (right arrow) in CTAs and link labels — it's a brand signature.
- **PNG icons**: avoid. Everything is SVG.
- **Logo**: `assets/logo.png` — the **fonio.ai 3.0** wordmark is the only version. Always used in full color (black→fonio blau) with the version pill intact. Do not recolor, tint, invert, crop out the pill, or replace with a solid-black variant. Place on white or `--bg-secondary`; avoid dark or saturated backgrounds.

---

## Index

Root files:

- `README.md` — this document
- `colors_and_type.css` — design tokens + base element styles
- `SKILL.md` — skill manifest (for Claude Code portability)

Folders:

- `assets/` — brand visuals
  - `logo.png` — primary wordmark (fonio.ai 3.0)
  - `Sphere.webp` — brand sphere
  - `Wave_Transparent.avif` — brand wave glow
- `preview/` — Design System tab cards (type, colors, spacing, components, brand)
- `ui_kits/website/` — fonio marketing site UI kit + components

---

## Caveats

- **Dark mode**: not specified, not included. Ask if a dark palette should be derived.
- **Voice samples**: copy examples are educated guesses based on the brand spec — real product copy from fonio's site would tighten this up.
- **Logo variants**: only the gradient wordmark exists and is used. No mono variants — per brand direction, black/white versions are intentionally not part of the system.
