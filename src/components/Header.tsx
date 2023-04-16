import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { SWITCH_MENU } from '../store/slice/menuSwitch';
import AppBarThema from './styleComponents/AppBarThema';
import ThemeSwitcher from './ThemeSwitcher';
import { useInitAuthSlice, useLogoutUser } from '../hook/useAuth';
import { Button } from '@mui/material';
import { navMenuUser } from '../common/moks/navigate';
import { ShowOnDesktop, ShowOnMobile } from '../hook/useMenuDisply';
import { useNavigate } from 'react-router-dom';
import ButtonNavThema from './styleComponents/ButtonNavThema';
import { ShowOnLogin, ShowOnLogout } from '../hook/useHiddenLink';
//@ts-ignore
import Logo from '../assets/images/sidebar/logo.svg'

function ResponsiveDrawer() {

  const dispatch = useDispatch()

  const { displayName } = useInitAuthSlice()
  const { logout } = useLogoutUser()
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarThema
        position="fixed"
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <ShowOnMobile>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => { dispatch(SWITCH_MENU({})) }}
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </ShowOnMobile>
          <ShowOnDesktop>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={Logo} alt="Logo" />
              <Typography variant="h1">
                Demo
              </Typography>
            </Box>
          </ShowOnDesktop>
          <ShowOnDesktop>
            <ShowOnLogin>
              <Typography>{displayName}</Typography>
            </ShowOnLogin>
            <Button variant='outlined' color="success"
              onClick={() => navigate('admin')}>
              Admin
            </Button>
            <ShowOnLogout>
              <Button variant='outlined' color="success"
                onClick={() => navigate('/login')}>
                Login
              </Button>
            </ShowOnLogout>
            <ShowOnLogin>
              <Button variant='outlined' color="success"
                onClick={() => logout()}>
                Logout
              </Button>
            </ShowOnLogin>
          </ShowOnDesktop>
          <ShowOnDesktop>
            <Box  >
              {navMenuUser.map((item) => (
                <ButtonNavThema key={item.id}
                  onClick={() => navigate(`${item.path}`)}>
                  {item.name}
                </ButtonNavThema>
              ))}
            </Box>
          </ShowOnDesktop>
          <ThemeSwitcher />
        </Toolbar>
      </AppBarThema>

    </Box>
  );
}


export default ResponsiveDrawer;
