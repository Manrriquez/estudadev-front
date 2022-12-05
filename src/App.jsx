import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import MyRoutes from './_config/routes'
import ThemeGlobal from './_config/ThemeGlobal'



function App() {

  return (
    <ThemeProvider theme={ThemeGlobal}>
      <CssBaseline />
      <MyRoutes />
    </ThemeProvider>
  )
}

export default App
