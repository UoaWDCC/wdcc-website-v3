/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "365px",
      sm: "555px",
      md: "745px",
      lg: "935px",
      xl: "1125px",
    },
    extend: {
      maxWidth: {
        xs: "365px",
        sm: "555px",
        md: "745px",
        lg: "935px",
        xl: "1125px",
      },
      colors: {
        lightBlue: "#c3f4ff",
        blue: "#087df1",
        darkGrey: "#2C2C2C",
      },
      fontSize: {
        "7xl": ["72px", "120%"],
      },
    },
  },
  plugins: [],
};
