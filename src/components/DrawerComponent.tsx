import { Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { selectIsOpenMenu, SWITCH_MENU } from '../store/slice/menuSwitch';
import { useAppSelector } from '../hook';
import { navMenuUser } from '../common/moks/navigate';
import ListItemButtonStyled from './styleComponents/ListItemButtonStyled';
import { useNavigate } from 'react-router-dom';
import DrawerThema from './styleComponents/DrawerThema';
import { AdminPanelSettingsOutlined, LogoutOutlined } from '@mui/icons-material';
import { ShowOnLogout, ShowOnLogin } from '../hook/useHiddenLink';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useLogoutUser } from '../hook/useAuth';
import SearchBarComponent from './SearchBarComponent';
//@ts-ignore
import Logo from '../assets/images/sidebar/logo.svg'

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}


const DrawerComponent = (props: Props) => {
  const { window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isOpenMenu = useAppSelector(selectIsOpenMenu)

  const { logout } = useLogoutUser()

  const renderNavMenu = navMenuUser.map((element): JSX.Element => {
    return (
      <ListItem key={element.id}>
        <ListItemButtonStyled onClick={() => navigate(`${element.path}`)}>
          <ListItemIcon>{element.icon}</ListItemIcon>
          <ListItemText>
            <Typography variant="body1">{element.name}</Typography>
          </ListItemText>
        </ListItemButtonStyled>
      </ListItem>
    )
  })

  const drawer = (
    <div>
      <List>
        <ListItem>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={Logo} alt="Logo" />
            <Typography variant="h1">
              Demo
            </Typography>
          </Box>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <SearchBarComponent />
        </ListItem>
      </List>
      <List>
        {renderNavMenu}
      </List>
      <Divider />
      <List>
        <ShowOnLogout>
          <ListItem>
            <ListItemButtonStyled onClick={() => navigate('/login')}>
              <ListItemIcon>
                <LockOpenIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>Login</Typography>
              </ListItemText>
            </ListItemButtonStyled>
          </ListItem>
        </ShowOnLogout>
        <ListItem>
          <ListItemButtonStyled onClick={() => navigate('admin')}>
            <ListItemIcon>
              <AdminPanelSettingsOutlined />
            </ListItemIcon>
            <ListItemText>
              <Typography>Admin</Typography>
            </ListItemText>
          </ListItemButtonStyled>
        </ListItem>
        <ShowOnLogin>
          <ListItem>
            <ListItemButtonStyled onClick={logout}>
              <ListItemIcon>
                <LogoutOutlined />
              </ListItemIcon>
              <ListItemText>
                <Typography>Logout</Typography>
              </ListItemText>
            </ListItemButtonStyled>
          </ListItem>
        </ShowOnLogin>
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <DrawerThema
        container={container}
        variant="temporary"
        open={isOpenMenu}
        onClose={() => dispatch(SWITCH_MENU({}))}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </DrawerThema>
    </Box>
  )
}

export default DrawerComponent