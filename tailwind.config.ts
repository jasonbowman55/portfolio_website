import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#17130f',
        surface: '#1e1812',
        raised: '#261e15',
        line: '#33291d',
        'line-strong': '#493c2a',
        ink: '#f2ebe0',
        body: '#b8ac9c',
        muted: '#8c8071',
        // one warm accent — "signal" and "copper" both point to it so every
        // already-written page (which references either name) stays in sync
        signal: {
          DEFAULT: '#c9895d',
          hover: '#dba077',
          dim: 'rgba(201,137,93,0.13)',
        },
        copper: {
          DEFAULT: '#c9895d',
          hover: '#dba077',
          dim: 'rgba(201,137,93,0.13)',
        },
        // distinct accent colors for the top contact-bar buttons only
        mail: {
          DEFAULT: '#d9704f',
          hover: '#e58a6c',
          dim: 'rgba(217,112,79,0.14)',
        },
        resume: {
          DEFAULT: '#5a9e6f',
          hover: '#71b587',
          dim: 'rgba(90,158,111,0.14)',
        },
        meeting: {
          DEFAULT: '#3f9c95',
          hover: '#57b3ac',
          dim: 'rgba(63,156,149,0.14)',
        },
        linkedin: {
          DEFAULT: '#0a66c2',
          hover: '#2f7fd1',
          dim: 'rgba(10,102,194,0.14)',
        },
        // legacy alias kept so any un-migrated class still resolves sanely
        dark: {
          bg: '#17130f',
          card: '#1e1812',
          border: '#33291d',
          text: '#b8ac9c',
          accent: '#c9895d',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
