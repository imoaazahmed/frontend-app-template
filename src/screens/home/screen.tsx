import React from 'react';
import { Box, Container } from '@elements';
import { useGetPostsApi } from 'src/api/use-post-apis';
import { Button, Skeleton as AntdSkeleton, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function HomeScreen(): JSX.Element {
  const {
    data,
    error,
    mutate,
    isInitialLoading,
    isRefreshing,
  } = useGetPostsApi();

  if (isInitialLoading) {
    return (
      <Container className='py-8'>
        <AntdSkeleton.Input active size='small' className='w-full' />
      </Container>
    );
  }

  return (
    <Container className='py-8'>
      {isRefreshing && (
        <Box className='mb-8 text-center'>
          <Spin indicator={antIcon} />
        </Box>
      )}

      {data && <Box>Data</Box>}
      {error && <Box>Error</Box>}

      <Button type='primary' onClick={() => mutate()} className='mt-8'>
        Refresh
      </Button>
    </Container>
  );
}
