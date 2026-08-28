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
          navy: "#0284C7", // Sky Blue Primary
          "navy-light": "#0EA5E9", // Sky-500
          "navy-dark": "#0369A1", // Sky-700
          sky: {
            50: "#F0F9FF",
            100: "#E0F2FE",
            200: "#BAE6FD",
            300: "#7DD3FC",
            400: "#38BDF8",
            500: "#0EA5E9",
            600: "#0284C7",
            700: "#0369A1",
            800: "#075985",
            900: "#0C4A6E",
          },
          clinical: "#0EA5E9",
          "clinical-light": "#E0F2FE",
          "blue-gray": "#64748B",
          ice: "#F0F9FF",
          warm: "#F8FAFC",
          dark: "#0F172A",
          muted: "#64748B",
          success: "#10B981",
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
        subtle: "0 2px 12px rgba(2, 132, 199, 0.08)",
        card: "0 12px 36px -8px rgba(2, 132, 199, 0.12)",
        "card-hover": "0 22px 48px -12px rgba(2, 132, 199, 0.2)",
        glow: "0 0 28px rgba(223, 12, 10, 0.28)",
        "sky-glow": "0 0 28px rgba(2, 132, 199, 0.35)",
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
