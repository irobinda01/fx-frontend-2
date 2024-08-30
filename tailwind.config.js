/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }){
      const newUtilities = {
        '.nav-item': {
          'list-style-type': 'none',
          padding: '0',
          margin: '0',
          display: 'flex',
          gap: '40px',
          'padding-left': '8rem',
          'padding-right': '1rem',
        },
        '.nav-items': {
          display: 'inline-block',
        },
        '.nav-a': {
          'text-decoration': 'none',
          color: '#333', 
          padding: '0 0.5rem', 
          'font-weight': 'bold',
          'font-size': '13px',
          transition: 'color 0.3s, background-color 0.3s',
          '&:hover': {
            color: '#6D42AC',
            'background-color': '#E0C1D7',
            'border-radius': '4px',
            padding: '0 0.5rem'
          }
        },
        '.nav-btn': {
          padding: '2px 5px',
          'font-size': '16px',
          'font-size': 'bolder',
          color: '#fff',
          background: 'linear-gradient(65deg, #6D42AC, #8667E6)',
          border: 'none',
          'border-radius': '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s, box-shadow 0.3s',
        },
        '.background-img': {
          padding: '1px',
          width: '100%',
          height: '100vh',
          //'background-image': "url('/src/assets/background/back-img1.jpg')",
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          'background-position': 'center',
        },
        '.background-box': {
          'background-color': 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          padding: '20px',
          width: '80%',
          margin: 'auto',
          'margin-top': '11.5rem',
          'border-radius': '10px',
        },
        '.background-btn-box': {
          display: 'flex',
          gap: '10px',
          'padding-top': '1rem',
          'padding-bottom': '0.6rem'
        },
        '.background-btn1': {
          padding: '30px 50px',
          'font-size': '16px',
          'font-size': 'bolder',
          color: '#fff',
          background: 'linear-gradient(65deg, #6D42AC, #8667E6)',
          border: '2px solid black',
          'border-radius': '30px',
          cursor: 'pointer',
          transition: 'background-color 0.3s, box-shadow 0.3s',
        },
        '.background-btn2': {
          padding: '30px 50px',
          'font-size': '16px',
          'font-size': 'bolder',
          color: '#fff',
          background: 'black',
          border: '2px solid #fff',
          'border-radius': '30px',
          cursor: 'pointer',
          transition: 'background-color 0.3s, box-shadow 0.3s',
          '&:hover': {
            background: 'linear-gradient(65deg, #6D42AC, #8667E6)',
            border: '2px solid black'
          }
        },
        '.slider-box': {
          width: '100%',
          height: '100vh',
          position: 'relative'
        },
        '.left-arrow-styles': {
          position: 'absolute',
          top: '50%',
          transform: 'translate(0,-50%)',
          left: '32px',
          'font-size': '45px',
          color: '#fff',
          'z-index': '1',
          cursor: 'pointer'
        },
        '.right-arrow-styles': {
          position: 'absolute',
          top: '50%',
          transform: 'translate(0,-50%)',
          right: '32px',
          'font-size': '45px',
          color: '#fff',
          'z-index': '1',
          cursor: 'pointer'
        }
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}

