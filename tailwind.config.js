module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        18.25: '4.5rem',
        23: '5.75rem',
      },
      screens: {
        '3xl': '1350px',
        '3.5xl': '1536px',
        '4xl': '1744px',
        '5xl': '1900px',
        '6xl': '1920px',
      },
      animation: {
        rays: 'rays 0.95s ease  infinite both',
        'pulsate-bck': 'pulsate-bck 1s ease  infinite both',
        'rotate-scale-up': 'rotate-scale-up 5s linear   both',
        spinRight: 'spinRight 20s linear infinite',
        spinLeft: 'spinLeft 20s linear infinite',
        'focus-in-expand':
          'focus-in-expand 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-out-elliptic-top-fwd':
          'slide-out-elliptic-top-fwd 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'puff-in-center':
          'puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715)   both',
        'text-focus-in':
          'text-focus-in 0.35s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'jello-horizontal': 'jello-horizontal 0.8s ease   both',
        'fade-in': 'fade-in 1s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
        'fade-in2':
          'fade-in2 1s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
        'tracking-in-expand':
          'tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both',
        'bounce-in-top': 'bounce-in-top   1.2s ease-in both',
        'bounce-out-top': 'bounce-out-top 1.5s ease both',
        'slit-in-vertical': 'slit-in-vertical 0.45s ease   both',
        'slide-in-elliptic-top-fwd':
          'slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
      },
      keyframes: {
        rays: {
          '0%': {
            transform: 'scale(.2)',
            opacity: '.8',
          },
          '80%': {
            transform: 'scale(1.2)',
            opacity: '0',
          },
          to: {
            transform: 'scale(2.2)',
            opacity: '0',
          },
        },
        'pulsate-bck': {
          '0%,to': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(.9)',
          },
        },
        'rotate-scale-up': {
          '0%': {
            transform: 'scale(1) rotateZ(0)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.5) rotateZ(180deg)',
          },
          to: {
            transform: 'scale(1) rotateZ(360deg)',
            opacity: '1',
          },
        },
        spinRight: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        spinLeft: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(-360deg)',
          },
        },

        'focus-in-expand': {
          '0%': {
            'letter-spacing': '-.5em',
            filter: 'blur(12px)',
            opacity: '0',
          },
          to: {
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'slide-out-elliptic-top-fwd': {
          '0%': {
            transform: 'translateY(0) rotateX(0) scale(1)',
            'transform-origin': '50% -500px',
            opacity: '1',
          },
          to: {
            transform: 'translateY(-600px) rotateX(20deg) scale(6)',
            'transform-origin': '50% 200%',
            opacity: '0',
          },
        },
        'puff-in-center': {
          '0%': {
            transform: 'scale(2)',
            filter: 'blur(2px)',
            opacity: '0',
          },
          to: {
            transform: 'scale(1)',
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'text-focus-in': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          to: {
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        'fade-in2': {
          '0%': {
            opacity: '0',
          },
          to: {
            opacity: '0.9',
          },
        },
        'tracking-in-expand': {
          '0%': {
            'letter-spacing': '-.5em',
            opacity: '0',
          },
          '40%': {
            opacity: '.6',
          },
          to: {
            opacity: '1',
          },
        },
        'jello-horizontal': {
          '0%,to': {
            transform: 'scale3d(1, 1, 1)',
          },
          '30%': {
            transform: 'scale3d(1.25, .75, 1)',
          },
          '40%': {
            transform: 'scale3d(.75, 1.25, 1)',
          },
          '50%': {
            transform: 'scale3d(1.15, .85, 1)',
          },
          '65%': {
            transform: 'scale3d(.95, 1.05, 1)',
          },
          '75%': {
            transform: 'scale3d(1.05, .95, 1)',
          },
        },
        'slit-in-vertical': {
          '0%': {
            transform: 'translateZ(-800px) rotateY(90deg)',
            opacity: '0',
          },
          '54%': {
            transform: 'translateZ(-160px) rotateY(87deg)',
            opacity: '1',
          },
          to: {
            transform: 'translateZ(0) rotateY(0)',
          },
        },
        'slide-in-elliptic-top-fwd': {
          '0%': {
            transform: 'translateY(-600px) rotateX(-30deg) scale(0)',
            'transform-origin': '50% 100%',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0) rotateX(0) scale(1)',
            'transform-origin': '50% 1400px',
            opacity: '1',
          },
        },
        'bounce-in-top': {
          '0%': {
            transform: 'translateY(-500px)',
            'animation-timing-function': 'ease-in',
            opacity: '0',
          },
          '38%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out',
            opacity: '1',
          },
          '55%': {
            transform: 'translateY(-65px)',
            'animation-timing-function': 'ease-in',
          },
          '72%,90%,to': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out',
          },
          '81%': {
            transform: 'translateY(-28px)',
          },
          '95%': {
            transform: 'translateY(-8px)',
            'animation-timing-function': 'ease-in',
          },
        },
        'bounce-out-top': {
          '0%,15%,38%,70%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out',
          },
          '5%': {
            transform: 'translateY(-30px)',
            'animation-timing-function': 'ease-in',
          },
          '25%': {
            transform: 'translateY(-38px)',
            'animation-timing-function': 'ease-in',
          },
          '52%': {
            transform: 'translateY(-75px)',
            'animation-timing-function': 'ease-in',
          },
          '85%': {
            opacity: '1',
          },
          to: {
            transform: 'translateY(-800px)',
            opacity: '0',
          },
        },
      },
      colors: {
        mdGray: '#A8A3A3',
        purple: '#534571',
        lightBrown: '#C3B6B2',
        yellow: '#FBD560',
        lightYellow: '#E5E5E5',
        darkGreen: '#345161',
        brown: '#7B5A5A',
        black: '#272727',
        red: '#EB5757',
        redSm: '#e98282c7',
        contentWhite: '#FBFBFB',
        darkGray: '#333333',
        darkBlue: '#143B52',
        lightGray: '#C4C4C4',
        goodGray: '#444444',
        glassBlue: '#042639',
        blue: '#3A7DA3',
        mediumBlue: '#2F80ED',
        gray: '#A8A3A3',
        green: '#53C02C',
        charcoal: '#333333',
        solidBlue: '#3B5495',
        medBlue: '#345161',
      },
      fontFamily: {
        'BPG-Arial': ['BPG Arial'],
        'BPG-Nino-Mtavruli': ['BPG Nino Mtavruli'],
      },
      dropShadow: {
        '3xl': [
          '0 5px 3px rgba(0, 0, 0, 0.45)',
          '0 11px 5px rgba(0, 0, 0, 0.15)',
        ],
        '4xl': [
          '0 8px 3px rgba(0, 0, 0, 0.45)',
          '0 11px 5px rgba(0, 0, 0, 0.15)',
        ],
        '5xl': [
          '3px 5px 3px rgba(0, 0, 0, 0.45)',
          '3px 7px 5px rgba(0, 0, 0, 0.15)',
        ],
      },
      boxShadow: {
        '3xl': '2px 4px 14px rgba(0, 0, 0, 0.2)',
        '4xl': 'inset 4px 4px 20px #4D4D4D',
        '4.5xl': '4px 4px 20px #4D4D4D',
        '4.7xl': '4px 4px 25px #4D4D4D',
        '5xl': '2px 8px 14px rgba(0, 0, 0, 0.8)',
        '5.5xl': '5px 5px 13px 7px rgba(0, 0, 0, 0.43)',
      },
    },
  },
  plugins: [],
}
