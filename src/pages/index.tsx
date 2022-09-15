import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../widgets/layout';

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

      <Layout>Hello world!</Layout>
    </div>
  );
};

export default Home;
