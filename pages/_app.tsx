import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '@lib/gtag';

// CSS
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

  return <Component {...pageProps} />;
}

export default App;
