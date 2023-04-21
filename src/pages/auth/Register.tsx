import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { Box, Button, Container, FormControl, TextField, Typography } from "@mui/material";
import ButtonBlueBack from "../../components/styleComponents/buttons/ButtonBlueBack";
import { BASE_URL } from "../../URL";
import PaperRounding from "../../components/styleComponents/containers/PaperRounding";
import TextFieldForm from "../../components/styleComponents/TextFieldForm";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== cPassword) {
      toast.error("Passwords do not match.");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
        toast.success("Registration Successful...");
        navigate(`${BASE_URL}/login`);
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: '90vh',
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <PaperRounding sx={{ width: '100%' }}>


        <FormControl
          component="form"
          noValidate
          onSubmit={registerUser}
          sx={{
            p: 2,
            width: '100%',
            boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.2)'
          }}
        >
          <Typography component="h1" variant="h5" color='orange' align="center" >
            Register
          </Typography>
          <TextFieldForm
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextFieldForm
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextFieldForm
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
          <ButtonBlueBack
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </ButtonBlueBack>
          <Typography variant="body2" color="textSecondary" align="center">
            Already have an account?{' '}
            <Button color="info" onClick={() => navigate(`${BASE_URL}/login`)}>
              Login
            </Button>
          </Typography>
        </FormControl>
      </PaperRounding>
    </Container>
  );
};

export default Register;
