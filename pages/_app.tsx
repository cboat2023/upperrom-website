import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// This file is used to initialize pages. You can add global styles or scripts here.
// It wraps your application with common providers or layout components.
// The Head component allows you to modify the <head> of your HTML document, such as adding fonts or metadata.
// The App component receives pageProps which can be used to pass initial data to your pages.