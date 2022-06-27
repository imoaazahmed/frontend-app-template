import { Layout, Section } from '../src/layout';
import HomeScreen from '../src/screens/home/screen';

export default function Home(): JSX.Element {
  return (
    <Layout type='sider_header_content'>
      <Section name='content'>
        <HomeScreen />
      </Section>
    </Layout>
  );
}
