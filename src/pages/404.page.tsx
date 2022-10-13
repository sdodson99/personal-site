import Link from 'next/link';
import { Layout } from '@/widgets/layout';
import { NextSeo } from 'next-seo';

const NotFoundPage = () => (
  <div data-testid="NotFoundPage">
    <NextSeo title="Oops!" />
    <Layout>
      <div className="container text-center">
        <h1>Oops! This page does not exist.</h1>
        <div className="mt-5">
          <Link href="/">
            <a className="link">Back to home page</a>
          </Link>
        </div>
      </div>
    </Layout>
  </div>
);

export default NotFoundPage;
