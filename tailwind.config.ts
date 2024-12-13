import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Oceanic Next Base24 Color Scheme
        "dp-ocn-nxt-base-00": "#001c1f",
        "dp-ocn-nxt-base-01": "#002931",
        "dp-ocn-nxt-base-02": "#003640",
        "dp-ocn-nxt-base-03": "#004852",
        "dp-ocn-nxt-base-04": "#0093a3",
        "dp-ocn-nxt-base-05": "#d4e1e8",
        "dp-ocn-nxt-base-06": "#e0e9ef",
        "dp-ocn-nxt-base-07": "#f2f7f9",
        "dp-ocn-nxt-base-08": "#d3464d",
        "dp-ocn-nxt-base-09": "#e37552",
        "dp-ocn-nxt-base-0a": "#f3b863",
        "dp-ocn-nxt-base-0b": "#63b784",
        "dp-ocn-nxt-base-0c": "#4fb7ae",
        "dp-ocn-nxt-base-0d": "#568ccf",
        "dp-ocn-nxt-base-0e": "#8b66d6",
        "dp-ocn-nxt-base-0f": "#d0658e",
        "dp-ocn-nxt-base-10": "#1f2628",
        "dp-ocn-nxt-base-11": "#2a2f30",
        "dp-ocn-nxt-base-12": "#ff6670",
        "dp-ocn-nxt-base-13": "#ffe08a",
        "dp-ocn-nxt-base-14": "#72e1a6",
        "dp-ocn-nxt-base-15": "#4de3e3",
        "dp-ocn-nxt-base-16": "#5caeff",
        "dp-ocn-nxt-base-17": "#b788ff",

        // Yellow
        'dp-ocn-nxt-yellow': {
          50: 'rgba(243, 184, 99, 0.1)',
          100: 'rgba(243, 184, 99, 0.2)',
          200: 'rgba(243, 184, 99, 0.3)',
          300: 'rgba(243, 184, 99, 0.4)',
          400: 'rgba(243, 184, 99, 0.5)',
          500: 'rgba(243, 184, 99, 0.6)', // Base
          600: 'rgba(243, 184, 99, 0.7)',
          700: 'rgba(243, 184, 99, 0.8)',
          800: 'rgba(243, 184, 99, 0.9)',
          900: 'rgba(243, 184, 99, 1)',
        },
        // Cyan
        'dp-ocn-nxt-cyan': {
          50: 'rgba(79, 183, 174, 0.1)',
          100: 'rgba(79, 183, 174, 0.2)',
          200: 'rgba(79, 183, 174, 0.3)',
          300: 'rgba(79, 183, 174, 0.4)',
          400: 'rgba(79, 183, 174, 0.5)',
          500: 'rgba(79, 183, 174, 0.6)', // Base
          600: 'rgba(79, 183, 174, 0.7)',
          700: 'rgba(79, 183, 174, 0.8)',
          800: 'rgba(79, 183, 174, 0.9)',
          900: 'rgba(79, 183, 174, 1)',
        },
        // Blue
        'dp-ocn-nxt-blue': {
          50: 'rgba(86, 140, 207, 0.1)',
          100: 'rgba(86, 140, 207, 0.2)',
          200: 'rgba(86, 140, 207, 0.3)',
          300: 'rgba(86, 140, 207, 0.4)',
          400: 'rgba(86, 140, 207, 0.5)',
          500: 'rgba(86, 140, 207, 0.6)', // Base
          600: 'rgba(86, 140, 207, 0.7)',
          700: 'rgba(86, 140, 207, 0.8)',
          800: 'rgba(86, 140, 207, 0.9)',
          900: 'rgba(86, 140, 207, 1)',
        },
        // Red
        'dp-ocn-nxt-red': {
          50: 'rgba(211, 70, 77, 0.1)',
          100: 'rgba(211, 70, 77, 0.2)',
          200: 'rgba(211, 70, 77, 0.3)',
          300: 'rgba(211, 70, 77, 0.4)',
          400: 'rgba(211, 70, 77, 0.5)',
          500: 'rgba(211, 70, 77, 0.6)', // Base
          600: 'rgba(211, 70, 77, 0.7)',
          700: 'rgba(211, 70, 77, 0.8)',
          800: 'rgba(211, 70, 77, 0.9)',
          900: 'rgba(211, 70, 77, 1)',
        },
        // Magenta
        'dp-ocn-nxt-magenta': {
          50: 'rgba(139, 102, 214, 0.1)',
          100: 'rgba(139, 102, 214, 0.2)',
          200: 'rgba(139, 102, 214, 0.3)',
          300: 'rgba(139, 102, 214, 0.4)',
          400: 'rgba(139, 102, 214, 0.5)',
          500: 'rgba(139, 102, 214, 0.6)', // Base
          600: 'rgba(139, 102, 214, 0.7)',
          700: 'rgba(139, 102, 214, 0.8)',
          800: 'rgba(139, 102, 214, 0.9)',
          900: 'rgba(139, 102, 214, 1)',
        },
        // Green
        'dp-ocn-nxt-green': {
          50: 'rgba(99, 183, 132, 0.1)',
          100: 'rgba(99, 183, 132, 0.2)',
          200: 'rgba(99, 183, 132, 0.3)',
          300: 'rgba(99, 183, 132, 0.4)',
          400: 'rgba(99, 183, 132, 0.5)',
          500: 'rgba(99, 183, 132, 0.6)', // Base
          600: 'rgba(99, 183, 132, 0.7)',
          700: 'rgba(99, 183, 132, 0.8)',
          800: 'rgba(99, 183, 132, 0.9)',
          900: 'rgba(99, 183, 132, 1)',
        },
        // Grey
        'dp-ocn-nxt-grey': {
          50: 'rgba(43, 48, 59, 0.1)',
          100: 'rgba(43, 48, 59, 0.2)',
          200: 'rgba(43, 48, 59, 0.3)',
          300: 'rgba(43, 48, 59, 0.4)',
          400: 'rgba(43, 48, 59, 0.5)',
          500: 'rgba(43, 48, 59, 0.6)', // Base
          600: 'rgba(43, 48, 59, 0.7)',
          700: 'rgba(43, 48, 59, 0.8)',
          800: 'rgba(43, 48, 59, 0.9)',
          900: 'rgba(43, 48, 59, 1)',
        },
        // Black
        'dp-ocn-nxt-black': {
          DEFAULT: 'rgba(31, 38, 40, 1)',
        },
        // White
        'dp-ocn-nxt-white': {
          DEFAULT: 'rgba(244, 248, 250, 1)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
