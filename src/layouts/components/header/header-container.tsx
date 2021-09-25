import React from 'react';
import { Container } from '@mui/material';

interface HeaderContainerProps {
  children: React.ReactNode;
}

export function HeaderContainer({ children }: HeaderContainerProps): JSX.Element {
  return (
    <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'center', py: '1rem' }}>
      {children}
    </Container>
  );
}
