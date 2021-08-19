/* eslint-disable no-useless-catch */
import { HookReturnType, useApiHook } from './use-api-hook';
import http from '@services/http-service';

const endpoint = '/posts';

export function useApiPosts(): HookReturnType {
  async function fetcher(url: string): Promise<any> {
    try {
      const { data } = await http.get(url);
      return data;
    } catch (err) {
      throw err;
    }
  }

  const { data, error, isLoading } = useApiHook(endpoint, fetcher);
  return { data, error, isLoading };
}
