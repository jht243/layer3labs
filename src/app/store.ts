import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import common from './slices/commonSlice'

export const store = configureStore({
  reducer: {
    common,
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
