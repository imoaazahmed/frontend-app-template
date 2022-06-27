import http from '@apis/config/http-service';
import { useMutationWrapper } from '@apis/config/use-api-wrapper';
import { useToast } from '@chakra-ui/react';
import type { UseMutationOptions, UseMutationResult } from 'react-query';
import type { AxiosError } from 'axios';

const endpoint = '/users';

interface BodyType {
  name: string;
  email: string;
  phoneNumber: string;
  permittedCountries: number[];
  roles: number[];
}

type TData = Record<string, any>;
type TError = AxiosError;

type TVariables = {
  body: BodyType;
};

type Options = Omit<UseMutationOptions<TData, TError, TVariables, unknown>, 'mutationFn'>;
type ReturnType = UseMutationResult<TData, TError, TVariables>;

export function useCreateUserApi(options?: Options): ReturnType {
  const toast = useToast();

  const mutationFn = async ({ body }: TVariables) => {
    try {
      const { data } = await http.post(endpoint, body);

      toast({
        title: 'Success',
        description: 'User have been created successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
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

  return useMutationWrapper(mutationFn, { mutationKey: endpoint, ...options });
}
