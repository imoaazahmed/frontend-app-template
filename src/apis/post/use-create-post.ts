import http from '@services/http-service';
import { useMutationWrapper } from '@apis/use-api-wrapper';
// import { useAppDispatch } from '@redux/hooks';
import type { UseMutationResult } from 'react-query';
import type { AxiosResponse, AxiosError } from 'axios';

const endpoint = 'posts';

interface BodyType {
  title: string;
  body: string;
  userId: string;
}

type ReturnType = UseMutationResult<AxiosResponse, AxiosError, BodyType>;

export function useCreatePostApi(): ReturnType {
  // const dispatch = useAppDispatch();

  const mutationFn = async (body: BodyType) => {
    const { data } = await http.post(endpoint, body);
    return data;
  };

  return useMutationWrapper(mutationFn, { mutationKey: endpoint });
}
