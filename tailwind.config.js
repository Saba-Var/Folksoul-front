module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        18.25: '4.5rem',
      },
      animation: {
        'bounce-in-top': 'bounce-in-top   1.2s ease-in both',
        'bounce-out-top': 'bounce-out-top 1.5s ease   both',
      },
      keyframes: {
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
        purple: '#534571',
        lightBrown: '#C3B6B2',
        yellow: '#FBD560',
        darkGreen: '#345161',
        black: '#272727',
        red: '#EB5757',
        contentWhite: '#FBFBFB',
        darkGray: '#333333',
        darkBlue: '#143B52',
        lightGray: '#C4C4C4',
        goodGray: '#444444',
        glassBlue: '#042639',
      },
      fontFamily: {
        'BPG-Arial': ['BPG Arial'],
        'BPG-Nino-Mtavruli': ['BPG Nino Mtavruli'],
      },
      dropShadow: {
        '4xl': [
          '0 8px 3px rgba(0, 0, 0, 0.45)',
          '0 11px 5px rgba(0, 0, 0, 0.15)',
        ],
      },
      boxShadow: {
        '4xl': 'inset 4px 4px 20px #4D4D4D',
        '5xl': '5px 5px 13px rgba(0, 0, 0, 0.63)',
        '5.5xl': '5px 5px 13px 7px rgba(0, 0, 0, 0.43)',
      },
    },
  },
  plugins: [],
}
