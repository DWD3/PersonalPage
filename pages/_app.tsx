import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {


  useEffect(() => {
  const use = async () => {
    // @ts-ignore
    (await import('tw-elements')).default;
      };
      use();
    }, []);
  
    return <Component {...pageProps} />;
  }
  