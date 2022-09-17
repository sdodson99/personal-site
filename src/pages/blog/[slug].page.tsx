import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from 'widgets/layout';
import { BlogPost } from 'features/view-blog-post';

const BlogPostPage: NextPage = () => {
  const post = {
    title: 'Post Title 1',
    publishDate: new Date(2022, 7, 14),
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
  };

  return (
    <div data-testid="HomePage">
      <Head>
        <title>{`${post.title} - Sean Dodson`}</title>
      </Head>

      <Layout>
        <div className="container">
          <BlogPost {...post} backHref="/" />
        </div>
      </Layout>
    </div>
  );
};

export default BlogPostPage;
