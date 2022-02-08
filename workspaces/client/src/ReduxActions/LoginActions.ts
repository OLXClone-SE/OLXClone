import {createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import {urls} from '../app.constants'
import { LoginData } from "../Types/LoginComponentTypes";

export const login = createAsyncThunk('user/login', async (userData : LoginData, _thunkAPI) => {
    return await axiosInstance.post(urls.login, userData).then(resp => resp.data);
})
