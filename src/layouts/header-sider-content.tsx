import React from 'react';
import { Section } from 'src/layouts';
import { LayoutProps } from '@layouts/types';
import { HeaderContainer } from '@layouts/components/header/header-container';
import { HeaderLeft } from '@layouts/components/header/header-left';
import { HeaderRight } from '@layouts/components/header/header-right';
import { PreHeader } from '@layouts/components/pre-header/pre-header';
import { Box } from '@mui/material';

export function HeaderSiderContent({ sections }: LayoutProps): JSX.Element {
  return (
    <Box component='main' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box component='header'>
        {/* Start Pre Header */}
        <Section sections={sections} name='pre-header'>
          <PreHeader />
        </Section>
        {/* End Pre Header */}

        {/* Start Header */}
        <Section sections={sections} name='header'>
          <HeaderContainer>
            <HeaderLeft />
            <HeaderRight />
          </HeaderContainer>
        </Section>
        {/* End Header */}
      </Box>

      <Box component='main' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'row' }}>
        {/* Start Sider */}
        <Box component='aside'>Sider</Box>
        {/* End Sider */}

        {/* Start Content */}
        <Box component='section'>
          <Section sections={sections} name='content' />
        </Box>
        {/* End Content */}
      </Box>
    </Box>
  );
}
