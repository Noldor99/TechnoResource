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
}));


export default TextFieldForm
