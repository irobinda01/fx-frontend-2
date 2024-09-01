/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        ".nav-item": {
          "list-style-type": "none",
          padding: "0",
          margin: "0",
          display: "flex",
          gap: "40px",
          "padding-left": "8rem",
          "padding-right": "1rem",
        },
        ".nav-items": {
          display: "inline-block",
        },
        ".nav-a": {
          "text-decoration": "none",
          color: "#333",
          padding: "0 0.5rem",
          "font-weight": "bold",
          "font-size": "13px",
          transition: "color 0.3s, background-color 0.3s",
          "&:hover": {
            color: "#6D42AC",
            "background-color": "#E0C1D7",
            "border-radius": "4px",
            padding: "0 0.5rem",
          },
        },
        ".nav-btn": {
          padding: "2px 5px",
          "font-size": "16px",
          "font-size": "bolder",
          color: "#fff",
          background: "linear-gradient(65deg, #6D42AC, #8667E6)",
          border: "none",
          "border-radius": "5px",
          cursor: "pointer",
          transition: "background-color 0.3s, box-shadow 0.3s",
        },
        '.carousel': {
          display: 'flex',
          height: '100vh',
          width: '100%',
        },
        ".carousel-wrapper": {
          width: "100%",
          height: "100%",
          position: "relative",
        },
        ".carousel_card": {
          position: 'absolute',
          padding: "1px",
          width: "100%",
          height: "100%",
          display: 'flex',
          flex: '1',
          overflow: 'hidden',
          'object-fit': 'cover',
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center",
        },
        '.carousel_card_none': {
          display: 'none'
        },
        ".carousel-box": {
          "background-color": "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "20px",
          width: "80%",
          margin: "auto",
          "margin-top": "11.5rem",
          "border-radius": "10px",
        },
        ".carousel-btn-box": {
          display: "flex",
          gap: "10px",
          "padding-top": "1rem",
          "padding-bottom": "0.6rem",
        },
        ".carousel-btn1": {
          padding: "30px 50px",
          "font-size": "16px",
          "font-size": "bolder",
          color: "#fff",
          background: "linear-gradient(65deg, #6D42AC, #8667E6)",
          border: "2px solid black",
          "border-radius": "30px",
          cursor: "pointer",
          transition: "background-color 0.3s, box-shadow 0.3s",
        },
        ".carousel-btn2": {
          padding: "30px 50px",
          "font-size": "16px",
          "font-size": "bolder",
          color: "#fff",
          background: "black",
          border: "2px solid #fff",
          "border-radius": "30px",
          cursor: "pointer",
          transition: "background-color 0.3s, box-shadow 0.3s",
          "&:hover": {
            background: "linear-gradient(65deg, #6D42AC, #8667E6)",
            border: "2px solid black",
          },
        },
        ".left-arrow-styles": {
          position: "absolute",
          top: "50%",
          transform: "translate(0,-50%)",
          left: "32px",
          "font-size": "45px",
          color: "#fff",
          "z-index": "1",
          cursor: "pointer",
        },
        ".right-arrow-styles": {
          position: "absolute",
          top: "50%",
          transform: "translate(0,-50%)",
          right: "32px",
          "font-size": "45px",
          color: "#fff",
          "z-index": "1",
          cursor: "pointer",
        },
        ".icon-box": {
          display: "flex",
          height: "11rem",
          margin: "0 6rem",
          color: "whitesmoke",
          position: "relative",
        },
        ".vertical-1": {
          position: "absolute",
          top: "13px",
          left: "40%",
          width: "1px",
          height: "150px",
          "background-color": "whitesmoke",
        },
        ".vertical-2": {
          position: "absolute",
          top: "13px",
          left: "72%",
          width: "1px",
          height: "150px",
          "background-color": "whitesmoke",
        },
        ".icon-box h5": {
          "font-size": "0.9rem",
          "font-weight": "700",
        },
        ".icon-bar-chart": {
          "font-size": "5rem",
          transition: "color 0.3s",
        },
        ".icon-recycle": {
          "font-size": "4rem",
          "margin-left": "0.5rem",
        },
        ".icon-pencil-square": {
          "font-size": "3rem",
        },
        ".icon-box-1": {
          width: "15%",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          background: "linear-gradient(65deg, #6D42AC, #8667E6)",
        },
        ".icon-box-2": {
          width: "25%",
          padding: "2rem 1.5rem 0",
          "text-align": "center",
          color: "white",
          "font-size": "1.1rem",
          "font-weight": "500",
          background: "#1C212E",
        },
        ".icon-box-2 p": {
          margin: "0.5rem",
        },
        ".icon-box-3": {
          width: "30%",
          background: "#1C212E",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          gap: "1.3rem",
        },
        ".icon-box-4": {
          width: "30%",
          background: "#1C212E",
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
          gap: "1.3rem",
        },

        //What we do
        '.what-we-do-box': {
          margin: "0 6rem 6rem",
        },
        '.what-we-do-box h1': {
          "font-size": "2rem",
          "font-weight": "400",
          'text-align': 'center',
          margin: '3.5rem 0'
        },
        '.what-btn-box': {
          display: 'flex',
          gap: '1rem'
        },
        '.what-we-do-btn': {
          padding: "20px 40px",
          margin: '1rem 0 0',
          'font-size': '0.9rem',
          'font-weight': '500',
          color: "#fff",
          background: "linear-gradient(65deg, #6D42AC, #8667E6)",
          border: "3px solid #6C0BA9",
          "border-radius": "5px",
          cursor: "pointer",
          '&:hover': {
            background: '#6C0BA9',
          }
        },
        '.what-text-box': {
          position: 'relative',
          width: '100%',
          'place-items': 'center',
          color: theme('colors.white'),
          backgroundColor: theme('colors.white')
        },
        '.what-text-box::before': {
          content: '""',
          position: 'absolute',
          inset: '0',
          'background-image': "url('/background/chart.jpg')",
          opacity: '0.1'
        },
        '.what-text-content': {
          color: theme('colors.black'),
          isolation: 'isolate',
          'font-size': '2rem',
          'font-weight': '400',
          width: '70%',
        }
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
