import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { DomLink } from './DomLink';

const CustomFormHelperText = styled('p')({
  fontSize: '10px',
});

export default function SignUpCard() {
  const [errors, setErrors] = React.useState({
    age: '',
    name: '',
    SclName: '',
    Grade: '',
    PhNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [open, setOpen] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState('createAccount'); // 'createAccount', 'otp', 'createPassword'

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateInputs = (formData) => {
    let formErrors = {};

    if (showPanel === 'createAccount') {
      // Age validation
      if (!formData.get('age')) formErrors.age = 'Age is required.';

      // Name validation
      if (!formData.get('name')) formErrors.name = 'Name is required.';

      // School/College Name validation
      if (!formData.get('SclName')) formErrors.SclName = 'School or College Name is required.';

      // Grade validation
      if (!formData.get('Grade')) formErrors.Grade = 'Grade is required.';

      // Contact Number validation
      if (!formData.get('PhNo')) formErrors.PhNo = 'Contact Number is required.';
      else if (!/^\d+$/.test(formData.get('PhNo'))) formErrors.PhNo = 'Contact Number must be a valid number.';

      // Email validation
      if (!formData.get('email')) formErrors.email = 'Email is required.';
      else if (!/\S+@\S+\.\S+/.test(formData.get('email'))) formErrors.email = 'Please enter a valid email address.';
    } else if (showPanel === 'createPassword') {
      // Password validation
      const password = formData.get('password');
      if (!password) formErrors.password = 'Password is required.';
      else if (password.length < 8 || password.length > 12) formErrors.password = 'Password must be 8-12 characters long.';
      else if (!/[A-Z]/.test(password)) formErrors.password = 'Password must include at least one uppercase letter.';
      else if (!/[a-z]/.test(password)) formErrors.password = 'Password must include at least one lowercase letter.';
      else if (!/[0-9]/.test(password)) formErrors.password = 'Password must include at least one number.';
      else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) formErrors.password = 'Password must include at least one special character.';

      // Confirm Password validation
      const confirmPassword = formData.get('Conformpassword');
      if (!confirmPassword) formErrors.confirmPassword = 'Confirm Password is required.';
      else if (password !== confirmPassword) formErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (validateInputs(data)) {
      if (showPanel === 'createAccount') {
        setShowPanel('otp');
      } else if (showPanel === 'otp') {
        setShowPanel('createPassword');
      }
    }
  };

  const handleChangeEmailClick = () => {
    setShowPanel('createAccount');
  };

  const renderTextField = (id, name, type, placeholder) => (
    <FormControl>
      <TextField
        error={!!errors[name]}
        helperText={<CustomFormHelperText>{errors[name]}</CustomFormHelperText>}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        fullWidth
        variant="outlined"
        color={errors[name] ? 'error' : 'primary'}
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
  );

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
      {showPanel === 'createAccount' && (
        <>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: '18px', fontWeight: 'bold', color: '#515151' }}
          >
            CREATE ACCOUNT
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', width: '80%', gap: 1 }}
          >
            {renderTextField('age', 'age', 'number', 'Age')}
            <Typography
              component="p"
              sx={{ fontSize: '12px', fontWeight: 'bold' }}
            >
              Providing your age ensures you get the right IQED experience. For more details, please visit our Privacy Policy.
            </Typography>
            {renderTextField('name', 'name', 'text', 'Name')}
            {renderTextField('SclName', 'SclName', 'text', 'School or College Name')}
            {renderTextField('Grade', 'Grade', 'text', 'Grade')}
            {renderTextField('PhNo', 'PhNo', 'text', 'Contact Number')}
            {renderTextField('email', 'email', 'email', 'Email')}

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
              Next
            </Button>
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>
              Already have an account?
              <span>
                <DomLink to="/Signin" text=" Sign in" />
              </span>
            </Typography>
          </Box>
        </>
      )}

      {showPanel === 'otp' && (
        <>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: '18px', fontWeight: 'bold', color: '#515151' }}
          >
            Email OTP Verification
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', width: '80%', gap: 1 }}
          >
            <FormControl>
              <TextField
                id="otp"
                type="number"
                name="otp"
                placeholder="Enter the OTP"
                required
                fullWidth
                variant="outlined"
                color={'primary'}
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
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: '12px', fontWeight: 'bold' }}
            >
              Please enter the verification code we just sent to your email.
            </Typography>
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
              Next
            </Button>
            <Typography sx={{ textAlign: 'center', fontSize: '12px' }}>
              Or change email{' '}
              <span
                sx={{ fontWeight: 'bold', color: '#0000FF', cursor: 'pointer' }}
                onClick={handleChangeEmailClick}
              >
                click Here
              </span>
            </Typography>
          </Box>
        </>
      )}

      {showPanel === 'createPassword' && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
           
            gap: 2,
          }}
        >
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: '18px', fontWeight: 'bold', color: '#515151' }}
          >
            CREATE PASSWORD
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ display: 'flex', flexDirection: 'column', width: '80%', gap: 1 }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: '100%', fontSize: '12px', fontWeight: 'bold' }}
            >
              Your password must be 8-12 characters long, include a mix of uppercase and lowercase letters, numbers, and special characters, and avoid common words.
            </Typography>

            {renderTextField('password', 'password', 'password', 'Password')}
            {renderTextField('Conformpassword', 'Conformpassword', 'password', 'Confirm Password')}

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
              Submit
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}