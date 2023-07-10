/** @type {import('tailwindcss').Config} */

/* COLORS */
const DSColors = ({ colors }) => ({
  inherit: colors.inherit,
  current: colors.current,
  transparent: colors.transparent,
  black: colors.black,
  gray: colors.gray,
  white: colors.white,
  primary: {
    200: 'hsla(207, 45%, 18%, 0.2)',
    600: 'hsla(207, 45%, 18%, 0.6)',
    900: 'hsla(207, 45%, 18%, 1)',
    950: 'hsla(207, 45%, 22%, 1)',
    DEFAULT: 'hsla(207, 45%, 18%, 1)',
  },
  secondary: {
    accent: 'hsla(63, 88%, 19%, 1)',
    100: 'hsla(62, 38%, 50%, 0.1)',
    600: 'hsla(62, 38%, 50%, 0.6)',
    900: 'hsla(62, 38%, 50%, 1)',
    DEFAULT: 'hsla(62, 38%, 50%, 1)',
  },
  ds: {
    base: '#F3F3F3',
    neutral: '#2B546B',
    accent: '#E93266',
    info: '#279FB9',
    copy: colors.black,
    placeholder: '#848389',
  },
  status: {
    success: '#308604',
    warning: '#F49C18',
    error: colors.red[600],
  },
  badge: {
    green: {
      400: colors.lime[400],
      900: colors.lime[900],
    },
    orange: {
      400: colors.orange[400],
      900: colors.orange[900],
    },
    red: {
      500: colors.red[500],
      900: colors.red[900],
    },
    cyan: {
      400: colors.cyan[400],
      900: colors.cyan[900],
    },
    yellow: {
      300: colors.yellow[300],
      800: colors.yellow[800],
    },
    amber: {
      600: colors.amber[600],
      900: colors.amber[900],
    },
    purple: {
      300: colors.purple[300],
      900: colors.purple[900],
    },
  },
});

export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.33' }],
      badge: ['0.875rem', { lineHeight: '1.14' }],
      base: ['1rem', { lineHeight: '1.5' }],
      h1: ['2.5rem', { lineHeight: '1.1', fontWeight: '700' }],
      h2: ['2rem', { lineHeight: '1.125', fontWeight: '700' }],
      h3: ['1.25rem', { lineHeight: '1.2', fontWeight: '700' }],
    },
    fontWeight: {
      normal: '400',
      semi: '600',
      bold: '700',
    },
    colors: DSColors,
    spacing: {
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.5rem',
      6: '2rem',
      7: '2.5rem',
      8: '3rem',
      16: '4rem',
      20: '6rem',
      64: '16rem',
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
