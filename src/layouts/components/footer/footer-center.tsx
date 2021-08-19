import React from 'react';
import { Box, BoxProps } from '@elements';

export function FooterCenter({ ...rest }: BoxProps): JSX.Element {
  return (
    <Box className='mx-auto' {...rest}>
      Footer Center
    </Box>
  );
}
