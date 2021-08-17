import React from 'react';
import { Box, BoxProps } from '@elements';

export function HeaderRight({ ...rest }: BoxProps): JSX.Element {
  return (
    <Box className='ml-auto' {...rest}>
      Header Right
    </Box>
  );
}
