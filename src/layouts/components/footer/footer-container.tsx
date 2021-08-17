import React from 'react';
import { Box, BoxProps } from '@elements';

export function FooterContainer({ children }: BoxProps): JSX.Element {
  return <Box className='flex py-4 px-8'>{children}</Box>;
}
