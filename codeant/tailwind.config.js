/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'custom1' : '0px 0px 24px 0px rgba(8, 23, 53, 0.16)',
      },
      screens: {
        vs : "426px",
        bs : "805px",
        sbs : "515px",
        ssm: "340px"
      },
      fontFamily: {
        'inter': ['interthin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}