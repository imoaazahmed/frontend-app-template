import React from 'react';
import { Box, Container, Link } from '@elements';

export default function HomeScreen(): JSX.Element {
  return (
    <Container>
      <Box>Home Page</Box>
      <Link href='/playground'>Go To Playground Page</Link>
    </Container>
  );
}
