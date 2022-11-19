import Link from 'next/link';
import { Layout } from '@/widgets/layout';
import { NextSeo } from 'next-seo';

const NotFoundPage = () => (
  <div data-testid="NotFoundPage">
    <NextSeo title="Oops!" description="This page does not exist." />
    <Layout>
      <div className="container text-center">
        <h1>Oops! This page does not exist.</h1>
        <div style={{ marginTop: '1rem' }}>
          <Link href="/">
            <a className="link">Back to home page</a>
          </Link>
        </div>
      </div>
    </Layout>
  </div>
);

export default NotFoundPage;
