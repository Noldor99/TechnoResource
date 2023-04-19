import { Box, styled } from '@mui/material'
import { tokens } from '../../theme';

const ScrollBarWrapper = styled(Box)(({ theme }) => ({
  '*::-webkit-scrollbar': {
    width: '0.4em',
  },
  '*::-webkit-scrollbar-track': {
    '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,.1)',
    outline: '1px solid slategrey',
  }
}));

export default ScrollBarWrapper;
