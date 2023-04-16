import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  styled,
  TextField,
  Typography
} from '@mui/material';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
// import { selectPreviousURL } from '../../store/slice/cartSlice';
import GoogleIcon from '@mui/icons-material/Google';
import ButtonAuthThema from '../../components/styleComponents/ButtonAuthThema';

const LoginForm = () => {

  const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      '-webkit-box-shadow': '0 0 0 100px #000000 inset',
    },
  }));


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const previousURL = useSelector(selectPreviousURL);
  const navigate = useNavigate();

  const redirectUser = () => {
    // if (previousURL.includes('cart')) {
    //   return navigate('/cart');
    // }
    navigate('/');
  };

  const loginUser = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // const user = userCredential.user;
        setIsLoading(false);
        toast.success('Login Successful...');
        redirectUser();
      })
      .catch(error => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  // Login with Goooglr
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        // const user = result.user;
        toast.success('Login Successfully');
        redirectUser();
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '600px'

      }}
    >

      <FormControl
        component="form"
        noValidate
        onSubmit={loginUser}
        sx={{
          p: 2,
          width: '100%',
          boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)'
        }}
      >
        <Typography component="h1" variant="h5" color="orange" align="center">
          Login
        </Typography>
        <StyledTextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}

        />
        <StyledTextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Typography variant="body2" color="textSecondary">
          <Button color="info" onClick={() => navigate('/reset')}>
            Reset Password
          </Button>
        </Typography>
        <ButtonAuthThema
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          Log In
        </ButtonAuthThema>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          startIcon={<GoogleIcon />}
          sx={{ mb: 2 }}
          onClick={signInWithGoogle}
        >
          Login with Google
        </Button>
        <Typography variant="body2" color="textSecondary" align="center">
          Don't have an account?{' '}
          <Button color="info" onClick={() => navigate('/register')}>
            Register
          </Button>
        </Typography>
      </FormControl>
    </Container>
  );
};

export default LoginForm;
