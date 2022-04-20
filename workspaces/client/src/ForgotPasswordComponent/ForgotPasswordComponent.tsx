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
import { useNavigate } from 'react-router-dom';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        OLX Clone
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function validateEmail(email: any) {
  return (email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
function validateOTP(otp: any) {
  return (otp)
    .match(
      /^[0-9\b]+$/
    );
}


export default function ForgotPwd() {
  const initialValues = { emailFormatError: "", checkEmailError: false, showOtp: 'none', otpFormatError: "", checkOTPError: false, isValid: false };
  const [forgotPwdData, setData] = useState(initialValues)
  const styles = {
    helper: {
      color: 'red',
      fontSize: '.8em',
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    let emailError = "";
    let otpError = "";
    let checkEmail = false;
    let checkOTP = false;
    let validEmail = 'none';
    if (!validateEmail(email)) {
      emailError = "Please enter a valid email address";
      checkEmail = true;
      validEmail = 'none'
    }
    else {
      validEmail = ''
    }

    if (emailError != null)
      setData({ emailFormatError: emailError, checkEmailError: checkEmail, showOtp: validEmail, otpFormatError: otpError, checkOTPError: checkOTP, isValid: false });
  };
  const handleSubmitOtp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const otp = data.get('otp');
    let otpError = "";
    let checkOTP = false;
    let validEmail = '';
    let isValid = false
    if (!validateOTP(otp)) {
      otpError = "Please enter a valid 4 digit OTP";
      checkOTP = true;
    }
    else {
      isValid = true;
    }
    if (otpError != null)
      setData({ emailFormatError: "", checkEmailError: false, showOtp: validEmail, otpFormatError: otpError, checkOTPError: checkOTP, isValid: isValid });
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

          <Box component="form" onSubmit={handleSubmit} sx={{ display: forgotPwdData.showOtp === '' ? 'none' : '', width: '40ch' }}>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              An OTP will be sent to your registered Email ID.
            </Typography>
            <Grid container >
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  helperText={forgotPwdData.emailFormatError}
                  FormHelperTextProps={{ style: styles.helper }}
                  error={forgotPwdData.checkEmailError}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ display: forgotPwdData.showOtp === '' ? 'none' : '', mt: 2, mb: 2 }}
              >
                Get OTP
              </Button>
            </Grid>
          </Box>
          <Box component="form" onSubmit={handleSubmitOtp} sx={{ display: forgotPwdData.showOtp === '' ? '' : 'none', width: '40ch' }}>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              OTP has been sent to your registered Email ID. Please enter your 4 digit OTP below.
            </Typography>
            <Grid container >
              <Grid item xs={12} sx={{ display: forgotPwdData.showOtp === '' ? '' : 'none' }}>
                <TextField
                  required
                  margin="normal"
                  fullWidth
                  id="otp"
                  label="Enter OTP"
                  name="otp"
                  helperText={forgotPwdData.otpFormatError}
                  FormHelperTextProps={{ style: styles.helper }}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                href={forgotPwdData.isValid ? '/reset' : '#'}
              >
                Validate OTP
              </Button>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Remember your password? Sign in
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