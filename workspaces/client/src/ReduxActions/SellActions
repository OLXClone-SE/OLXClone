import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import { urls } from '../app.constants'
import { UserProduct } from "../Types/user";

export const saveUserProduct = createAsyncThunk('user/saveUserProduct', async (userData: UserProduct, _thunkAPI) => {
    const res = await axiosInstance.post(urls.saveProduct, userData).then(resp => resp.data);
    return {
        approved: res.approved
    }
})