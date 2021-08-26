import React from 'react';
import { Box, Container } from '@elements';
import { useGetPostsApi } from '@apis/post/use-get-post-api';
import { Button, Skeleton as AntdSkeleton, Space } from 'antd';
import { useCreatePostApi } from '@apis/post/use-create-post-api';

export default function HomeScreen(): JSX.Element {
  const {
    data,
    error,
    mutate,
    isInitialLoading,
    isRefreshing,
  } = useGetPostsApi();

  const create = async () => {
    const postData = {
      title: 'foo',
      body: 'bar',
      userId: 3,
    };

    await useCreatePostApi(postData);
  };

  if (isInitialLoading) {
    return (
      <Container className='py-8'>
        <AntdSkeleton.Input active size='small' className='w-full' />
      </Container>
    );
  }

  return (
    <Container className='py-8'>
      {isRefreshing && <Box className='mb-4'>Refreshing...</Box>}

      {data && <Box>Data</Box>}
      {error && <Box>Error</Box>}

      <Space size='middle'>
        <Button type='default' onClick={mutate} className='mt-8'>
          Refresh
        </Button>

        <Button type='primary' onClick={create} className='mt-8'>
          Create
        </Button>
      </Space>
    </Container>
  );
}
