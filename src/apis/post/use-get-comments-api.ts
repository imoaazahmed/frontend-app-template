import { GetApiResponse } from '@apis/types';
import { useFetchApiGet } from '@apis/use-fetch-api-get';
import { AxiosRequestConfig } from 'axios';
import { SWRConfiguration } from 'swr';

// Endpoint
const endpoint = '/posts';

// Get comments by post ID
export function useGetCommentsApi(): GetApiResponse {
  const config: AxiosRequestConfig = {};
  const options: SWRConfiguration = {};

  return useFetchApiGet(endpoint + '/1/comments', config, options);
}
