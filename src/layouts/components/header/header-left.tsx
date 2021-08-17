import React from 'react';
import { Box, BoxProps } from '@elements';

export function HeaderLeft({ ...rest }: BoxProps): JSX.Element {
  return (
    <Box className='mr-auto' {...rest}>
      Header Left
    </Box>
  );
}
