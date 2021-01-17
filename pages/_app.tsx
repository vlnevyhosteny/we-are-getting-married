import type { AppProps } from 'next/app';

function WeAreGettingMarriedApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default WeAreGettingMarriedApp;
