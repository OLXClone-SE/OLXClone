import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { uploadProductImage } from '../ReduxActions/UploadImageActions'
import { ImageUploadData } from '../Types/ImageUploadTypes';

interface UploadImage {
    approved: boolean
    imageData: ImageUploadData
}

const initialState: UploadImage = {
    approved: false,
    imageData: {} as ImageUploadData
}

export const UploadImage = createSlice({
    name: 'UploadImage',
    initialState,
    reducers: {
        updateUserProductImageAction: (state, action: PayloadAction<ImageUploadData>) => {
            state.imageData = action.payload
        }
    },
    extraReducers: {
        [uploadProductImage.fulfilled.toString()]: (state, action: PayloadAction<{ approved: boolean }>) => {
            state.approved = action.payload.approved;
        }
    },
})

export const { updateUserProductImageAction } = UploadImage.actions

export default UploadImage.reducer