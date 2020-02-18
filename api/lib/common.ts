import axios, { AxiosResponse } from 'axios'

const api = axios.create({
  baseURL: ''
})

export const get: <T>(path: string, params?: object) => Promise<AxiosResponse<T>> = async (path, params) => await api.get(path, { params })

export const post: <T>(path: string, data?: object) => Promise<AxiosResponse<T>> = async (path, data) => await api.post(path, data || {})

