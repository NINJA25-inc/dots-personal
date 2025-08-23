'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    secondary: {
      main: '#0066CC',
      light: '#3399FF',
      dark: '#003D7A',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    text: {
      primary: '#1D1D1F',
      secondary: '#6E6E73',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: '56px',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      '@media (max-width:900px)': {
        fontSize: '40px',
      },
    },
    h2: {
      fontSize: '48px',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      '@media (max-width:900px)': {
        fontSize: '32px',
      },
    },
    h3: {
      fontSize: '32px',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      '@media (max-width:900px)': {
        fontSize: '24px',
      },
    },
    h4: {
      fontSize: '24px',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '17px',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '15px',
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontSize: '17px',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '980px',
          padding: '12px 24px',
          fontSize: '17px',
          fontWeight: 400,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.02)',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          borderRadius: '18px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(251, 251, 253, 0.8)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

export default theme;