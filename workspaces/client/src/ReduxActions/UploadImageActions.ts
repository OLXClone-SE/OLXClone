import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import { urls } from '../app.constants'
import {ImageUploadData} from '../Types/ImageUploadTypes';

export const uploadProductImage = createAsyncThunk('/uploadImage', async (imageData: ImageUploadData, _thunkAPI) => {
    const config = {     
        headers: { 'content-type': 'multipart/form-data', }
      }
    const res = await axiosInstance.post(urls.uploadImage, imageData.formData,config).then(resp => resp);
    return {
        approved: res.data
    }
})
