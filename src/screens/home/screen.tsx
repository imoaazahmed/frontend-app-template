import React from 'react';
import { Container, Box, Button, Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function HomeScreen(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Container maxWidth='xl'>
      <Box>{t('test_language')}</Box>

      <Stack direction='row' spacing={2} mt='1rem'>
        <Button variant='outlined'>{t('txt_refresh')}</Button>

        <Button variant='contained'>{t('txt_create')}</Button>
      </Stack>
    </Container>
  );
}
