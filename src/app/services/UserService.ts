import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "@/app/utils/queries";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQuery(),
  tagTypes: ["Settings"],
  endpoints: (builder) => ({
    getSettings: builder.query<any, void>({
      query: () => ({ url: "user/settings", isAuthorized: true }),
      providesTags: ["Settings"],
    }),
    getFundsAddress: builder.query<any, void>({
      query: () => ({ url: "user/wallet/deposit-address", isAuthorized: true }),
    }),
    saveAddressInfo: builder.mutation({
      query: (data) => ({
        url: "user/settings/shipping-address",
        method: "POST",
        data,
        isAuthorized: true,
      }),
    }),
    updateUserPersonalDetails: builder.mutation({
      query: (data) => ({
        url: "user/settings/account",
        method: "PUT",
        data,
        isAuthorized: true,
      }),
    }),
    updateUserShippingAddress: builder.mutation({
      query: (data) => ({
        url: "user/settings/shipping-address",
        method: "PUT",
        data,
        isAuthorized: true,
      }),
    }),
    withdraw: builder.mutation({
      query: ({ address, amount }: { address: string; amount: number }) => ({
        url: `user/wallet/withdraw`,
        method: "POST",
        data: {
          address,
          amount,
        },
        isAuthorized: true,
      }),
    }),
    // updateSettings: builder.mutation({
    //   query: ({ field, value }) => ({
    //     url: "user/settings",
    //     method: "PUT",
    //     data: {
    //       [field]: value,
    //     },
    //     isAuthorized: true,
    //   }),
    //   invalidatesTags: ["Settings"],
    // }),
  }),
});

export const {
  useGetSettingsQuery,
  useSaveAddressInfoMutation,
  useGetFundsAddressQuery,
  useWithdrawMutation,
  useUpdateUserPersonalDetailsMutation,
  useUpdateUserShippingAddressMutation,
} = userApi;
