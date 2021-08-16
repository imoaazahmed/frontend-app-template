import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '@lib/gtag';

// Redux
import store from '@redux/store';
import { Provider } from 'react-redux';

// CSS
import 'antd/dist/antd.css';
import 'tailwindcss/tailwind.css';
import '@styles/globals.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  // Google Analytics
  useEffect(() => {
    const handleRouteChange = (url: string) => gtag.pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
