import {createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import {urls} from '../app.constants'
import { SignupData } from "../Types/SignUpComponentTypes";

export const signUp = createAsyncThunk('user/signup', async (userData : SignupData, _thunkAPI) => {
    return await axiosInstance.post(urls.signUp, userData).then(resp => resp);
})
