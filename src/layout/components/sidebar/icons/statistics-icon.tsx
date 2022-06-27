import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const StatisticsIcon = (props: IconProps) => {
  return (
    <Icon width='22px' height='22px' viewBox='0 0 24 24' fill='#757575' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.7778 1H3.22222C1.99492 1 1 1.99492 1 3.22222V18.7778C1 20.0051 1.99492 21 3.22222 21H18.7778C20.0051 21 21 20.0051 21 18.7778V3.22222C21 1.99492 20.0051 1 18.7778 1ZM8.77778 15.4444H5.44444V5.44444H8.77778V15.4444ZM13.2222 15.4444H16.5556V9.88889H13.2222V15.4444Z'
        fill='inherit'
      />
    </Icon>
  );
};
