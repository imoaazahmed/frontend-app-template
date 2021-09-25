import React from 'react';
import { useGetPostsApi } from '@apis/post/use-get-post-api';
import { useCreatePostApi } from '@apis/post/use-create-post-api';
import { useTrans } from '@hooks/use-trans';
import { Container, Box, Button, Stack, Skeleton, CircularProgress } from '@mui/material';

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
      <Container maxWidth='xl'>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Container>
    );
  }

  return (
    <Container maxWidth='xl'>
      {isRefreshing && (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '1rem' }}>
          <CircularProgress size={20} />
        </Box>
      )}

      <Box>{trans('test_language')}</Box>
      {data && <Box>Data</Box>}
      {error && <Box>Error</Box>}

      <Stack direction='row' spacing={2} sx={{ mt: '1rem' }}>
        <Button variant='outlined' onClick={mutate} disabled={isRefreshing ? true : false}>
          {trans('txt_refresh')}
        </Button>

        <Button variant='contained' onClick={create}>
          {trans('txt_create')}
        </Button>
      </Stack>
    </Container>
  );
}
