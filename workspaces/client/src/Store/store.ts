import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../ReduxSlices/CounterSlice'
import SignupSlice from '../ReduxSlices/SignupSlice'
import LoginSlice from '../ReduxSlices/LoginSlice'
import VerifyUserSlice from '../ReduxSlices/VerifyUserSlice'
import UserProfileSlice from "../ReduxSlices/UserProfileSlice"
import ProductSlice from "../ReduxSlices/ProductSlice"
import SellSlice from "../ReduxSlices/SellSlice"
import SearchSlice from "../ReduxSlices/SearchSlice"
import UploadImageSlice from '../ReduxSlices/UploadImageSlice'

export const store = configureStore({
  reducer: {
    "counter": counterReducer,
    "SignUpSlice": SignupSlice,
    "LoginSlice": LoginSlice,
    "VerifyUserSlice": VerifyUserSlice,
    "UserProfileSlice": UserProfileSlice,
    "ProductSlice": ProductSlice,
    "SellSlice": SellSlice,
    "SearchSlice": SearchSlice,
    "UploadImageSlice":UploadImageSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch