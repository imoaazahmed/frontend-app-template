import useSwr, { SWRConfiguration } from 'swr';
import { AxiosError, AxiosResponse } from 'axios';

export interface ApiHookReturnType {
  data?: AxiosResponse;
  error?: AxiosError;
  mutate: (
    data?: AxiosResponse,
    shouldRevalidate?: boolean | undefined
  ) => Promise<any>;
  isInitialLoading: boolean;
  isRefreshing: boolean;
}

export function useApiHook(
  url: string,
  fetcher: (url: string) => Promise<any>,
  options?: SWRConfiguration
): ApiHookReturnType {
  const { data, error, mutate, isValidating } = useSwr(url, fetcher, {
    // You can add general options here for all APIs or override options from custom API hook
    ...options,
  });

  const isInitialLoading = isValidating && !data && !error;
  const isRefreshing = isValidating && (data || error);

  return { data, error, mutate, isInitialLoading, isRefreshing };
}

/*
  ---------------
  Important Notes
  ---------------

  console.log(data, error, isValidating)

  => start fetching
  undefined undefined true

  => end fetching, got an error
  undefined Error false

  => start retrying
  undefined Error true

  => end retrying, get the data
  Data undefined false
*/
