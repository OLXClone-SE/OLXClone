import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../ReduxSlices/CounterSlice'
import SignupSlice from '../ReduxSlices/SignupSlice'
import LoginSlice from '../ReduxSlices/LoginSlice'
import VerifyUserSlice from '../ReduxSlices/VerifyUserSlice'
import UserProfileSlice from "../ReduxSlices/UserProfileSlice"


export const store = configureStore({
  reducer: {
    "counter": counterReducer,
    "SignUpSlice": SignupSlice,
    "LoginSlice": LoginSlice,
    "VerifyUserSlice": VerifyUserSlice,
    "UserProfileSlice": UserProfileSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch