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
        fur: {
          blue: "#132A3B",
          brown: "#594435",
        },
        "fur-accent": {
          blue: "#0F1931",
          bone: "#FAF7F0",
          beige: "#E2D4BB",
          beer: "#C89768",
        },
        neutral: {
          1: "#060606",
          2: "#595959",
          3: "#A6A6A6",
          4: "#D4D4D4",
          5: "#F2F2F2",
          6: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        anton: ["Anton", "sans-serif"],
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
