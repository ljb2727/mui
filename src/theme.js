import { createTheme } from '@mui/material/styles';
import { orange, green, pink } from '@mui/material/colors';
const theme = createTheme({
  base: {
    primary: green[500],
  },
  status: {
    danger: orange[500],
  },
});

export default theme;
