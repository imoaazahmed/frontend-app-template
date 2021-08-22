/* eslint-disable no-useless-catch */
import { ApiHookReturnType, useApiHook } from '@hooks/use-api-hook';
import http from '@services/http-service';

// Endpoints
export const usePostApiEndpoints = {
  getPosts: '/posts',
};

// Get posts
export function useGetPostsApi(): ApiHookReturnType {
  async function fetcher(url: string): Promise<any> {
    try {
      const { data } = await http.get(url);
      return data;
    } catch (err) {
      throw err;
    }
  }

  const response = useApiHook(usePostApiEndpoints?.getPosts, fetcher);

  return { ...response };
}
