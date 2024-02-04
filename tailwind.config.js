/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        shree: "#840808",
        shree_txt: "#FFC208",
        aastha: "#2F3D19",
        aastha_txt: "#FBECD3",
        isha: "#42ABE9",
        isha_txt: "#FFFBF4",
        mann: "#E97C7C",
        mann_txt: "#F6D3B4",
      },
      screens: {
        xxs: "320px",
        xs: "380px",
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
