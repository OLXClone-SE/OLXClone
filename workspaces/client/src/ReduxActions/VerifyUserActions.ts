import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import {urls} from '../app.constants'
import { verifyUser } from "../Types/user";

export const sendOtpAction = createAsyncThunk('user/verifyusersignup', async (userData : verifyUser, _thunkAPI) => {
    return await axiosInstance.post(urls.verifyUser, userData).then(resp => resp);
})
