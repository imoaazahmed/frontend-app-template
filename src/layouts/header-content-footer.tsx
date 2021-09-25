import React from 'react';
import { Section } from 'src/layouts';
import { LayoutProps } from '@layouts/types';
import { FooterCenter } from '@layouts/components/footer/footer-center';
import { FooterContainer } from '@layouts/components/footer/footer-container';
import { FooterLeft } from '@layouts/components/footer/footer-left';
import { FooterRight } from '@layouts/components/footer/footer-right';
import { HeaderContainer } from '@layouts/components/header/header-container';
import { HeaderLeft } from '@layouts/components/header/header-left';
import { HeaderRight } from '@layouts/components/header/header-right';
import { PreHeader } from '@layouts/components/pre-header/pre-header';
import { BottomMessage } from '@layouts/components/bottom-message/bottom-message';
import { Box } from '@mui/material';

export function HeaderContentFooter({ sections }: LayoutProps): JSX.Element {
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

      {/* Start Content */}
      <Box component='section' sx={{ flexGrow: 1, py: '1rem' }}>
        <Section sections={sections} name='content' />
      </Box>
      {/* End Content */}

      <Box component='footer'>
        {/* Start Footer */}
        <Section sections={sections} name='footer'>
          <FooterContainer>
            <FooterLeft />
            <FooterCenter />
            <FooterRight />
          </FooterContainer>
        </Section>
        {/* End Footer */}

        {/* Start Bottom Message */}
        <Section sections={sections} name='bottom-message'>
          <BottomMessage />
        </Section>
        {/* End Bottom Message */}
      </Box>
    </Box>
  );
}
