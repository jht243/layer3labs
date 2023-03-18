import { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, { AxiosRequestConfig, AxiosError } from 'axios'

const baseConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/data',
    'Access-Control-Allow-Origin': '*',
  },
}

export const requester = axios.create(baseConfig)

const baseQuery =
  (): BaseQueryFn<
    {
      url: string
      method?: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
      isAuthorized?: boolean
    },
    unknown,
    unknown
  > =>
  async ({ url, method = 'get', data, params }) => {
    try {
      const result = await requester({ url: url, method, data, params })
      return { data: result.data.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export default baseQuery
