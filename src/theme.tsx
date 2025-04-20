import { createTheme } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C2C2E',        // Deep Charcoal
      light: '#3A3A3C',
      dark: '#1C1C1E',
      contrastText: '#FFFFFF' // White text for buttons/headings
    },
    secondary: {
      main: '#D4AF37',        // Soft Gold
      light: '#E6C463',
      dark: '#A4882A',
      contrastText: '#1C1C1C' // For gold buttons/text
    },
    background: {
      default: '#F8F8F8',     // Light Gray for clean canvas
      paper: '#FFFFFF',       // Pure white for cards/containers
    },
    text: {
      primary: '#1C1C1C',     // Dark text for high contrast
      secondary: '#666666',   // Softer gray for descriptions
    },
  },
  typography: {
    fontFamily: 'Outfit, Arial, sans-serif',
  },
});

export default theme;
