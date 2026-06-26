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
        // Deep Oceanic Next Vivid Signal Base24 Color Scheme
        "dp-ocn-nxt-base-00": "#00191d",
        "dp-ocn-nxt-base-01": "#002d36",
        "dp-ocn-nxt-base-02": "#00424f",
        "dp-ocn-nxt-base-03": "#006170",
        "dp-ocn-nxt-base-04": "#00b8c7",
        "dp-ocn-nxt-base-05": "#d8f3f5",
        "dp-ocn-nxt-base-06": "#eafffb",
        "dp-ocn-nxt-base-07": "#ffffff",
        "dp-ocn-nxt-base-08": "#ff4d6d",
        "dp-ocn-nxt-base-09": "#ffc061",
        "dp-ocn-nxt-base-0a": "#fff44f",
        "dp-ocn-nxt-base-0b": "#00ff9c",
        "dp-ocn-nxt-base-0c": "#00f5ff",
        "dp-ocn-nxt-base-0d": "#33b5ff",
        "dp-ocn-nxt-base-0e": "#d966ff",
        "dp-ocn-nxt-base-0f": "#ff7fcb",
        "dp-ocn-nxt-base-10": "#001014",
        "dp-ocn-nxt-base-11": "#00090b",
        "dp-ocn-nxt-base-12": "#ff7890",
        "dp-ocn-nxt-base-13": "#fff87a",
        "dp-ocn-nxt-base-14": "#5cffb8",
        "dp-ocn-nxt-base-15": "#59fbff",
        "dp-ocn-nxt-base-16": "#7dccff",
        "dp-ocn-nxt-base-17": "#e0a8ff",

        // Yellow
        'dp-ocn-nxt-yellow': {
          50: 'rgba(255, 244, 79, 0.1)',
          100: 'rgba(255, 244, 79, 0.2)',
          200: 'rgba(255, 244, 79, 0.3)',
          300: 'rgba(255, 244, 79, 0.4)',
          400: 'rgba(255, 244, 79, 0.5)',
          500: 'rgba(255, 244, 79, 0.6)', // Base
          600: 'rgba(255, 244, 79, 0.7)',
          700: 'rgba(255, 244, 79, 0.8)',
          800: 'rgba(255, 244, 79, 0.9)',
          900: 'rgba(255, 244, 79, 1)',
        },
        // Cyan
        'dp-ocn-nxt-cyan': {
          50: 'rgba(0, 245, 255, 0.1)',
          100: 'rgba(0, 245, 255, 0.2)',
          200: 'rgba(0, 245, 255, 0.3)',
          300: 'rgba(0, 245, 255, 0.4)',
          400: 'rgba(0, 245, 255, 0.5)',
          500: 'rgba(0, 245, 255, 0.6)', // Base
          600: 'rgba(0, 245, 255, 0.7)',
          700: 'rgba(0, 245, 255, 0.8)',
          800: 'rgba(0, 245, 255, 0.9)',
          900: 'rgba(0, 245, 255, 1)',
        },
        // Blue
        'dp-ocn-nxt-blue': {
          50: 'rgba(51, 181, 255, 0.1)',
          100: 'rgba(51, 181, 255, 0.2)',
          200: 'rgba(51, 181, 255, 0.3)',
          300: 'rgba(51, 181, 255, 0.4)',
          400: 'rgba(51, 181, 255, 0.5)',
          500: 'rgba(51, 181, 255, 0.6)', // Base
          600: 'rgba(51, 181, 255, 0.7)',
          700: 'rgba(51, 181, 255, 0.8)',
          800: 'rgba(51, 181, 255, 0.9)',
          900: 'rgba(51, 181, 255, 1)',
        },
        // Red
        'dp-ocn-nxt-red': {
          50: 'rgba(255, 77, 109, 0.1)',
          100: 'rgba(255, 77, 109, 0.2)',
          200: 'rgba(255, 77, 109, 0.3)',
          300: 'rgba(255, 77, 109, 0.4)',
          400: 'rgba(255, 77, 109, 0.5)',
          500: 'rgba(255, 77, 109, 0.6)', // Base
          600: 'rgba(255, 77, 109, 0.7)',
          700: 'rgba(255, 77, 109, 0.8)',
          800: 'rgba(255, 77, 109, 0.9)',
          900: 'rgba(255, 77, 109, 1)',
        },
        // Magenta
        'dp-ocn-nxt-magenta': {
          50: 'rgba(217, 102, 255, 0.1)',
          100: 'rgba(217, 102, 255, 0.2)',
          200: 'rgba(217, 102, 255, 0.3)',
          300: 'rgba(217, 102, 255, 0.4)',
          400: 'rgba(217, 102, 255, 0.5)',
          500: 'rgba(217, 102, 255, 0.6)', // Base
          600: 'rgba(217, 102, 255, 0.7)',
          700: 'rgba(217, 102, 255, 0.8)',
          800: 'rgba(217, 102, 255, 0.9)',
          900: 'rgba(217, 102, 255, 1)',
        },
        // Green
        'dp-ocn-nxt-green': {
          50: 'rgba(0, 255, 156, 0.1)',
          100: 'rgba(0, 255, 156, 0.2)',
          200: 'rgba(0, 255, 156, 0.3)',
          300: 'rgba(0, 255, 156, 0.4)',
          400: 'rgba(0, 255, 156, 0.5)',
          500: 'rgba(0, 255, 156, 0.6)', // Base
          600: 'rgba(0, 255, 156, 0.7)',
          700: 'rgba(0, 255, 156, 0.8)',
          800: 'rgba(0, 255, 156, 0.9)',
          900: 'rgba(0, 255, 156, 1)',
        },
        // Grey
        'dp-ocn-nxt-grey': {
          50: 'rgba(7, 59, 69, 0.1)',
          100: 'rgba(7, 59, 69, 0.2)',
          200: 'rgba(7, 59, 69, 0.3)',
          300: 'rgba(7, 59, 69, 0.4)',
          400: 'rgba(7, 59, 69, 0.5)',
          500: 'rgba(7, 59, 69, 0.6)', // Base
          600: 'rgba(7, 59, 69, 0.7)',
          700: 'rgba(7, 59, 69, 0.8)',
          800: 'rgba(7, 59, 69, 0.9)',
          900: 'rgba(7, 59, 69, 1)',
        },
        // Black
        'dp-ocn-nxt-black': {
          DEFAULT: 'rgba(0, 16, 20, 1)',
        },
        // White
        'dp-ocn-nxt-white': {
          DEFAULT: 'rgba(255, 255, 255, 1)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
