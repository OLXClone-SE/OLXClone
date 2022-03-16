import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Logo from "../Logo.png";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Copyright } from '../CopyrightComponent/CopyrightComponent';
import { signUp } from "../ReduxActions/SignupActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { SignupData } from "../Types/SignUpComponentTypes";



const theme = createTheme();

function validateOTP(otp: any) {
  return otp.match(/^\d{4}$/);
}

export default function ForgotPwd(props: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUpData = useSelector((state: RootState) => state.SignUpSlice.signupData);
  const initialValues = {
    otpFormatError: "",
    checkOTPError: false,
    isValid: false,
  };
  const [forgotPwdData, setData] = useState(initialValues);
  const styles = {
    helper: {
      color: "red",
      fontSize: ".8em",
    },
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const otp = data.get("otp");
    let otpError = "";
    let checkOTP = false;
    let isValid = false;
    if (!validateOTP(otp)) {
      otpError = "Please enter a valid 4 digit OTP";
      checkOTP = true;
    } else {
      isValid = true;
    }
    if (otpError != null) {
      setData({
        otpFormatError: otpError,
        checkOTPError: checkOTP,
        isValid: isValid,
      });
    }

    if (isValid) {
      const newData: SignupData = { ...signUpData, otp: Number(otp) }
      dispatch(signUp(newData));
      window.alert("registration successfull");
      navigate("/");
    }
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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              OTP has been sent to your registered Email ID. Please enter your 4
              digit OTP below to verify.
            </Typography>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  required
                  margin="normal"
                  fullWidth
                  id="otp"
                  label="Enter OTP"
                  name="otp"
                  helperText={forgotPwdData.otpFormatError}
                  FormHelperTextProps={{ style: styles.helper }}
                  error={forgotPwdData.checkOTPError}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
              >
                Validate OTP
              </Button>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}


