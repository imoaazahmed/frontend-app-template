import { Page, Section } from '@layout';
import HomeScreen from '@screens/home/screen';

export default function Home(): JSX.Element {
  return (
    <Page layout='one-column'>
      <Section name='content'>
        <HomeScreen />
      </Section>
    </Page>
  );
}
