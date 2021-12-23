import { createTheme } from '@mui/material/styles';
import { orange, green } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: '#91C788 ',
      light: ' #DDFFBC',
      dark: '#52734D',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1687A7 ',
      light: '#D3E0EA',
      dark: '#276678',
      contrastText: '#333',
    },
    error: {
      main: '#DD4A48',
      contrastText: '#333',
    },
    info: {
      main: '#4F091D',
      contrastText: '#333',
    },
    text: {
      primary: '#000',
      secondary: '#333',
      white: '#fff',
    },
  },
  base: {
    primary: green[500],
  },
  status: {
    danger: orange[500],
  },
});

theme = createTheme(theme, {
  components: {
    MuiCardContent: {
      variants: [
        {
          props: { variant: 'driving' },
          style: {
            minHeight: '30vw',
            backgroundSize: '100% 100%',
            color: '#fff',
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'dashed' },
          style: {
            border: `2px dashed ${theme.status.danger}`,
          },
        },
      ],
    },
  },
});

export default theme;
