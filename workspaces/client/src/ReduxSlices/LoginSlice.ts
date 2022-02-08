import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { signUp } from '../ReduxActions/SignupActions'
import { LoginData } from '../Types/LoginComponentTypes';

interface SignUpState {
    approved: boolean
    loginData : LoginData
}

const initialState: SignUpState = {
    approved: false,
    loginData : {} as LoginData
}

export const LoginSlice = createSlice({
    name: 'SignUpSlice',
    initialState,
    reducers:{
        updateUserLoginDataAction : (state, action: PayloadAction<LoginData>) => {
            state.loginData = action.payload
        }
    },
    extraReducers: {
        [signUp.fulfilled.toString()] : (state, action : PayloadAction<SignUpState>) => {
            state.approved = action.payload.approved;
        }
    },
})

export const {updateUserLoginDataAction} = LoginSlice.actions

export default LoginSlice.reducer