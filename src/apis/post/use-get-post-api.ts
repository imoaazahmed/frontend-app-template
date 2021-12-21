import http from '@services/http-service';
import { useQueryWrapper } from '@apis/use-api-wrapper';
import { fetchPostsRequest, fetchPostsSuccess } from '@redux/posts/reducer';
import { useAppDispatch } from '@redux/hooks';
import type { UseQueryResult } from 'react-query';
import type { AxiosResponse, AxiosError } from 'axios';

const endpoint = 'posts';

type ReturnType = UseQueryResult<AxiosResponse, AxiosError>;

export function useGetPostsApi(): ReturnType {
  const dispatch = useAppDispatch();

  const queryFn = async () => {
    dispatch(fetchPostsRequest());
    const { data } = await http.get(endpoint);
    dispatch(fetchPostsSuccess(data));
    return data;
  };

  return useQueryWrapper(endpoint, queryFn);
}
