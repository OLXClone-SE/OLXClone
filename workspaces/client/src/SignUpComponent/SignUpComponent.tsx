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
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(email);
}

function validatePhoneNumber(phone:any){
  const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return regex.test(phone.toLowerCase());
}

function validatePassword(password:any){
    const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return regex.test(password)
}

const theme = createTheme();

export default function SignUp() {
    const initialValues = {emailFormatError:"",phoneFormatError:"",passwordFormatError:"",checkEmailError:false,checkPhoneError:false,checkPwdError:false,sigupDone:""};
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
    let emailError = "";
    let phoneError = "";
    let passwordError = "";
    let checkEmail = false;
    let checkPhone = false;
    let checkPwd = false;
    if(!validateEmail(email)){
      emailError = "Please enter a valid email address";
      checkEmail=true;
      setData({emailFormatError:emailError,phoneFormatError:phoneError,passwordFormatError:passwordError,checkEmailError:checkEmail,checkPhoneError:checkPhone,checkPwdError:checkPwd,sigupDone:"/signup"});
    }

    if(!validatePhoneNumber(phoneNumber)){
      phoneError="Please enter your valid 10 digit phone number";
      checkPhone=true;
      setData({emailFormatError:emailError,phoneFormatError:phoneError,passwordFormatError:passwordError,checkEmailError:checkEmail,checkPhoneError:checkPhone,checkPwdError:checkPwd,sigupDone:"/signup"});
    }

    if(!validatePassword(password)){
      checkPwd=true;
      passwordError =  "Use 8 or more characters with a mix of capital and small letters, numbers and symbols like !@#$%^&*."
      setData({emailFormatError:emailError,phoneFormatError:phoneError,passwordFormatError:passwordError,checkEmailError:checkEmail,checkPhoneError:checkPhone,checkPwdError:checkPwd,sigupDone:"/signup"});
    }
    else
      setData({emailFormatError:emailError,phoneFormatError:phoneError,passwordFormatError:passwordError,checkEmailError:checkEmail,checkPhoneError:checkPhone,checkPwdError:checkPwd,sigupDone:"/"});
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
              href={signupData.sigupDone}
              variant="contained"
              href="/"
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