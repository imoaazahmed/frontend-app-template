import axios from 'axios';

export const getAccessToken = () => {
  const accessToken = localStorage.getItem('access-token');
  if (accessToken) return 'Bearer ' + accessToken;
  return null;
};

export const getLanguage = () => {
  const language = localStorage.getItem('language');
  if (language) return language;
  return 'en';
};

// Create API instance
const http = axios.create();

http.defaults.baseURL = process.env.HTTP_BASE_URL + '/';
http.defaults.headers.common['Authorization'] = getAccessToken();
http.defaults.headers.common['Language'] = getLanguage();
http.defaults.headers.post['Content-Type'] = 'application/json';
http.defaults.withCredentials = true;

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.common['Language'] = getLanguage();
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
};
