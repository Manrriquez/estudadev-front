// import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { useSelector } from 'react-redux';
import MyRoutes from './config/routes/index'
import themes from '../src/themes'
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import NavigationScroll from './config/routes/NavigationScroll';


function App() {

  const customization = useSelector((state) => state.customization);


  return (
    <StyledEngineProvider injectFirst>
       <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <NavigationScroll>
              <MyRoutes />
          </NavigationScroll>
        </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
