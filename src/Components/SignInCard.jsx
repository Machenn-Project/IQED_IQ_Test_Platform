import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../utils/schema";
import { DomLink } from '../components';
import { useSignInMutation } from '../Redux/Auth/AuthReducer';
import { useNavigate } from 'react-router-dom';

const CustomFormHelperText = styled('p')({
  fontSize: '10px',
});

export default function SignInCard() {
  const navigator = useNavigate();
  const [UserLogin] = useSignInMutation();
  const formMethods = useForm({
    resolver: yupResolver(formSchema),
  });

  const [errors, setErrors] = React.useState({
    email: '',
    password: '',
  });
  const [open, setOpen] = React.useState(false);
  const [loginError, setLoginError] = React.useState(''); // State to store login error message

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validateInputs = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let formErrors = {};
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    if (!password || password.length < 6) {
      formErrors.password = 'Enter the Valid Password';
      isValid = false;
    }
    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginError(''); // Reset error message
    if (validateInputs()) {
      const data = new FormData(event.currentTarget);
      try {
        const response = await UserLogin({ Email: data.get('email'), Password: data.get('password') }).unwrap();
        sessionStorage.setItem("Token", response);
        navigator("/Explore");
      } catch (error) {
        setLoginError('Invalid email or password. Please try again.'); // Set error message
      }
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        width: { xs: '100%', md: '60%' },
        gap: 2,
      }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: '24px', fontWeight: 'bold' }}
      >
        SIGN IN
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '80%', gap: 2 }}
      >
        {loginError && ( // Conditionally render login error message
          <Typography color="error" sx={{ fontSize: '12px' }}>
            {loginError}
          </Typography>
        )}
        <FormControl>
          <TextField
            error={!!errors.email}
            helperText={<CustomFormHelperText>{errors.email}</CustomFormHelperText>}
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            fullWidth
            variant="outlined"
            color={errors.email ? 'error' : 'primary'}
            sx={{
              fontSize: '12px',
              backgroundColor: 'transparent',
              '& .MuiOutlinedInput-root': {
                height: '40px',
                '& input': {
                  height: '100%',
                  padding: '0 14px',
                  '&::placeholder': {
                    fontSize: '12px',
                  },
                },
              },
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            error={!!errors.password}
            helperText={<CustomFormHelperText>{errors.password}</CustomFormHelperText>}
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            required
            fullWidth
            variant="outlined"
            color={errors.password ? 'error' : 'primary'}
            sx={{
              fontSize: '12px',
              backgroundColor: 'transparent',
              '& .MuiOutlinedInput-root': {
                height: '40px',
                '& input': {
                  height: '100%',
                  padding: '0 14px',
                  '&::placeholder': {
                    fontSize: '12px',
                  },
                },
              },
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              component="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ fontSize: '12px', textDecoration: 'none' }}
            >
              Forgot your password?
            </Link>
          </Box>
        </FormControl>

        <ForgotPassword open={open} handleClose={handleClose} />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            fontWeight: 'bold',
            backgroundColor: '#1A49BA',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: 'Black',
              transition: 'transform 0.3s ease-in-out',
              transform: 'translateY(-5px)',
            },
            boxShadow: '2px 3px #FFDA55',
          }}
        >
          Sign in
        </Button>
        <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>
          Don&apos;t have an account?{' '}
          <span>
            <DomLink to="/Signup" text="Sign Up" />
          </span>
        </Typography>
      </Box>
    </Box>
  );
}
