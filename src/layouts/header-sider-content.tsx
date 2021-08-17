import React from 'react';
import { Layout } from 'antd';
import { Section } from 'src/layouts';
import { LayoutProps } from '@layouts/types';
import { HeaderContainer } from '@layouts/components/header/header-container';
import { HeaderLeft } from '@layouts/components/header/header-left';
import { HeaderRight } from '@layouts/components/header/header-right';
import { PreHeader } from '@layouts/components/pre-header/pre-header';

export function HeaderSiderContent({ sections }: LayoutProps): JSX.Element {
  return (
    <Layout className='min-h-screen flex flex-col'>
      <Layout.Header>
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
      </Layout.Header>

      <Layout>
        {/* Start Sider */}
        <Layout.Sider>Sider</Layout.Sider>
        {/* End Sider */}

        {/* Start Content */}
        <Layout.Content>
          <Section sections={sections} name='content' />
        </Layout.Content>
        {/* End Content */}
      </Layout>
    </Layout>
  );
}
