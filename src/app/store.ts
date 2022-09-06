import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';

import { authApi } from './services/AuthService';
import { userApi } from './services/UserService';
import auth from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
