import Layout from '@components/common/layout';
import Page from '@components/common/page';
import HomeScreen from '@screens/home/screen';

export default function Home() {
  return (
    <Layout>
      <Page siteTitle='Home'>
        <HomeScreen />
      </Page>
    </Layout>
  );
}