import { MOCK_USER } from "features/auth/mocks";

export const API_MOCK_URLS_AND_RESPONSES = [
  {
    url: "/auth",
    response: {
      data: MOCK_USER,
      status: 200,
      statusText: "OK",
      headers: {}
    }
  }
];
export const API_MOCK_URLS = API_MOCK_URLS_AND_RESPONSES.map(mock => mock.url);
export const API_URL_BASE = "https://jsonplaceholder.typicode.com";
