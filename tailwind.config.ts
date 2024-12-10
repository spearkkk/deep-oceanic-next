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

        // Convenience Colors
        "dp-ocn-nxt-background": "#001c1f",
        "dp-ocn-nxt-foreground": "#d4e1e8",
        "dp-ocn-nxt-yellow": "#f3b863",
        "dp-ocn-nxt-cyan": "#4fb7ae",
        "dp-ocn-nxt-blue": "#568ccf",
        "dp-ocn-nxt-red": "#d3464d",
        "dp-ocn-nxt-magenta": "#8b66d6",
      },
    },
  },
  plugins: [],
} satisfies Config;
