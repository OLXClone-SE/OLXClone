import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../Logo.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import ErrorMessages from '../Utils/ErrorMessages';
import ValidationRegex from '../Utils/ValidationRegex';
import LoginComponent from '../LoginComponent/LoginComponent'

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

function validateEmail(email:any){
  return ValidationRegex.emailRegex.test(email);
}

function validatePhoneNumber(phone:any){
  return ValidationRegex.phoneRegex.test(phone.toLowerCase());
}

function validatePassword(password:any){
    return ValidationRegex.passwordRegex.test(password)
}

const theme = createTheme();

export default function SignUp() {
    const initialValues = {
      emailFormatError:ErrorMessages.noError,
      phoneFormatError:ErrorMessages.noError,
      passwordFormatError:ErrorMessages.noError,
      checkEmailError:false,
      checkPhoneError:false,
      checkPwdError:false,
      sigupDone:false,
    };
    const [signupData, setData] = useState(initialValues)
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
    const phoneNumber = data.get('phone');
    const password = data.get('password');
    let emailError = ErrorMessages.noError;
    let phoneError = ErrorMessages.noError;
    let passwordError = ErrorMessages.noError;
    let checkEmail = false;
    let checkPhone = false;
    let checkPwd = false;
    if(!validateEmail(email)){
      emailError = ErrorMessages.emailError;
      checkEmail=true;
    }

    if(!validatePhoneNumber(phoneNumber)){
      phoneError=ErrorMessages.phoneError;
      checkPhone=true;
    }

    if(!validatePassword(password)){
      passwordError=ErrorMessages.passwordError;
      checkPwd=true;
    }
    if(!checkEmail && !checkPhone && !checkPwd){
      setData({emailFormatError:emailError,phoneFormatError:phoneError,passwordFormatError:passwordError,checkEmailError:checkEmail,checkPhoneError:checkPhone,checkPwdError:checkPwd,sigupDone:true});
    }
    else{
      setData({emailFormatError:emailError,phoneFormatError:phoneError,passwordFormatError:passwordError,checkEmailError:checkEmail,checkPhoneError:checkPhone,checkPwdError:checkPwd,sigupDone:false});
    }
  };
  if(signupData.sigupDone){
    return <LoginComponent/>
  }
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
          <Typography  variant="subtitle1"> 
            Please enter your details to create an account.
          </Typography>
          
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required = {true}
                  autoComplete="given-name"
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required = {true}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required = {true}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  helperText= {signupData.emailFormatError}
                  error={signupData.checkEmailError}
                  FormHelperTextProps={{ style: styles.helper }}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  required = {true}
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                  helperText= {signupData.phoneFormatError}
                  error={signupData.checkPhoneError}
                  FormHelperTextProps={{ style: styles.helper }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required = {true}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText= {signupData.passwordFormatError}
                  error={signupData.checkPwdError}
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