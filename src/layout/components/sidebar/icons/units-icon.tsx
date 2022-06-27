import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const UnitsIcon = (props: IconProps) => {
  return (
    <Icon width='24px' height='24px' viewBox='0 0 24 24' fill='#757575' {...props}>
      <path
        d='M14.9417 7.17725H6.544C5.6123 7.17725 4.80402 7.82059 4.59499 8.72854L2.56375 17.5514C2.27529 18.8044 3.22702 20.0001 4.51277 20.0001H16.9729C18.2587 20.0001 19.2104 18.8044 18.922 17.5514L16.8907 8.72854C16.6817 7.82059 15.8734 7.17725 14.9417 7.17725Z'
        fill='inherit'
      />
      <path
        d='M13.6571 3H7.82855V8.82857H13.6571V3Z'
        stroke='inherit'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Icon>
  );
};
