import http from '@apis/config/http-service';
import { useQueryWrapper } from '@apis/config/use-api-wrapper';
import { UseQueryOptions, UseQueryResult } from 'react-query';
import { useToast } from '@chakra-ui/react';
import type { AxiosError } from 'axios';
import { useIsLoggedIn } from '@hooks/use-is-logged-in';
import { TParam, usePageParams } from '@hooks/use-page-params';

const endpoint = '/users';

type TData = Record<string, any>;
type TError = AxiosError;
type TQueryKey = [
  typeof endpoint,
  {
    name: TParam;
    email: TParam;
    phoneNumber: TParam;
    isActive: TParam;
    createdAt: TParam;
  }
];
type Options = Omit<UseQueryOptions<unknown, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>;
type ReturnType = UseQueryResult<TData, TError>;

export function useGetUsersApi(options?: Options): ReturnType {
  const toast = useToast();
  const isLoggedIn = useIsLoggedIn();
  const { getPageParams } = usePageParams();
  const { name, email, phoneNumber, isActive, createdAt } = getPageParams();

  const queryFn = async () => {
    try {
      const { data } = await http.get(endpoint, {
        params: { name, email, phoneNumber, isActive, createdAt },
      });

      return data;
    } catch (error: any) {
      if (!error.response.status || !error.response.data.message) throw error;

      toast({
        title: `${error.response.status} Error`,
        description: error.response.data.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
      });

      throw error;
    }
  };

  return useQueryWrapper([endpoint, { name, email, phoneNumber, isActive, createdAt }], queryFn, {
    enabled: isLoggedIn,
    ...options,
  });
}
