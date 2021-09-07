import React from 'react';
import { Box, BoxProps } from '@elements';
import { SelectLanguage } from '@components/select-lang';

export function HeaderRight({ ...rest }: BoxProps): JSX.Element {
  return (
    <Box className='ms-auto' {...rest}>
      <SelectLanguage />
    </Box>
  );
}
