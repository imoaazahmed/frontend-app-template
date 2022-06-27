import { useQueryClient, QueryKey } from 'react-query';

export const useGetQueryClientData = (identifier: QueryKey) => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData(identifier) as any;
};
