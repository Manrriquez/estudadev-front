
import { green, orange, purple } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles'


const ThemeGlobal = createTheme({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
            light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
    },
    text: {
        primary: purple[200],
        secondary: purple[200],
        disabled: purple[200],
        hint: purple[200],
    },
    typography: {
        subtitle1: {
          fontSize: 20,
          color: purple[600],
        },
        body1: {
          fontWeight: 500,
        },
        button: {
          fontStyle: 'italic',
        },
    },
});


export default ThemeGlobal;
