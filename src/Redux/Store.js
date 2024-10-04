import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import  UserStateReducer  from './User/User'
import { AuthApi } from './Auth/AuthReducer'
export const store = configureStore({
  reducer: {
    UserState:UserStateReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
})


setupListeners(store.dispatch)