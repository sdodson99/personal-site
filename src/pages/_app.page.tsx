import '@/shared/styles/globals.css';
import type { AppProps } from 'next/app';
import { FirebaseAppProvider } from '@/shared/firebase';
import { MockTagProvider } from '@/shared/mocking';
import { AnalyticsProvider } from '@/shared/analytics';
import { NextSeo } from 'next-seo';

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
      <NextSeo
        titleTemplate="%s - Sean Dodson"
        defaultTitle="Sean Dodson"
        description="Sean Dodson's personal site for blogging and career related content."
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
        openGraph={{
          type: 'website',
          images: [
            {
              url: 'https://seandodson.com/logo.png',
              width: 300,
              height: 300,
              alt: 'Sean Dodson Logo',
              type: 'image/png',
            },
          ],
        }}
      />
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
