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
import { Box } from '@components/elements';

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
