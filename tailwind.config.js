/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
  ],
  safelist: ["h1", "h2", "h3", "h4", "h5", "h6"],
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
        h1: ["3rem", { lineHeight: "1" }],
        "h1-md": ["9rem", { lineHeight: "1" }],

        h2: ["2rem", { lineHeight: "1", letterSpacing: "0.07rem" }],
        "h2-md": ["4rem", { lineHeight: "1", letterSpacing: "0.07rem" }],

        h3: ["2rem", { lineHeight: "1", letterSpacing: "0.07rem" }],
        "h3-md": ["2.5rem", { lineHeight: "1", letterSpacing: "0.07rem" }],

        "p-small": ["1rem", { lineHeight: "1.5" }],

        "p-medium": ["1.25rem", { lineHeight: "1.5" }],

        "p-medium-md": ["1.875rem", { lineHeight: "1.5" }],

        "p-big": ["1.875rem", { lineHeight: "1.5" }],

        "p-big-md": ["6rem", { lineHeight: "1.5" }],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1400px",
      },
      backgroundImage: {
        "wood-texture": "url('@/assets/images/morkTrae.png')",
      },
    },
  },
  plugins: [],
};
