// styles/theme.js
// import { base } from '@theme-ui/presets';

const theme = {
  colors: {
    primary: ' #F7E7CE',
    secondary: '#e5771f',
    tertiary: '#ffebb3',
    quaternary: '#5a3e2b',
    quinary: '#76c7ad',
  },
  fonts: {
    body: 'inherit',
    heading: "'Monoton', cursive",
  },
  fontSizes: ['1.4rem', '1.8rem', '2.4rem', '3.2rem', '8rem'],
  fontWeights: {
    body: 400,
    heading: 700,
  },
  spacing: ['0.8rem', '1.2rem', '2.4rem', '3.2rem', '4rem'],
  radii: {
    default: '10rem',
  },
  text: {
    heading1: {
      textAlign: 'center',
      backgroundColor: 'primary',
      fontFamily: 'heading',
      fontSize: [null, null, null, null, '8rem'],
      textTransform: 'uppercase',
      fontWeight: 'heading',
      wordSpacing: '30px',
      letterSpacing: '-5px',
      padding: ['2.4rem 0', null, null, null, '2.4rem 0'],
    },
  },
  buttons: {
    primary: {
      backgroundColor: 'quinary',
      color: 'quaternary',
      fontFamily: 'inherit',
      border: 'none',
      borderRadius: 'default',
      padding: ['1.2rem 3.2rem', null, null, null, '1.2rem 3.2rem'],
      fontWeight: 'heading',
      fontSize: ['1.8rem', null, null, null, '1.8rem'],
      cursor: 'pointer',
      textTransform: 'uppercase',
    },
  },
};

export default theme;
