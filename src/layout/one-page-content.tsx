import React from 'react';
import { Section } from '@layout/index';
import { LayoutProps } from '@layout/types';
import { Box } from '@chakra-ui/react';

export const OnePageContent = ({ sections }: LayoutProps) => {
  return (
    <Box as='main'>
      {/* Start Content */}
      <Box as='section' minH={'100vh'}>
        <Section sections={sections} name='content' />
      </Box>
      {/* End Content */}
    </Box>
  );
};
