import React from 'react';
import { Box, BoxProps } from '@elements';

export function FooterLeft({ ...rest }: BoxProps): JSX.Element {
  return (
    <Box className='mr-auto' {...rest}>
      Footer Left
    </Box>
  );
}
