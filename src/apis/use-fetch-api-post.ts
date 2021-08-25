/*
| =============
| POST
| =============
*/

import http from '@services/http-service';
import { PostApiResponse } from '@apis/types';
import { AxiosRequestConfig } from 'axios';

export async function useFetchApiPost(
  url: string,
  config?: AxiosRequestConfig
): Promise<PostApiResponse> {
  const response = { data: undefined, error: undefined };

  try {
    const { data } = await http.post(url, config?.data, config);
    response.data = data;
  } catch (err) {
    response.error = err;
  }

  return response;
}
