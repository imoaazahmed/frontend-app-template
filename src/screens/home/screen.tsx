import React from 'react';
import { Box, Link } from '@elements';

export default function HomeScreen(): JSX.Element {
  return (
    <Box>
      <Box>Home Page</Box>
      <Link href='/playground'>Go To Playground Page</Link>
    </Box>
  );
}
