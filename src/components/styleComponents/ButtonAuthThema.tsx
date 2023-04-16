import { Button, styled } from '@mui/material'
import { tokens } from '../../theme';

const ButtonAuthThema = styled(Button)(({ theme }) => ({
  border: `1px solid ${tokens(theme.palette.mode).borderColor}`,
  '&:hover': {
    backgroundColor: '#1900D5 !important',
  }
}));


export default ButtonAuthThema
