import { Card, styled } from '@mui/material'
import { tokens } from '../../theme';

const CardThema = styled(Card)(({ theme }) => ({
  background: `${tokens(theme.palette.mode).primary.DEFAULT} !important`,
  border: `1px solid ${tokens(theme.palette.mode).borderColor}`,
  boxShadow: `${tokens(theme.palette.mode).boxShadow} !important`,
  borderRadius: '12px'
}));


export default CardThema
