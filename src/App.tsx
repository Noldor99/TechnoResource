import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import Layout from './components/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './pages/Admin'
import LoginForm from './pages/auth/Login'
import Register from './pages/auth/Register'
import Reset from './pages/auth/Reset'




function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <ToastContainer />

          <Routes>

            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<Register />} />
            <Route path="reset" element={<Reset />} />
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />


              {/* <AdminOnlyRoute> */}
              <Route path="/admin/*" element={<Admin />} />
              {/* </AdminOnlyRoute> */}

            </Route>
          </Routes>

        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
