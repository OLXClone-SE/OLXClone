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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../Logo.png';
import { useState } from 'react';
import { Copyright } from '../CopyrightComponent/CopyrightComponent';


function mockLogin(email:any,password:any){
  if(email === "test@gmail.com" && password === "Helloworld@123"){
    return true;
  }
  return false;
}
const theme = createTheme();
function validateEmail(email:any){
  return (email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}

function validatePassword(password:any){
  if(password.indexOf(' ') !== -1)
    return false;

  return  true;
}

type initialValuesType =  {
  emailFormatError: string,
  passwordFormatError: string,
  checkEmailError: boolean,
  checkPwdError: boolean,
  login: string
}

export default function SignIn() {
  const initialValues:initialValuesType = {
      emailFormatError:"",
      passwordFormatError:"",
      checkEmailError:false,
      checkPwdError:false,
      login:""
    };
    const [signinData, setData] = useState(initialValues)
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
    const password = data.get('password');
    let emailError = "";
    let passwordError = "";
    let checkEmail = false;
    let checkPwd = false;
    if(!validateEmail(email)){
      emailError = "Please enter a valid email address";
      checkEmail = true;
    }

    if(!validatePassword(password)){
      passwordError =  "Please enter any character other than space"
      checkPwd = true;
    }

    if(emailError.length!==0 || passwordError.length!==0){
      setData({emailFormatError:emailError,passwordFormatError:passwordError,checkEmailError:checkEmail,checkPwdError:checkPwd,login:""});
    }
    else{
      mockLogin(email,password) ? setData({emailFormatError:emailError,passwordFormatError:passwordError,checkEmailError:checkEmail,checkPwdError:checkPwd,login:"/home"})
      :      setData({emailFormatError:emailError,passwordFormatError:"please check credentials",checkEmailError:checkEmail,checkPwdError:checkPwd,login:""});
    }
      
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
          <Typography  variant="subtitle1"> 
            Enter your Email Address and Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText= {signinData.emailFormatError}
              FormHelperTextProps={{ style: styles.helper }}
              error={signinData.checkEmailError}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText= {signinData.passwordFormatError}
              error={signinData.checkPwdError}
              FormHelperTextProps={{ style: styles.helper }}
            />
            <Button
              type="submit"
              fullWidth
              href={signinData.login}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgotPwd" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}