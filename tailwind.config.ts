import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandInk: "#21372e",
        brandPaper: "#f6f5ef",
        brandAccent: "#17634c",
        brandAccentSoft: "#e6efe8",
        brandSuccess: "#15803d",
        brandWarning: "#b45309",
        brandDanger: "#b91c1c",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
