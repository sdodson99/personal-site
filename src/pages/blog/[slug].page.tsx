import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Layout } from 'widgets/layout';
import { BlogPost } from 'features/view-blog-post';
import { getBlogPostSlugs } from 'features/view-blog-post/model';
import { getBlogPost } from 'features/view-blog-post/model/get-blog-post';
import { DateTime } from 'luxon';

type BlogPostPageProps = {
  title: string;
  publishDate: string;
  content: string;
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({
  title,
  publishDate,
  content,
}) => {
  const formattedPublishDate = DateTime.fromFormat(
    publishDate,
    'yyyy-LL-dd'
  ).toJSDate();

  return (
    <div data-testid="BlogPostPage">
      <Head>
        <title>{`${title} - Sean Dodson`}</title>
      </Head>

      <Layout>
        <div className="container">
          <BlogPost
            title={title}
            publishDate={formattedPublishDate}
            content={content}
            backHref="/"
          />
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

  if (!slug || Array.isArray(slug)) {
    throw new Error('Slug must be a string.');
  }

  const post = await getBlogPost(slug);

  return {
    props: post,
  };
};

export default BlogPostPage;
