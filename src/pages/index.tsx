import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../widgets/Footer/Footer';
import Header from '../widgets/Header/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Sean Dodson's personal site for blogging and career related content."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Footer />
    </div>
  );
};

export default Home;
