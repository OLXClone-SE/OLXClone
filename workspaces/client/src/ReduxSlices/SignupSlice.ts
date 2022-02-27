import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { signUp } from '../ReduxActions/SignupActions'
import { SignupData } from '../Types/SignUpComponentTypes';

interface SignUpState {
    approved: boolean
    signupData : SignupData
}

const initialState: SignUpState = {
    approved: false,
    signupData : {} as SignupData
}

export const SignUpSlice = createSlice({
    name: 'SignUpSlice',
    initialState,
    reducers:{
        updateUserSignupDataAction : (state, action: PayloadAction<SignupData>) => {
            state.signupData = action.payload
        }
    },
    extraReducers: {
        [signUp.fulfilled.toString()] : (state, action : PayloadAction<SignUpState>) => {
            state.approved = action.payload.approved;
        }
    },
})

export const {updateUserSignupDataAction} = SignUpSlice.actions

export default SignUpSlice.reducer