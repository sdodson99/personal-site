import { GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { DateTime } from 'luxon';
import { Layout } from '@/widgets/layout';
import {
  BlogPostFeed,
  BlogPostFeedModel,
  getBlogPostFeed,
} from '@/features/view-blog-post-feed';
import { createBlogPostsDirectory } from '@/entities/blog-posts-directory';

export type HomePageProps = {
  feed: BlogPostFeedModel;
};

const HomePage: NextPage<HomePageProps> = ({ feed }) => {
  const posts = feed.posts.map((p) => ({
    ...p,
    id: p.slug,
    publishDate: DateTime.fromFormat(p.publishDate, 'yyyy-LL-dd').toJSDate(),
    href: `/blog/${p.slug}`,
  }));

  return (
    <div data-testid="HomePage">
      <NextSeo
        title="Blog"
        description="Latest Sean Dodson blog posts"
        openGraph={{
          url: 'https://seandodson.com',
        }}
      />
      <Layout>
        <div className="container container-sm">
          <h1 className="sr-only">Sean Dodson Home Page</h1>
          <BlogPostFeed posts={posts} />
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const postsDirectoryPath = createBlogPostsDirectory(
    process.env.BLOG_CONTENT_MOCK
  );

  const feed = await getBlogPostFeed(postsDirectoryPath);

  return {
    props: {
      feed,
    },
  };
};

export default HomePage;
