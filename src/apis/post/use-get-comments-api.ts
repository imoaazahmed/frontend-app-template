/* eslint-disable no-useless-catch */
import http from '@services/http-service';
import { FetcherResponse, GetApiResponse } from '@apis/types';
import { useFetchApiGet } from '@apis/use-fetch-api-get';

// Endpoint
const endpoint = '/posts';

// Fetcher function
async function fetcher(url: string): FetcherResponse {
  try {
    const { data } = await http.get(url);
    return data;
  } catch (err) {
    throw err;
  }
}

// Get comments by post ID
export function useGetCommentsApi(): GetApiResponse {
  return useFetchApiGet(endpoint + '/1/comments', fetcher);
}
