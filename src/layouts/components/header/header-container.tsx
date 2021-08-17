import React from 'react';
import { Container, BoxProps } from '@elements';

export function HeaderContainer({ children }: BoxProps): JSX.Element {
  return <Container className='flex py-4'>{children}</Container>;
}
