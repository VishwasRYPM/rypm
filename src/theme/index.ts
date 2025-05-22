import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a2c42', // Dark blue from header
    },
    secondary: {
      main: '#4caf50', // Green for verified badge
    },
    background: {
      default: '#FFF',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: '#e74c3c',
          color: 'white',
        },
      },
    },
  },
});

export default theme;