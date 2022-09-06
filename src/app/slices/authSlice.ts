import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authApi } from '@/app/services/AuthService';
import { RootState } from '@/app/store';

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as {
    user: null | any;
    token: null | string;
  },
  reducers: {
    setUser: (state, { payload }: PayloadAction<any | null>) => {
      state.user = payload.user;
      state.token = payload.token;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }) => {
          state.token = payload.jwt_token;
        }
    );
    builder.addMatcher(
        authApi.endpoints.getCurrentUser.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
        }
    );
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.user;
