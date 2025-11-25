module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
    extend: {
      colors: {
        bglight: "#F0F4F8", // Light blue-ish gray
        bgdark: "#0F172A", // Slate 900

        // Primary Blue Palette
        primary: "#3B82F6", // Blue 500
        primarydark: "#1D4ED8", // Blue 700
        primarylight: "#60A5FA", // Blue 400

        // Legacy mappings for compatibility (mapped to blue)
        marrslight: "#60A5FA",
        marrsgreen: "#3B82F6",
        marrsdark: "#1D4ED8",

        cardlight: "#FFFFFF",
        carddark: "#1E293B", // Slate 800

        carrilight: "#60A5FA",
        carrigreen: "#3B82F6",
        carridark: "#1D4ED8",

        textlight: "#F0F4F8",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
