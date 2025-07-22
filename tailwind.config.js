/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        sans: ["Inter", "sans-serif"], // Define Inter como fonte padrão
      },
      maxWidth: {
        medium: "24rem", // 384px
      },
      colors: {
        primary: "var(--color-primary)", // #1b5fff
        secondary: "var(--color-secondary)", // #fe7a1b
        tertiary: "var(--color-tertiary)", // #d1dfff
        title: "var(--color-title)", // #111827
        text: "var(--color-text)", // #79767d
        background: "var(--color-background)", // #fff
        feedback: {
          error: "var(--color-feedback-error)", // #f87171
          success: "var(--color-feedback-success)", // #84cc16
          warning: "var(--color-feedback-warning)", // #facc15
        },
      },
    },
  },
  plugins: [],
};
