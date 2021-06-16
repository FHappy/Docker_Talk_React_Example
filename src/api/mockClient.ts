import { AxiosRequestConfig } from "axios";

import { API_MOCK_URLS, API_MOCK_URLS_AND_RESPONSES } from "./constants";

interface MockErrorResponse extends Error {
  config: AxiosRequestConfig;
  isMockError: boolean;
}

function shouldMockRequest(config: AxiosRequestConfig): boolean {
  return !!API_MOCK_URLS.find(mockUrl => mockUrl === config.url);
}

function shouldMockErrorResponse(errResponse: MockErrorResponse): boolean {
  if (!errResponse || !errResponse.config || !errResponse.isMockError) {
    return false;
  }

  return true;
}

function getAxiosResponseFromMockErrorResponse(errResponse: MockErrorResponse) {
  if (
    !errResponse.config ||
    !errResponse.config.url ||
    !errResponse.isMockError
  ) {
    return Promise.reject(errResponse);
  }

  const matchedMock = API_MOCK_URLS_AND_RESPONSES.find(
    mock => mock.url === errResponse.config.url
  );

  if (!matchedMock) {
    return Promise.reject(errResponse);
  }

  return Promise.resolve({
    ...matchedMock.response,
    config: errResponse.config
  });
}

export const mockRequestInterceptor = (config: AxiosRequestConfig) => {
  if (shouldMockRequest(config)) {
    const mockError: MockErrorResponse = {
      config,
      isMockError: true,
      name: "",
      message: ""
    };

    return Promise.reject(mockError);
  }

  return config;
};

export const mockResponseInterceptor = (errorResponse: MockErrorResponse) => {
  if (shouldMockErrorResponse(errorResponse)) {
    return getAxiosResponseFromMockErrorResponse(errorResponse);
  }

  return Promise.reject(errorResponse);
};
