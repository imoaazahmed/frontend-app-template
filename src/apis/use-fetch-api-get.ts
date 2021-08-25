/*
| =============
| GET
| =============
*/

import useSWR, { SWRConfiguration } from 'swr';
import { GetApiResponse, FetcherResponse } from '@apis/types';

export function useFetchApiGet(
  url: string,
  fetcher: (url: string) => FetcherResponse,
  options?: SWRConfiguration
): GetApiResponse {
  const { data, error, mutate, isValidating } = useSWR(url, fetcher, {
    // You can add general options here for all APIs or override options from custom API hook
    revalidateOnFocus: false,
    ...options,
  });

  const isInitialLoading = isValidating && !data && !error;
  const isRefreshing = isValidating && (data || error);

  return { data, error, mutate, isInitialLoading, isRefreshing };
}
