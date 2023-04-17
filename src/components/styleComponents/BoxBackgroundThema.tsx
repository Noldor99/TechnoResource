import { Box, styled } from '@mui/material'
import { tokens } from '../../theme';

const BoxBackgroundThema = styled(Box)(({ theme }) => ({
  background: `${tokens(theme.palette.mode).primary.DEFAULT} !important`,
  border: `1px solid ${tokens(theme.palette.mode).borderColor}`,
  boxShadow: 'none !important',
}));


export default BoxBackgroundThema
