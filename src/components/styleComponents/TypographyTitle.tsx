import { Typography, styled } from '@mui/material'
import { tokens } from '../../theme';


const TypographyTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));


export default TypographyTitle
