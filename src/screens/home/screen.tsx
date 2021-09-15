import React from 'react';
import { Box, Container } from '@elements';
import { useGetPostsApi } from '@apis/post/use-get-post-api';
import { Button, Skeleton as AntdSkeleton, Space } from 'antd';
import { useCreatePostApi } from '@apis/post/use-create-post-api';
import { useTrans } from '@hooks/use-trans';

export default function HomeScreen(): JSX.Element {
  const { data, error, mutate, isInitialLoading, isRefreshing } = useGetPostsApi();
  const trans = useTrans();

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
      <Container className='py-xl'>
        <AntdSkeleton.Input active size='small' className='w-full' />
      </Container>
    );
  }

  return (
    <Container className='py-xl'>
      {isRefreshing && <Box className='mb-md'>{trans('txt_refreshing')}</Box>}

      <Box>{trans('test_language')}</Box>
      {data && <Box>Data</Box>}
      {error && <Box>Error</Box>}

      <Space size='middle'>
        <Button type='default' onClick={mutate} className='mt-lg'>
          {trans('txt_refresh')}
        </Button>

        <Button type='primary' onClick={create} className='mt-lg'>
          {trans('txt_create')}
        </Button>
      </Space>
    </Container>
  );
}
