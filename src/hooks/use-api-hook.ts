import useSwr from 'swr';
import { AxiosError, AxiosResponse } from 'axios';

export interface HookReturnType {
  data?: AxiosResponse;
  error?: AxiosError;
  isLoading: boolean;
}

export function useApiHook(
  url: string,
  fetcher: (url: string) => Promise<any>
): HookReturnType {
  const { data, error, isValidating: isLoading } = useSwr(url, fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // Never retry on 404.
      if (error.response?.status === 404) return;

      // Never retry for a specific key.
      if (key === '/api/user') return;

      // Only retry up to 10 times.
      if (retryCount >= 10) return;

      // Retry after 5 seconds.
      setTimeout(() => revalidate({ retryCount }), 5000);
    },
  });

  return { data, error, isLoading };
}

// HOW TO USE
// ----------
// [1] - Import the useApiHook into your hook file
// import { HookReturnType, useApiHook } from "@hooks/use-api-hook";
//
// [2] - Call the hook and pass your API endpoint
// const endpoint = "https://jsonplaceholder.typicode.com/posts";
//
// export function useApiPosts(): HookReturnType {
//   const { data, error, isLoading } = useApiHook(endpoint);
//   return { data, error, isLoading };
// }
