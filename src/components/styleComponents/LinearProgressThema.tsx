import { LinearProgress, styled } from '@mui/material'
import { tokens } from '../../theme';

const LinearProgressThema = styled(LinearProgress)(({ theme }) => ({

  color: theme.palette.text.primary,
  background: `${theme.palette.text.primary} !important`,

}));


export default LinearProgressThema
