import { PostApiResponse } from '@apis/types';
import { useFetchApiPost } from '@apis/use-fetch-api-post';
import { AxiosRequestConfig } from 'axios';

// Endpoint
const endpoint = '/posts';

// Create post
export function useCreatePostApi(
  config?: AxiosRequestConfig
): Promise<PostApiResponse> {
  return useFetchApiPost(endpoint, config);
}
