import type { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';

function WeAreGettingMarriedApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default WeAreGettingMarriedApp;
