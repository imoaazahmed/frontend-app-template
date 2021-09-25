import React from 'react';
import { Container } from '@mui/material';

interface FooterContainerProps {
  children: React.ReactNode;
}

export function FooterContainer({ children }: FooterContainerProps): JSX.Element {
  return (
    <Container maxWidth='xl' sx={{ display: 'flex', py: '1rem' }}>
      {children}
    </Container>
  );
}
