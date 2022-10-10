import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import auth from './slices/authSlice'

export const store = configureStore({
  reducer: {
    auth,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
