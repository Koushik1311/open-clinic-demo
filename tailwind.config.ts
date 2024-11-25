import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.75rem",
        xl: "1.5rem",
      },
      screens: {
        xl: "1150px",
      },
    },
    extend: {
      boxShadow: {
        nav: "0 1px 3px 0 rgb(0 0 0 / 0.03)",
      },
      backgroundImage: {
        "nav-gradient":
          "linear-gradient(var(--tw-gradient-from), var(--tw-gradient-to))",
      },
      backgroundColor: {
        nav: "rgb(255 255 255 / 0.9)",
      },
    },
  },
  plugins: [],
} satisfies Config;
