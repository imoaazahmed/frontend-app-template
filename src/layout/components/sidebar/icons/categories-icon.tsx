import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

export const CategoriesIcon = (props: IconProps) => {
  return (
    <Icon width='24px' height='24px' viewBox='0 0 24 24' fill='#757575' {...props}>
      <path
        d='M19 3H3C1.89543 3 1 3.89543 1 5C1 6.10457 1.89543 7 3 7H19C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3Z'
        fill='inherit'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19 17.25C19 18.2165 18.2041 19 17.2222 19H4.77778C3.79594 19 3 18.2165 3 17.25V8.5H19V17.25ZM8.33333 11.7308C8.33333 11.2847 8.7313 10.9231 9.22222 10.9231H12.7778C13.2687 10.9231 13.6667 11.2847 13.6667 11.7308C13.6667 12.1768 13.2687 12.5385 12.7778 12.5385H9.22222C8.7313 12.5385 8.33333 12.1768 8.33333 11.7308Z'
        fill='inherit'
      />
      <path d='M19 6.75C19 5.7835 18.2041 5 17.2222 5H4.77778C3.79594 5 3 5.7835 3 6.75H19Z' fill='inherit' />
    </Icon>
  );
};
