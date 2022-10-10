import Link from 'next/link';
import { Layout } from '@/widgets/layout';

const NotFoundPage = () => (
  <Layout>
    <div className="container text-center">
      <h1>Uh-oh! This page does not exist.</h1>
      <div className="mt-5">
        <Link href="/">
          <a className="link">Back to home page</a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
