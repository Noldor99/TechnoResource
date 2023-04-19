import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { ColorModeContext, useMode } from './theme'
import { createTheme, CssBaseline, darkScrollbar, GlobalStyles, ThemeProvider } from '@mui/material'

import Layout from './components/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './pages/Admin'
import LoginForm from './pages/auth/Login'
import Register from './pages/auth/Register'
import Reset from './pages/auth/Reset'
import ProductDetails from './components/product/ProductDetails'
import Cart from './pages/Cart'
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { BASE_URL } from './URL'
import BackgroundGradient from './components/BackgroundGradient'
import Contact from './pages/Contact'
import MyOrders from './pages/MyOrders'
import Likes from './pages/Likes'






function App() {
  const [theme, colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>


          <ToastContainer />
          <BackgroundGradient />

          <div className="App">
            <Routes>
              <Route path={BASE_URL} element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="register" element={<Register />} />
                <Route path="reset" element={<Reset />} />
                <Route path="card" element={<Cart />} />
                <Route path="product-details/:id" element={<ProductDetails />} />
                <Route path="likes" element={<Likes />} />
                <Route path="myOrders" element={<MyOrders />} />
                <Route path="contact" element={<Contact />} />


                {/* <AdminOnlyRoute> */}
                <Route path="admin/*" element={<Admin />} />
                {/* </AdminOnlyRoute> */}

              </Route>
            </Routes>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
