import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { login } from '../ReduxActions/LoginActions';
import { LoginData } from '../Types/LoginComponentTypes';

interface LoginState {
    approved: boolean
    pending: boolean
    loginData: LoginData
}

const initialState: LoginState = {
    approved: false,
    pending: false,
    loginData: {} as LoginData
}

export const LoginSlice = createSlice({
    name: 'LoginSlice',
    initialState,
    reducers: {
        updateUserLoginDataAction: (state, action: PayloadAction<LoginData>) => {
            state.loginData = action.payload
        }
    },
    extraReducers: {
        [login.fulfilled.toString()]: (state, action: PayloadAction<{ approved: boolean }>) => {
            state.approved = action.payload.approved;
            state.pending = false;
        },
        [login.pending.toString()]: (state) => {
            state.pending = true;
        }
    },
})

export const { updateUserLoginDataAction } = LoginSlice.actions

export default LoginSlice.reducer