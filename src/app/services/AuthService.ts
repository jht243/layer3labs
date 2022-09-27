import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "@/app/utils/queries";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        data: credentials,
      }),
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
        data: userData,
      }),
    }),
    getCurrentUser: builder.query<any, void>({
      query: () => ({
        url: "account",
        isAuthorized: true,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email }: { email: string }) => ({
        url: `auth/reset-password/send`,
        method: "POST",
        data: {
          email,
        },
        isAuthorized: true,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useResetPasswordMutation,
} = authApi;
