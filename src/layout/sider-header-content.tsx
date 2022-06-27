import React from 'react';
import { Section } from '@layout/index';
import { LayoutProps } from '@layout/types';
import { HeaderContainer } from '@layout/components/header/header-container';
import { HeaderLeft } from '@layout/components/header/header-left';
import { HeaderRight } from '@layout/components/header/header-right';
import { Sidebar } from '@layout/components/sidebar/sidebar';
import { Box, Flex } from '@chakra-ui/react';

export const SiderHeaderContent = ({ sections }: LayoutProps) => {
  const sidebarWidth = 268;
  const headerHight = 68;

  return (
    <Flex as='main' minH={'100vh'} direction={'row'}>
      {/* Start Sider */}
      <Box
        as='aside'
        minW={sidebarWidth}
        borderEnd={'2px solid'}
        borderColor={'#e6e7ef'}
        h={'100vh'}
        overflowY={'auto'}
      >
        <Section sections={sections} name='sider'>
          <Sidebar />
        </Section>
      </Box>

      {/* End Sider */}

      <Flex as='main' minH={'100vh'} direction={'column'} flexGrow={1}>
        <Box as='header'>
          {/* Start Header */}
          <Section sections={sections} name='header'>
            <HeaderContainer>
              <HeaderLeft />
              <HeaderRight />
            </HeaderContainer>
          </Section>
          {/* End Header */}
        </Box>

        {/* Start Content */}
        <Box
          as='section'
          bgColor='gray.50'
          p={'40px'}
          h={`calc(100vh - ${headerHight}px)`}
          w={`calc(100vw - ${sidebarWidth}px)`}
          overflowY={'auto'}
        >
          <Section sections={sections} name='content' />
        </Box>
        {/* End Content */}
      </Flex>
    </Flex>
  );
};
