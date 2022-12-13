import { createTheme } from '@mui/material/styles'


const ThemeGlobal = createTheme({
    palette: {
        primary: {
          main: '#F42829',
          light: '#ff7071',
          contrastText: '#fff',
        },
        secondary: {
          main: '#0B132A',
          contrastText: '#fff',
        },
        teste: {
          main: '#FFFFFF',
        },
    },
    typography: {
        subtitle1: {
          fontSize: 'clamp(20px, 3vw, 22px)',
          color: '#34303E',
          fontWeight: 500,
          textDecoration: 'none',
        },
        body1: {
          fontWeight: 500,
        },
        button: {
          border: 'none',
        },
    },
});


export default ThemeGlobal;
