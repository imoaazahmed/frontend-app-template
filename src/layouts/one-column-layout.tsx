import React from 'react';
import { Section } from '@layout';
import { Box } from '@elements';
import { FooterCenter } from '@components/footer/footer-center';
import { FooterContainer } from '@components/footer/footer-container';
import { FooterLeft } from '@components/footer/footer-left';
import { FooterRight } from '@components/footer/footer-right';
import { HeaderContainer } from '@components/header/header-container';
import { HeaderLeft } from '@components/header/header-left';
import { HeaderRight } from '@components/header/header-right';
import { PreHeader } from '@components/pre-header/pre-header';
import { BottomMessage } from '@components/bottom-message/bottom-message';
import { LayoutProps } from './types';

export function OneColumnLayout({ sections }: LayoutProps): JSX.Element {
  return (
    <Box className='min-h-screen flex flex-col'>
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

      {/* Start Content */}
      <Section sections={sections} name='content-wrapper'>
        <Box className='flex-grow'>
          <Section sections={sections} name='content' />
        </Box>
      </Section>
      {/* End Content */}

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
  );
}
