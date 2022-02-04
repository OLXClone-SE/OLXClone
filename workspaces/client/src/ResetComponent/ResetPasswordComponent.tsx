import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from '../Logo.png';
import { useState } from 'react';
import LoginComponent from '../LoginComponent/LoginComponent'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        OLXCLONE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


function validatePassword(password:any){
  const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return regex.test(password)
}

type initialValuesType =  {
  passwordError: string,
  resetDone: boolean
}
export default function ResetPassword() {
  const initialValues: initialValuesType =  {
    passwordError:"",
    resetDone:false
  };
    const [resetData, setData] = useState(initialValues)
    const styles = {
      helper: {
           color: 'red',
           fontSize: '.8em',
      }
    }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newPassword = data.get('New password');
    const confirmPassword = data.get('Confirm password');
    let passwordErrorMesssage = ""
    if(newPassword !== confirmPassword){
      passwordErrorMesssage = "Passwords do not match please check again"
      setData({passwordError:passwordErrorMesssage,resetDone:false});
    }
    else if(!validatePassword(newPassword)){
      passwordErrorMesssage =  "Use 8 or more characters with a mix of capital and small letters, numbers and symbols like !@#$%^&*."
      setData({passwordError:passwordErrorMesssage,resetDone:false});
    }
    else{
      setData({passwordError:passwordErrorMesssage,resetDone:true});
    }
  };

  return (
    <React.Fragment>
      {
        resetData.resetDone ? (<LoginComponent></LoginComponent>)
        : (<ThemeProvider theme={theme}>
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
                Enter new password
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="password"
                  id="New password"
                  label="New password"
                  name="New password"
                  autoComplete="New password"
                  helperText= {resetData.passwordError}
                  FormHelperTextProps={{ style: styles.helper }}
                  error={resetData.passwordError==="" ? false : true}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Confirm password"
                  label="Confirm password"
                  type="password"
                  id="Confirm password"
                  autoComplete="Confirm password"
                  helperText= {resetData.passwordError}
                  error={resetData.passwordError==="" ? false : true}
                  FormHelperTextProps={{ style: styles.helper }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Reset Password
                </Button>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>)
      }
    </React.Fragment>
  );
}