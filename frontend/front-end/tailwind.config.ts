import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-fixed": "#f7e46f",
        "on-secondary-container": "#6f6300",
        "primary-fixed": "#ffdcc1",
        "on-primary-fixed-variant": "#693c0e",
        "tertiary-fixed": "#ffdf99",
        "surface-container-high": "#f2e6df",
        "secondary-fixed-dim": "#d9c856",
        "tertiary": "#463300",
        "surface-tint": "#855324",
        "primary-fixed-dim": "#fbb980",
        "on-surface": "#201b17",
        "on-primary-container": "#f1b179",
        "surface": "#fff8f5",
        "inverse-primary": "#fbb980",
        "error-container": "#ffdad6",
        "on-background": "#201b17",
        "surface-container-highest": "#ece0d9",
        "surface-variant": "#ece0d9",
        "outline-variant": "#d6c3b6",
        "surface-dim": "#e3d8d1",
        "surface-container-low": "#fdf1ea",
        "on-tertiary-container": "#eab629",
        "on-error-container": "#93000a",
        "inverse-on-surface": "#faeee7",
        "primary-container": "#704214",
        "on-primary": "#ffffff",
        "tertiary-fixed-dim": "#f3bf32",
        "surface-container-lowest": "#ffffff",
        "on-error": "#ffffff",
        "surface-container": "#f7ece5",
        "inverse-surface": "#352f2b",
        "on-tertiary": "#ffffff",
        "outline": "#847469",
        "on-secondary-fixed": "#201c00",
        "on-primary-fixed": "#2e1500",
        "secondary-container": "#f4e16c",
        "background": "#fff8f5",
        "error": "#ba1a1a",
        "tertiary-container": "#624900",
        "secondary": "#6b5f00",
        "on-tertiary-fixed-variant": "#5a4300",
        "surface-bright": "#fff8f5",
        "on-tertiary-fixed": "#251a00",
        "primary": "#552c00",
        "on-secondary-fixed-variant": "#504700",
        "on-surface-variant": "#51443a",
        "on-secondary": "#ffffff"
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "40px",
        "unit": "8px",
        "container-max-width": "1200px",
        "stack-sm": "8px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "stack-md": "16px",
        "stack-lg": "32px"
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
export default config;