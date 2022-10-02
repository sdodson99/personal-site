import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { DateTime } from 'luxon';
import { Layout } from 'widgets/layout';
import {
  BlogPostFeed,
  BlogPostFeedModel,
  getBlogPostFeed,
} from 'features/view-blog-post-feed';

export type HomePageProps = {
  feed: BlogPostFeedModel;
};

const HomePage: NextPage<HomePageProps> = ({ feed }) => {
  const posts = feed.posts.map((p) => ({
    ...p,
    publishDate: DateTime.fromFormat(p.publishDate, 'yyyy-LL-dd').toJSDate(),
    href: `/blog/${p.slug}`,
  }));

  return (
    <div data-testid="HomePage">
      <Head>
        <title>Blog - Sean Dodson</title>
      </Head>

      <Layout>
        <div className="container container-sm">
          <BlogPostFeed posts={posts} />
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const feed = await getBlogPostFeed();

  return {
    props: {
      feed,
    },
  };
};

export default HomePage;
