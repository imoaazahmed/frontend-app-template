import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import * as gtag from '../src/lib/gtag';

// React query
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// CASL
import { AbilityContext } from '../src/configs/can';
import { ability } from '../src/configs/ability';

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from '../src/theme';

// Redux
import store from '../src/redux/store';
import { Provider } from 'react-redux';

// CSS
import '../styles/globals.css';

// Trans
import '../src/lib/i18n';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp(props: AppProps): JSX.Element {
  const { Component, pageProps } = props;
  const router = useRouter();

  // Google Analytics
  useEffect(() => {
    const handleRouteChange = (url: string) => gtag.pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <AbilityContext.Provider value={ability}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={chakraTheme}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ChakraProvider>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AbilityContext.Provider>
  );
}

export default MyApp;
