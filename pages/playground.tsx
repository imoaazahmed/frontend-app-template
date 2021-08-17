import Head from 'next/head';
import { Layout, Section } from 'src/layouts';
import PlayGroundScreen from '../src/screens/playground/screen';

export default function PlayGround(): JSX.Element {
  return (
    <>
      <Head>
        <title>Play ground</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <Layout>
        <Section name='content'>
          <PlayGroundScreen />
        </Section>
      </Layout>
    </>
  );
}
