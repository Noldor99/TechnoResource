import React, { FC, useEffect, useState } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import { Box, Toolbar, useMediaQuery } from '@mui/material'
import Header from './Header'
import DrawerComponent from './DrawerComponent'




const Layout: FC = (): JSX.Element => {
  const location = useLocation()

  return location.pathname.startsWith('/admin') ||
    location.pathname === '/register' ? (
    <>
      <Outlet />
    </>
  ) : (
    <Box>
      <Box>
        <Header />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <DrawerComponent />
          <Toolbar />
          <Outlet />

        </Box>
      </Box>
    </Box>
  )
}

export default Layout
