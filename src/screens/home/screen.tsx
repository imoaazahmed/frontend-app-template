import React from 'react';
import { useGetPostsApi } from '@apis/post/use-get-post-api';
import { Container, Box, Button, Stack, Skeleton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCreatePostApi } from '@apis/post/use-create-post';
import { TestIcon } from 'src/icons/example';

export default function HomeScreen(): JSX.Element {
  const { t: trans } = useTranslation();

  const { isLoading, data, error, refetch, isFetching } = useGetPostsApi();
  const { mutate: createPost } = useCreatePostApi();

  const create = () => {
    const postData = {
      title: 'foo',
      body: 'bar',
      userId: '3',
    };

    createPost(postData);
  };

  if (isLoading) {
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
      <Box>{trans('test_language')}</Box>
      {data && <Box>Data</Box>}
      {error && <Box>Error</Box>}

      <TestIcon />

      <Stack direction='row' spacing={2} mt='1rem'>
        <Button variant='outlined' onClick={() => refetch()} disabled={isFetching}>
          {trans('txt_refresh')}
        </Button>

        <Button variant='contained' onClick={create}>
          {trans('txt_create')}
        </Button>
      </Stack>
    </Container>
  );
}
