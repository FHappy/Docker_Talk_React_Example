import axios from "axios";

import { API_URL_BASE } from "./constants";
import { mockRequestInterceptor, mockResponseInterceptor } from "./mockClient";

export const axiosInstance = axios.create({
  baseURL: API_URL_BASE
});

axiosInstance.interceptors.request.use(
  config => mockRequestInterceptor(config),
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  errorResponse => mockResponseInterceptor(errorResponse)
);
