---
title: Design System — Superachiever
description: Splash page design system for superachiever.xyz
version: 1.0.0
---

# Design System — Superachiever

Splash page design system for superachiever.xyz. Single-page site showcasing family office benefits through minimal typography and subtle color.

## Color

### Palette

**Light Mode**
- `--background`: `oklch(1 0 0)` — Pure white
- `--foreground`: `oklch(0.129 0.042 264.695)` — Slate 950
- `--primary`: `oklch(0.208 0.042 265.755)` — Slate 900
- `--muted`: `oklch(0.968 0.007 247.896)` — Slate 50
- `--muted-foreground`: `oklch(0.554 0.046 257.417)` — Slate 500
- `--border`: `oklch(0.929 0.013 255.508)` — Slate 200
- `--ring`: `oklch(0.704 0.04 256.788)` — Slate 400

**Dark Mode**
- `--background`: `oklch(0.129 0.042 264.695)` — Slate 950
- `--foreground`: `oklch(0.984 0.003 247.858)` — Slate 50
- `--primary`: `oklch(0.929 0.013 255.508)` — Slate 200
- `--muted`: `oklch(0.279 0.041 260.031)` — Slate 800
- `--muted-foreground`: `oklch(0.704 0.04 256.788)` — Slate 400
- `--border`: `oklch(1 0 0 / 10%)` — White 10% opacity
- `--ring`: `oklch(0.554 0.046 257.417)` — Slate 500

### Accent

**Violet Glow** (centered background element)
- Light: `bg-violet-500/[0.08]` with `blur-3xl`
- Dark: `bg-violet-500/[0.16]` with `blur-3xl`

Applied as 34rem × 52rem rounded-full positioned absolutely at center.

## Typography

### Fonts

**Geist Sans** — Primary typeface for all UI and content
- Variable: `--font-sans`
- Weights: 400 (regular), 500 (medium), 600 (semibold)

**Geist Mono** — Monospace for descriptor label
- Variable: `--font-mono`
- Used for uppercase tracking-wide small text

### Scale

**Identity** (SITE.name)
- Size: `text-base sm:text-lg` (16px → 18px)
- Weight: `font-medium` (500)
- Tracking: `tracking-tight`

**Descriptor** (SITE.descriptor)
- Size: `text-xs` (12px)
- Weight: Regular
- Transform: `uppercase`
- Tracking: `tracking-[0.15em]`
- Color: `text-muted-foreground`
- Family: `font-mono`

**Tagline** (SITE.tagline, h1)
- Size: `clamp(2.25rem, min(9vw, 14svh), 5.75rem)` (36px → 92px)
- Weight: `font-semibold` (600)
- Leading: `leading-[1.05]`
- Tracking: `tracking-[-0.035em]`
- Balance: `text-balance`

**Plain** (SITE.plain, paragraph)
- Size: `text-lg sm:text-xl md:text-2xl` (18px → 20px → 24px)
- Weight: Regular
- Leading: `leading-relaxed` (1.625)
- Color: `text-muted-foreground`
- Balance: `text-pretty`

## Layout

### Structure

Single-section splash filling viewport (`min-h-dvh`), flex column with centered content constrained to `max-w-6xl`.

**Spacing**
- Horizontal padding: `px-6 sm:px-10` (24px → 40px)
- Top padding: `calc(env(safe-area-inset-top) + 1.5rem)` (24px + safe area)
- Bottom padding: `calc(env(safe-area-inset-bottom) + 2.25rem)` (36px + safe area)
- Short screen override: `@media(max-height:480px)` reduces to `pt-4 pb-5`

**Content Vertical Distribution**
1. Identity + descriptor (top)
2. Tagline (center, `my-8` → `my-4` on short screens)
3. Plain sentence (bottom)

Distributed via `justify-between` on flex column.

## Motion

### Animation

Staggered fade-up entrance using Motion (framer-motion successor):
- Initial: `opacity: 0, y: 12`
- Animate: `opacity: 1, y: 0`
- Duration: `600ms`
- Easing: `[0.22, 1, 0.36, 1]` (ease-out-expo)
- Stagger: `90ms` between items

Respects `prefers-reduced-motion` (disables animation when set).

## Tokens

### Border Radius
- `--radius`: `0.625rem` (10px)
- Variants: `sm` (0.6×), `md` (0.8×), `lg` (1×), `xl` (1.4×), `2xl` (1.8×), `3xl` (2.2×), `4xl` (2.6×)

### Theme Colors (semantics)

All theme colors follow the OKLCH values defined above, bound via CSS custom properties to support system light/dark switching.

Core semantic tokens: `background`, `foreground`, `primary`, `primary-foreground`, `secondary`, `secondary-foreground`, `muted`, `muted-foreground`, `accent`, `accent-foreground`, `destructive`, `border`, `input`, `ring`.

## References

- Color system: [ui.shadcn.com/colors](https://ui.shadcn.com/colors) (slate base, violet accent)
- Font: [Geist Font](https://vercel.com/font) by Vercel
- Motion: [motion.dev](https://motion.dev/) (successor to Framer Motion)
- Build: Next.js 16, React 19, Tailwind CSS 4
