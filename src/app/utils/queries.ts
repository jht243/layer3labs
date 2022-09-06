import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { useSession } from 'next-auth/react';

const baseConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const requester = axios.create(baseConfig);
export const authorizedRequester = axios.create(baseConfig);


authorizedRequester.interceptors.request.use((config: AxiosRequestConfig) => {
  const { data: session }: any = useSession();
  const token = session.accessToken
  config.headers!.Authorization = token ? `Bearer ${token}` : '';
  return config;
});


const baseQuery =
    (): BaseQueryFn<{
      url: string;
      method?: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
      isAuthorized?: boolean;
    },
        unknown,
        unknown> =>
        async ({ url, method = 'get', data, params, isAuthorized = false }) => {
          try {
            let result;
            if (isAuthorized) {
              result = await authorizedRequester({ url: url, method, data, params });
            } else {
              result = await requester({ url: url, method, data, params });
            }
            return { data: result.data.data };
          } catch (axiosError) {
            let err = axiosError as AxiosError;

            return {
              error: {
                status: err.response?.status,
                data: err.response?.data || err.message,
              },
            };
          }
        };

export default baseQuery;
