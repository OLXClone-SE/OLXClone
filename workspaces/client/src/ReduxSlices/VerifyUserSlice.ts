import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { sendOtpAction } from '../ReduxActions/VerifyUserActions';


interface VerifyUserState {
    otpsent: boolean
}

const initialState: VerifyUserState = {
    otpsent: false
}

export const VerifyUserSlice = createSlice({
    name: 'VerifyUserSlice',
    initialState,
    reducers:{},
    extraReducers: {
        [sendOtpAction.fulfilled.toString()] : (state, action : PayloadAction<VerifyUserState>) => {
            state.otpsent = action.payload.otpsent;
        }
    },
})

export default VerifyUserSlice.reducer