import { AxiosError, AxiosResponse } from 'axios';

// GET Method Response
type Mutate = (data?: AxiosResponse['data'], shouldRevalidate?: boolean) => Promise<any>;

export interface GetApiResponse {
  isInitialLoading: boolean;
  isRefreshing: boolean;
  mutate: Mutate;
  data?: AxiosResponse['data'];
  error?: AxiosError | unknown;
}

// POST Method Response
export interface PostApiResponse {
  data?: AxiosResponse['data'];
  error?: AxiosError | unknown;
}

// Fetcher Function Response
export type FetcherResponse = Promise<AxiosResponse | AxiosError>;
