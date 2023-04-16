import { ListItemButton, styled } from '@mui/material'
import { tokens } from '../../theme';


const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#1900D5 !important',
    color: '#fff',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
      color: `${tokens(theme.palette.mode).white.DEFAULT} !important`,
    },
  }
}));


export default ListItemButtonStyled
