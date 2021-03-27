// +++ DO NOT EDIT +++ //
// ___ description ___ //
// ___ description ___ //
// ___ description ___ //
// +++++++++++++++++++ //

import Head from "next/head";
import React from "react";
import Footer from "@components/footer";
import Header from "@components/header";

interface Props {
  siteTitle?: string;
  children: React.ReactNode;
}

export default function Page(props: Props) {
  const { SITENAME } = process.env;
  const { siteTitle = SITENAME, children } = props;

  return (
    <main className="min-h-screen flex flex-col">
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
}
