import React from 'react';
import { Box, BoxProps } from '@elements';

export function FooterRight({ ...rest }: BoxProps): JSX.Element {
  return (
    <Box className='ml-auto' {...rest}>
      Footer Right
    </Box>
  );
}
