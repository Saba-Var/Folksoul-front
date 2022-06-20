module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#534571',
        lightBrown: '#C3B6B2',
        yellow: '#FBD560',
        darkGreen: '#345161',
        black: '#272727',
        red: '#EB5757',
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
    },
  },
  plugins: [],
}
