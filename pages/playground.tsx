import { Page, Section } from '@layout';
import PlayGroundScreen from '@screens/playground/screen';
import Head from 'next/head';

export default function PlayGround(): JSX.Element {
  return (
    <>
      <Head>
        <title>Play ground</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Page layout='one-column'>
        <Section name='content'>
          <PlayGroundScreen />
        </Section>
      </Page>
    </>
  );
}
