import { Layout, Section } from 'src/layouts';
import HomeScreen from '@screens/home/screen';

export default function Home(): JSX.Element {
  return (
    <Layout type='one-column'>
      <Section name='content'>
        <HomeScreen />
      </Section>
    </Layout>
  );
}
