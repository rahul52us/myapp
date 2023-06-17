import { createTheme, responsiveFontSizes } from '@mui/material';

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#252b3b',
      darker: '#053e85',
      textColor: '#ffffff',
      backgroundColor: '#1d222e',
      borderColor: '#121212',
      backgroundLightDarkColor: 'rgb(229, 246, 253)',
      backgroundNoteLightColor: '#000000',
    },
    // Add additional colors here
    secondary: {
      main: '#9c27b0',
      darker: '#6a0080',
      textColor: '#ffffff',
      backgroundColor: '#673ab7',
      borderColor: '#121212',
      backgroundLightDarkColor: 'rgb(229, 246, 253)',
      backgroundNoteLightColor: '#000000',
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default darkTheme;
