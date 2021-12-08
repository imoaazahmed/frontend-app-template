import { useMutationWrapper } from '@apis/use-api-wrapper';
import { UseMutationResult } from 'react-query';
import http from '@services/http-service';
import { AxiosResponse, AxiosError } from 'axios';

const endpoint = 'posts';

interface BodyType {
  title: string;
  body: string;
  userId: string;
}

const mutationFn = async (body: BodyType) => {
  const { data } = await http.post(endpoint, body);
  return data;
};

export function useCreatePostApi(): UseMutationResult<AxiosResponse, AxiosError, BodyType> {
  return useMutationWrapper(mutationFn, { mutationKey: endpoint });
}
