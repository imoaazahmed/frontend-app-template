import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const InvitationsIcon = (props: IconProps) => {
  return (
    <Icon width='22px' height='22px' viewBox='0 0 24 24' fill='#757575' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.8846 2H2.11538C1.22323 2 0.5 2.53726 0.5 3.2V18.8C0.5 19.4627 1.22323 20 2.11538 20H15.5C16.3922 20 21.5 15.6627 21.5 15L21.5 3.2C21.5 2.53726 20.7768 2 19.8846 2ZM5 8.75C5 8.33579 5.33579 8 5.75 8H16.25C16.6642 8 17 8.33579 17 8.75C17 9.16421 16.6642 9.5 16.25 9.5H5.75C5.33579 9.5 5 9.16421 5 8.75ZM5.75 12.5C5.33579 12.5 5 12.8358 5 13.25C5 13.6642 5.33579 14 5.75 14H10.25C10.6642 14 11 13.6642 11 13.25C11 12.8358 10.6642 12.5 10.25 12.5H5.75Z'
        fill='inherit'
      />
    </Icon>
  );
};
