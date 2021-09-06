import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <GlobalStyles />
    </>
  );
}

export default MyApp
