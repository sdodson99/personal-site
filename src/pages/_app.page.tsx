import '@/shared/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { FirebaseAppProvider } from '@/shared/firebase';
import { MockTagProvider } from '@/shared/mocking';
import { AnalyticsProvider } from '@/shared/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAJvMQW4ljm5DCnrd9ilkIgJb77IZvxzXI',
  authDomain: 'personal-site-60896.firebaseapp.com',
  projectId: 'personal-site-60896',
  storageBucket: 'personal-site-60896.appspot.com',
  messagingSenderId: '1038050866165',
  appId: '1:1038050866165:web:d90b22e7f7ef7011b6a6bc',
  measurementId: 'G-6QL5D7KTPK',
};

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
      <MockTagProvider>
        <FirebaseAppProvider config={firebaseConfig}>
          <AnalyticsProvider>
            <Component {...pageProps} />
          </AnalyticsProvider>
        </FirebaseAppProvider>
      </MockTagProvider>
    </>
  );
};

export default App;
