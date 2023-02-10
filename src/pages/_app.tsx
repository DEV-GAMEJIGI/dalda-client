import { AppProps } from 'next/app';
import GlobalStyles from '~/components/base/GlobalStyles';
import { useAuthEffect } from '~/hooks/useAuthEffect';

export default function App({ Component, pageProps }: AppProps) {
  useAuthEffect(pageProps.user);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
