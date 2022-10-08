/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,ts,css,html}'],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    backgroundImage: {
      Nav: "url('./Images/Nav.png')",
      D3BG: "url('./Images/SkillFrame3DBG.png')",
      CodingBG: "url('./Images/SkillFrameCodingBG.png')",
    },
    fontFamily: {
      Namita: ['Namita', 'Helvetica', 'Arial', 'sans-serif'],
      Momo: ['Momo', 'Helvetica', 'Arial', 'sans-serif'],
      MandatoryPlaything: ['MandatoryPlaything', 'Helvetica', 'Arial', 'sans-serif'],
      Raskhal: ['Raskhal', 'Helvetica', 'Arial', 'sans-serif'],
      CabinCondensed: ['CabinCondensed', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      brightRed: 'hsl(12, 88%, 59%)',
      brightRedLight: 'hsl(12, 88%, 69%)',
      brightRedSupLight: 'hsl(12, 88%, 95%)',
      darkBlue: 'hsl(228, 39%, 23%)',
      darkGrayishBlue: 'hsl(227, 12%, 61%)',
      veryDarkBlue: 'hsl(233, 12%, 13%)',
      veryPaleRed: 'hsl(13, 100%, 96%)',
      veryLightGray: 'hsl(0, 0%, 98%)',
      
    },
  },
  plugins: [],
};
