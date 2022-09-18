module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: "#212121",
      white: "#ffffff",
      red: "#b84339",
      green: "#50b839",
      blue: "#39adb8",
      purple: "#7b39b8",
    },
    fontFamily: {
      sans: ["Calibri", "sans-serif"],
      serif: ["Calibri", "serif"],
      roboto: ["Roboto Mono", "serif"],
    },
    extend: {
      backgroundImage: {
        "home-video": "url('./assets/homepagevideo.mp4')",
        "tye-logo": "url('./assets/logo.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        256: "256px",
      },
      spacing: {
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        25: "25px",
        50: "50px",
        100: "100px",
        400: "400px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
