import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from '../ReduxSlices/CounterSlice'
import SignupSlice from '../ReduxSlices/SignupSlice'
import VerifyUserSlice from '../ReduxSlices/VerifyUserSlice'

export const store = configureStore({
  reducer: {
    "counter" : counterReducer,
    "SignUpSlice" : SignupSlice,
    "VerifyUserSlice" : VerifyUserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch