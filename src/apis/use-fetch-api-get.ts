/**
 * @name GET
 * @author Moaaz Ahmed
 * @summary This file will be containing all the handle methods for fetching data using get method.
 * @description As you can see in the file we are using useSWR for fetching data.
 * @access private
 *
 * @function useFetchApiGet This is the main function for for re-use outside of the file to call or fetch some data.
 * @readonly Please don't make any changes to this file.
 */

/* eslint-disable no-useless-catch */
import useSWR, { SWRConfiguration } from 'swr';
import { GetApiResponse, FetcherResponse } from '@apis/types';
import { AxiosRequestConfig } from 'axios';
import http from '@services/http-service';

// Fetcher function
async function fetcher(url: string, config: string): FetcherResponse {
  try {
    const { data } = await http.get(url, JSON.parse(config));
    return data;
  } catch (err) {
    throw err;
  }
}

export function useFetchApiGet(
  url: string,
  config: AxiosRequestConfig,
  options: SWRConfiguration
): GetApiResponse {
  // We are stringify the config object here to avoid re-renders because useSWR doesn't accept deep depth in it's arguments
  const { data, error, mutate, isValidating } = useSWR(
    [url, JSON.stringify(config)],
    fetcher,
    {
      // You can add general options here for all APIs or override options from custom API hook
      revalidateOnFocus: false,
      ...options,
    }
  );

  const isInitialLoading = isValidating && !data && !error;
  const isRefreshing = isValidating && (data || error);

  return { data, error, mutate, isInitialLoading, isRefreshing };
}
