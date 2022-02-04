import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from '../Logo.png';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { render } from '@testing-library/react';

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

function validateEmail(email:any){
    return (email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}
  
  
  export default function ForgotPwd() {
    const initialValues = {emailFormatError:"",checkEmailError:false};
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
      let checkEmail = false;
      let validEmail = true;
      if(!validateEmail(email)){
        emailError = "Please enter a valid email address";
        checkEmail = true;
      }
  
      if(emailError!=null)
        setData({emailFormatError:emailError,checkEmailError:checkEmail});
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
          <Typography  variant="subtitle1" sx={{ mb: 1 }}> 
                Please enter your registered email address. You will receive an OTP via email.
          </Typography>  
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 1, width: '40ch' }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  helperText= {forgotPwdData.emailFormatError}
                  FormHelperTextProps={{ style: styles.helper }}
                  error={forgotPwdData.checkEmailError}
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Get OTP
            </Button>
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