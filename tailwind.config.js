/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,ts,css,html}'],
  theme: {

    screens: {
      sm: '540px',
      md: '768px',
      lg: '976px',
      xl: '1300px',
      xxl: '2000px',
    },
    backgroundImage: {
      Nav: "url('./Images/Nav.png')",
      D3BG: "url('./Images/SkillFrame3DBG.png')",
      CodingBG: "url('./Images/SkillFrameCodingBG.png')",
      AboutMeTextBG: "url('./Images/AboutMeTextBG.jpg')",
      AboutMeBG: "url('./Images/AboutMeBG.jpg')",
      AboutMeMobileBG: "url('./Images/AboutMeMobileBG.jpg')",
      BGFrameTop: "url('./Images/BGFrameTop.png')",
      BGFrameBot: "url('./Images/BGFrameBot.png')",
      SkillsBG: "url('./Images/SkillsBG.jpg')",
      ToolsBG: "url('./Images/ToolsBG.png')",
      SkillsTitleBG: "url('./Images/SkillsTitleBG.png')",
      SkillsDesignBG1: "url('./Images/SkillsImg/Design1.png')",
      SkillsDesignBG2: "url('./Images/SkillsImg/Design2.png')",
      SkillsDesignBG3: "url('./Images/SkillsImg/Design3.png')",
      SkillsDesignBG: "url('./Images/SkillsImg/SkillsMiniFrame.png')",
    },
    fontFamily: {
      Iceland: ['Iceland', 'Helvetica', 'Arial', 'sans-serif'],
      Oxanium: ['Oxanium', 'Helvetica', 'Arial', 'sans-serif'],
      Namita: ['Namita', 'Helvetica', 'Arial', 'sans-serif'],
      Mysteria: ['Mysteria', 'Helvetica', 'Arial', 'sans-serif'],
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
