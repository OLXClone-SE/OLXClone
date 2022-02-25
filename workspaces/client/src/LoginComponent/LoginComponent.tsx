import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../Logo.png";
import { useState } from "react";
import { Copyright } from "../CopyrightComponent/CopyrightComponent";
import { validateEmail } from "../Utils/validators";
import ErrorMessages from "../Utils/ErrorMessages";
import { LoginData } from "../Types/LoginComponentTypes";

function mockLogin(email: any, password: any) {
  if (email === "test@gmail.com" && password === "Helloworld@123") {
    return true;
  }
  return false;
}
const theme = createTheme();
interface loginErrors {
  emailFormatError: string;
  invalidCredentials: string;
  isEmailError: boolean;
  isInvalidCredentials: boolean;
}

export default function SignIn() {
  const loginErrors = {
    emailFormatError: ErrorMessages.noError,
    invalidCredentials: ErrorMessages.noError,
    isEmailError: false,
    isInvalidCredentials: false
  };

  const [validationResult, setValidationResult] = useState(false);
  const [errors, setErrors] = useState<loginErrors>(loginErrors);

  const styles = {
    helper: {
      color: "red",
      fontSize: ".8em",
    },
  };

  const validate = (loginData: LoginData) => {
    let validationErrors: loginErrors = loginErrors;
    if (!validateEmail(loginData.mailid)) {
      validationErrors.emailFormatError = ErrorMessages.emailError;
      validationErrors.isEmailError = true;
      setErrors({...validationErrors});
    }
    else{
      validationErrors.invalidCredentials = ErrorMessages.invalidCredentials;
      validationErrors.isInvalidCredentials = true;
      setErrors({...validationErrors});
    }
  };

  const getLoginData = (data: FormData): LoginData => {
    const formData = {} as LoginData;
    formData.mailid = data.get("mailid");
    formData.password = data.get("password");
    return formData;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = getLoginData(data);
    validate(loginData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ height: "70px", width: "170px" }}
            alt="OLX CLONE"
            src={Logo}
          />
          <Typography variant="subtitle1">
            Enter your Email Address and Password
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="mailid"
              label="Email Address"
              name="mailid"
              autoComplete="email"
              helperText={errors.emailFormatError}
              error={errors.isEmailError}
              FormHelperTextProps={{ style: styles.helper }}
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
              helperText={errors.invalidCredentials}
              error={errors.isInvalidCredentials}
              FormHelperTextProps={{ style: styles.helper }}
            />
            <Button
              type="submit"
              fullWidth
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