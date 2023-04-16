import { AdminPanelSettingsOutlined, LogoutOutlined } from '@mui/icons-material';
import { Toolbar, Divider, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { navMenuAdmin, navMenuUser } from '../../../common/moks/navigate';
import { useAppSelector } from '../../../hook';
import { useLogoutUser } from '../../../hook/useAuth';
import { ShowOnLogout, ShowOnLogin } from '../../../hook/useHiddenLink';
import { selectIsOpenMenu, SWITCH_MENU } from '../../../store/slice/menuSwitch';
import SearchBarComponent from '../../SearchBarComponent';
import DrawerThema from '../../styleComponents/DrawerThema';
import ListItemButtonStyled from '../../styleComponents/ListItemButtonStyled';
import LockOpenIcon from '@mui/icons-material/LockOpen';
//@ts-ignore
import Logo from '../../../assets/images/sidebar/logo.svg'

interface Props {
  window?: () => Window;
  drawerWidth: number
}


const DrawerAdmin = (props: Props) => {
  const { window, drawerWidth } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isOpenMenu = useAppSelector(selectIsOpenMenu)

  const { logout } = useLogoutUser()

  const renderNavMenu = navMenuAdmin.map((element): JSX.Element => {
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
        <ListItem>
          <ListItemButtonStyled onClick={() => navigate('/')}>
            <ListItemIcon>
              <AdminPanelSettingsOutlined />
            </ListItemIcon>
            <ListItemText>
              <Typography>User</Typography>
            </ListItemText>
          </ListItemButtonStyled>
        </ListItem>

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
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </DrawerThema>
      <DrawerThema
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </DrawerThema>
    </Box>
  )
}

export default DrawerAdmin