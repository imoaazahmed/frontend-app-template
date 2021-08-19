import { Layout, Section } from '../src/layouts';
import HomeScreen from '../src/screens/home/screen';

export default function Home(): JSX.Element {
  return (
    <Layout type='header_content_footer'>
      <Section name='content'>
        <HomeScreen />
      </Section>
    </Layout>
  );
}
