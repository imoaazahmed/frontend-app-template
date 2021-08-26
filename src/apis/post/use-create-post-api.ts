import { PostApiResponse } from '@apis/types';
import { useFetchApiPost } from '@apis/use-fetch-api-post';
import { AxiosRequestConfig } from 'axios';

// Endpoint
const endpoint = '/posts';

// Create post
export function useCreatePostApi(
  data?: AxiosRequestConfig['data']
): Promise<PostApiResponse> {
  const config: AxiosRequestConfig = {};

  return useFetchApiPost(endpoint, {
    ...config,
    data,
  });
}
