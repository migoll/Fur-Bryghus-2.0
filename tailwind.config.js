/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
  ],
  theme: {
    extend: {
      colors: {
        "fur-blue": "#1c3d5a",
        "fur-accent-blue": "#3b82f6",
        "fur-brown": "#704214",
        "fur-light": "#f2f2f2",
        "fur-dark": "#121212",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ['"Playfair Display"', "serif"],
      },
      fontSize: {
        h1: ["64px", { lineHeight: "1", letterSpacing: "-0.02em" }],
        h2: ["48px", { lineHeight: "1", letterSpacing: "-0.01em" }],
        h3: ["36px", { lineHeight: "1", letterSpacing: "-0.01em" }],
        h4: ["28px", { lineHeight: "1.2" }],
        body: ["18px", { lineHeight: "1.6" }],
        small: ["14px", { lineHeight: "1.6" }],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
