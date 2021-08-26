import { GetApiResponse } from '@apis/types';
import { useFetchApiGet } from '@apis/use-fetch-api-get';
import { AxiosRequestConfig } from 'axios';
import { SWRConfiguration } from 'swr';

// Endpoint
const endpoint = '/posts';

// Get posts
export function useGetPostsApi(): GetApiResponse {
  const config: AxiosRequestConfig = {};
  const options: SWRConfiguration = {};

  return useFetchApiGet(endpoint, config, options);
}
