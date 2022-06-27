import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const TestIcon = (props: IconProps) => {
  return (
    <Icon width='24px' height='24px' viewBox='0 0 24 24' fill='#757575' {...props}>
      <path
        d='M3 17H5V21.081L10.101 17H15C16.103 17 17 16.103 17 15V7C17 5.897 16.103 5 15 5H3C1.897 5 1 5.897 1 7V15C1 16.103 1.897 17 3 17Z'
        fill='inherit'
      />
      <path
        d='M19 1H7C5.897 1 5 1.897 5 3H17C18.103 3 19 3.897 19 5V13C20.103 13 21 12.103 21 11V3C21 1.897 20.103 1 19 1Z'
        fill='inherit'
      />
    </Icon>
  );
};
