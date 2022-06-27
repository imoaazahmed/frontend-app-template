import React from 'react';
import { Container, ContainerProps } from '@chakra-ui/react';

export function HeaderContainer({ children }: ContainerProps): JSX.Element {
  return (
    <Container
      maxW='100%'
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      py={'7px'}
      px={'2rem'}
      borderBottom={'2px solid'}
      borderColor={'#e6e7ef'}
    >
      {children}
    </Container>
  );
}
