import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { saveUserProduct } from '../ReduxActions/SellActions';
import { UserProduct } from '../Types/user'

const initialState: UserProduct = {
    productname: "",
    category: "",
    price: -1,
    path: "",
    description: "",
    approved: false,
    phone: "",
    mailid: ""
}

export const SellSlice = createSlice({
    name: 'SellSlice',
    initialState,
    reducers: {
        updateProductDetails: (state, action: PayloadAction<{ userProduct: UserProduct }>) => {
            console.log("here" + action.payload.userProduct)
            Object.assign(state, { ...action.payload.userProduct });
        },
        setProductApproved: (state, action: PayloadAction<{ approved: boolean }>) => {
            state.approved = action.payload.approved;
        },
    },
    extraReducers: {
        [saveUserProduct.fulfilled.toString()]: (state, action: PayloadAction<{ updated: boolean }>) => {
            if (action.payload.updated)
                state.approved = action.payload.updated;
        },
    },
})

export const { updateProductDetails } = SellSlice.actions

export default SellSlice.reducer