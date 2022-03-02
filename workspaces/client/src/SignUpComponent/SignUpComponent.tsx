import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../Logo.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import ErrorMessages from '../Utils/ErrorMessages';
import { Copyright } from '../CopyrightComponent/CopyrightComponent';
import { validateEmail, validatePassword, validatePhoneNumber } from '../Utils/validators';
import { SignupData } from '../Types/SignUpComponentTypes';
import { useAppDispatch } from '../Store/hooks';
import { updateUserSignupDataAction } from '../ReduxSlices/SignupSlice';
import { sendOtpAction } from '../ReduxActions/VerifyUserActions';
import { useNavigate } from 'react-router-dom';

interface formErrors {
  emailFormatError: string;
  phoneFormatError: string;
  passwordFormatError: string;
  checkEmailError: boolean;
  checkPhoneError: boolean;
  checkPwdError: boolean;
}

export default function SignUp() {

  const theme = createTheme();
  const navigate = useNavigate();
  const formErrors = {
    emailFormatError: ErrorMessages.noError,
    phoneFormatError: ErrorMessages.noError,
    passwordFormatError: ErrorMessages.noError,
    checkEmailError: false,
    checkPhoneError: false,
    checkPwdError: false,
  };

  const [errors, setErrors] = useState<formErrors>(formErrors);
  const dispatch = useAppDispatch();

  const validate = (signUpData: SignupData) => {
    let validationErrors: formErrors = formErrors;
    if (!validateEmail(signUpData.mailid)) {
      validationErrors.emailFormatError = ErrorMessages.emailError;
      validationErrors.checkEmailError = true;
    }
    if (!validatePhoneNumber(signUpData.phone)) {
      validationErrors.phoneFormatError = ErrorMessages.phoneError;
      validationErrors.checkPhoneError = true;
    }
    if (!validatePassword(signUpData.password)) {
      validationErrors.passwordFormatError = ErrorMessages.passwordError;
      validationErrors.checkPwdError = true;
    }
    if (!validationErrors.checkEmailError && !validationErrors.checkPhoneError && !validationErrors.checkPwdError) {
      dispatch(updateUserSignupDataAction(signUpData))
      dispatch(sendOtpAction({mailid : signUpData.mailid, action: "signup"}));
      navigate('/verify')
    }
    else{
      setErrors({...validationErrors});
    }
  }

  const styles = {
    helper: {
      color: 'red',
      fontSize: '.8em',
    }
  }

  const getSignUpData = (data: FormData): SignupData => {
    const formData = {} as SignupData;
    formData.fname = data.get('fname');
    formData.lname = data.get('lname');
    formData.mailid = data.get('mailid');
    formData.password = data.get('password');
    formData.phone = data.get('phone');
    formData.otp = -1; //default value
    return formData;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const signUpData = getSignUpData(data);
    validate(signUpData)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ height: '70px', width: '170px' }} alt="OLX CLONE" src={Logo} />
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Typography variant="subtitle1">
            Please enter your details to create an account.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required={true}
                  autoComplete="given-name"
                  name="fname"
                  fullWidth
                  id="fname"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required={true}
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  id="mailid"
                  label="Email Address"
                  name="mailid"
                  autoComplete="email"
                  helperText={errors.emailFormatError}
                  error={errors.checkEmailError}
                  FormHelperTextProps={{ style: styles.helper }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  helperText={errors.phoneFormatError}
                  error={errors.checkPhoneError}
                  FormHelperTextProps={{ style: styles.helper }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required={true}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText={errors.passwordFormatError}
                  error={errors.checkPwdError}
                  FormHelperTextProps={{ style: styles.helper }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}