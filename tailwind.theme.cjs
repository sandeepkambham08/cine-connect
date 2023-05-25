const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        }
      },
      colors: {
        base: colors.slate[100],
        contrast: colors.slate[800],
        danger: { container: colors.rose[200], DEFAULT: colors.rose[500] },
        muted: colors.zinc[400],
        primary: { container: colors.red[400], DEFAULT: colors.sky[500] },
        surface: colors.slate[200],
        on: {
          base: colors.slate[900],
          contrast: colors.slate[100],
          danger: { container: colors.rose[600], DEFAULT: colors.rose[50] },
          muted: colors.zinc[50],
          primary: { container: colors.sky[700], DEFAULT: colors.sky[50] },
          surface: colors.slate[800]
        }
      },
      fontSize: {
        '2xs': '.5em'
      },
      screens: {
        xs: '420px'
      }
    }
  }
};
