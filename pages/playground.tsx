import Layout from '@components/common/layout';
import Page from '@components/common/page';
import PlayGroundScreen from '@screens/playground/screen';

export default function PlayGround(): JSX.Element {
  return (
    <Layout>
      <Page siteTitle='Play Ground'>
        <PlayGroundScreen />
      </Page>
    </Layout>
  );
}
