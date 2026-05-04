/** @type {import('tailwindcss').Config} */
//
// 2026-05-05 redesign — calm-but-urgent dental palette pulled from the
// Claude Design handoff. Warm off-white base, deep ink, teal as the
// primary accent and a muted coral for the conversion CTA. All accents
// share similar chroma so the ink doesn't fight the warm paper.
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Surfaces
        cream:  '#faf7f0',  // primary page background — warm off-white
        paper:  '#fffdf7',  // slightly warmer card surface
        ink:    '#0f1f1c',  // deep ink, near-black with cool green undertone
        'ink-soft':  '#1a2826', // slightly lifted dark surface (e.g. inside dark cards)
        'ink-line':  '#2a322f', // dark-on-dark divider
        'ink-mute':  '#8a9a96', // muted text on dark backgrounds
        'ink-soft-text': '#eef3ed', // soft white text on dark backgrounds

        // Sand line / muted text family for the warm paper sections
        sand:        '#d9d3c5', // primary divider on cream
        'sand-soft': '#ece7dd', // subtler border
        'sand-card': '#e3ddcf', // card-edge tone
        'sand-text': '#7a705c', // mono-eyebrow text on cream
        'sand-body': '#4a4438', // body text on cream
        'sand-deep': '#6b6353', // wordmark sub-label

        // Brand teal (primary accent, calm)
        brand: {
          50:  '#eaf3ef',
          100: '#d6e8e0',
          200: '#b8d6c9',
          300: '#a8d0c5', // light teal — accent in headlines on dark bg
          400: '#69b39e',
          500: '#3a8a78', // primary teal accent
          600: '#2d6f60',
          700: '#23574c',
          800: '#1a3f37',
          900: '#0f1f1c', // collapses to ink for hover/active
        },

        // Coral / urgent CTA (used for the emergency-call style accent)
        coral: {
          50:  '#fbeee8',
          100: '#f6d8cc',
          300: '#e29a82',
          500: '#c4624e', // primary coral CTA
          600: '#a84d3a',
          700: '#83392a',
        },

        // Legacy "urgent" key kept for the YMYL "999/NHS 111" callout
        // copy that already references it. Now points at the same coral
        // family so the warning still reads coherently.
        urgent: {
          50:  '#fbeee8',
          500: '#c4624e',
          600: '#a84d3a',
          700: '#83392a',
        },
      },
      fontFamily: {
        sans:    ['var(--font-sans)', 'system-ui', 'sans-serif'],     // Inter Tight
        display: ['var(--font-display)', 'Georgia', 'serif'],          // Instrument Serif (italic accents)
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],   // JetBrains Mono (eyebrows)
      },
      letterSpacing: {
        tightest: '-0.035em',
      },
    },
  },
  plugins: [],
};
