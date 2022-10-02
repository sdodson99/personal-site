import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Layout } from 'widgets/layout';
import { BlogPost } from 'features/view-blog-post';
import { getBlogPostSlugs } from 'features/view-blog-post/model';

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

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getBlogPostSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug;

  return {
    props: { post: {} },
  };
};

export default BlogPostPage;
