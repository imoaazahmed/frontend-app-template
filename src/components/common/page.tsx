/*
 * ----------------------
 * DON'T MAKE ANY CHANGES
 * ----------------------
 */

import React, { createContext } from 'react';
import Head from 'next/head';
import Footer from '@components/footer';
import Header from '@components/header';
import PreHeader from '@components/preHeader';
import BottomMessage from '@components/bottomMessage';
import { Box } from '@elements';

export const LayoutContext = createContext<any>(null);

interface PageProps {
  siteTitle?: string;
  children?: React.ReactNode;
}

export default function Page(props: PageProps): JSX.Element {
  const { SITENAME } = process.env;
  const { siteTitle = SITENAME, children } = props;
  const contextValue: any = {};

  return (
    <LayoutContext.Provider value={contextValue}>
      <Box className='min-h-screen flex flex-col'>
        <Head>
          <title>{siteTitle}</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <PreHeader />
        <Header />

        <Box className='main-content flex-grow'>{children}</Box>

        <Footer />
        <BottomMessage />
      </Box>
    </LayoutContext.Provider>
  );
}
