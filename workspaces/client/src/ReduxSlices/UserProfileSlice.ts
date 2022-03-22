import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchUserProfile, saveUserProfile } from '../ReduxActions/UserProfileActions';
import { UserProfile } from '../Types/user';

const initialState: UserProfile = {
    mailid: "",
    fname: "",
    lname: "",
    phone: ""
}

export const UserProfileSlice = createSlice({
    name: 'UserProfileSlice',
    initialState,
    reducers: {
        updateProfileDetails: (state, action: PayloadAction<{ userProfile: UserProfile }>) => {
            Object.assign(state, { ...action.payload.userProfile });
        }
    },
    extraReducers: {
        [fetchUserProfile.fulfilled.toString()]: (state, action: PayloadAction<{ userProfile: UserProfile }>) => {
            Object.assign(state, { ...action.payload.userProfile });
        },
        [saveUserProfile.fulfilled.toString()]: (state, action: PayloadAction<{ updated: boolean }>) => {
            if (action.payload.updated)
                state.mailid = "";
        },
    },
})

export const { updateProfileDetails } = UserProfileSlice.actions

export default UserProfileSlice.reducer