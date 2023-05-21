import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from "next";


type NextpageWithLayout = AppProps & {
   getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout;
}

 function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout( 
  <Component {...pageProps} />
  );
}

export default App;
