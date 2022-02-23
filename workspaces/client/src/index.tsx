import React from 'react';
import './index.css';
import App from './App';
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from './LoginComponent/LoginComponent';
import SignUpComponent from './SignUpComponent/SignUpComponent';
import { CounterComponent } from './CounterComponent/CounterComponent'
import ForgotPasswordComponent from './ForgotPasswordComponent/ForgotPasswordComponent';
import ResetPasswordComponent from './ResetComponent/ResetPasswordComponent';
import VerifyEmailComponent from './VerifyEmailComponent/VerifyEmailComponent';
import { Provider } from 'react-redux';
import { store } from './Store/store';

render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/forgotPwd" element={<ForgotPasswordComponent />} />
        <Route path="/reset" element={<ResetPasswordComponent />} />
        <Route path="/verify" element={<VerifyEmailComponent />} />
        <Route path="/redux" element={<CounterComponent />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
