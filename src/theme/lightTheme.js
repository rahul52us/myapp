import { colors, createTheme, responsiveFontSizes } from '@mui/material';

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.blue[300],
      darker: '#053e85',
      textColor: '#6b7385',
      blackColor:'#00000',
      whiteColor:'#ffff',
      backgroundColor: 'rgb(247, 249, 252)',
      buttonColor: '#0d6efd',
      borderColor: '#ffffff',
      backgroundLightDarkColor: 'rgb(229, 246, 253)',
      backgroundNoteLightColor: 'rgb(229, 246, 253)',
    },
    // Add additional colors here
    secondary: {
      main: colors.orange[500],
      darker: '#a23b08',
      textColor: '#000000',
      backgroundColor: 'rgb(255, 222, 173)',
      borderColor: '#ffffff',
      backgroundLightDarkColor: 'rgb(255, 222, 173)',
      backgroundNoteLightColor: 'rgb(255, 222, 173)',
    },
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export default lightTheme;
