import { AppProps } from 'next/app';

import { NextUIProvider } from '@nextui-org/react';

import { darkTheme } from '../themes';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
