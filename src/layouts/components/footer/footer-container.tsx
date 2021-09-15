import React from 'react';
import { Container, BoxProps } from '@elements';

export function FooterContainer({ children }: BoxProps): JSX.Element {
  return <Container className='flex py-md'>{children}</Container>;
}
