import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import { urls } from '../app.constants'
import { userMail } from "../Types/user";

export const getProducts = createAsyncThunk('user/getProducts', async (userData: userMail, _thunkAPI) => {
    const res = await axiosInstance.post(urls.getProducts, userData).then(resp => resp.data);
    return {
        products: res.products
    }
})
