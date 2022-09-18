import 'shared/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { FirebaseProvider } from 'shared/firebase';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Sean Dodson</title>
        <meta
          name="description"
          content="Sean Dodson's personal site for blogging and career related content."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FirebaseProvider>
        <Component {...pageProps} />
      </FirebaseProvider>
    </>
  );
};

export default App;
