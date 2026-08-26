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
        neo: {
          red: "#DF0C0A",
          "red-hover": "#C00A08",
          "red-light": "rgba(223, 12, 10, 0.08)",
          navy: "#081D32",
          "navy-light": "#0E2C4A",
          "navy-dark": "#051321",
          clinical: "#6F9AB8",
          "clinical-light": "#E9F2F7",
          "blue-gray": "#5F6D74",
          ice: "#F5F8FA",
          warm: "#F3F0ED",
          dark: "#10202E",
          muted: "#556575",
          success: "#21865B",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["var(--font-outfit)", "var(--font-jakarta)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.4" }],
        sm: ["0.9375rem", { lineHeight: "1.55" }],
        base: ["1.0625rem", { lineHeight: "1.65" }],
        lg: ["1.1875rem", { lineHeight: "1.6" }],
        xl: ["1.3125rem", { lineHeight: "1.4" }],
        "2xl": ["1.625rem", { lineHeight: "1.3" }],
        "3xl": ["2rem", { lineHeight: "1.25" }],
        "4xl": ["2.5rem", { lineHeight: "1.2" }],
        "5xl": ["3.25rem", { lineHeight: "1.15" }],
      },
      boxShadow: {
        subtle: "0 2px 12px rgba(8, 29, 50, 0.05)",
        card: "0 12px 36px -8px rgba(8, 29, 50, 0.09)",
        "card-hover": "0 22px 48px -12px rgba(8, 29, 50, 0.14)",
        glow: "0 0 28px rgba(223, 12, 10, 0.28)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
