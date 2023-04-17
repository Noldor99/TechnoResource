import { AppBar, styled } from '@mui/material'
import { tokens } from '../../theme';

const ToolBarThema = styled(AppBar)(({ theme }) => ({
  background: `${tokens(theme.palette.mode).primary.DEFAULT} !important`,
  border: `1px solid ${tokens(theme.palette.mode).borderColor}`,
  boxShadow: 'none !important',
}));


export default ToolBarThema
