import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';
import GlobalStyles from '~/components/base/GlobalStyles';
import { useAuthEffect } from '~/hooks/useAuthEffect';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  useAuthEffect(pageProps.user);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyles />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
