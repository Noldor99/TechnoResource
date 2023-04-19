import { TextField, styled } from '@mui/material'
import { tokens } from '../../theme';

const TextFieldForm = styled(TextField)(({ theme }) => ({
  "& .MuiTextField-root": {

  },
  "& .Mui-focused": {
    color: `${theme.palette.text.primary} !important`,

  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.text.primary} !important`,
    color: `${theme.palette.text.primary} !important `,
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    // '-webkit-box-shadow': '0 0 0 100px #a64545 inset',
  },
  '& .css-p51h6s-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill': {
    '-webkit-box-shadow': '0 0 0 100px #000000 inset !important',
  },
}));


export default TextFieldForm  
