import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import { urls } from '../app.constants'
import { userMail, UserProfile } from "../Types/user";

export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async (userData: userMail, _thunkAPI) => {
    const res = await axiosInstance.post(urls.fetchUserProfile, userData).then(resp => resp.data);
    const userProfile = { ...res };
    return {
        userProfile
    }
})

export const saveUserProfile = createAsyncThunk('user/saveUserProfile', async (userData: UserProfile, _thunkAPI) => {
    const res = await axiosInstance.post(urls.updateUserProfile, userData).then(resp => resp.data);
    return {
        approved: res.approved
    }
})


