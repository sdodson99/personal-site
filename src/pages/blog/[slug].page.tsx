import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Layout } from '@/widgets/layout';
import { BlogPost } from '@/features/view-blog-post';
import { getBlogPostSlugs } from '@/features/view-blog-post/model';
import { getBlogPost } from '@/features/view-blog-post/model/get-blog-post';
import { DateTime } from 'luxon';
import { createBlogPostsDirectory } from '@/entities/blog-posts-directory';

type BlogPostPageProps = {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  content: string;
};

const BlogPostPage: NextPage<BlogPostPageProps> = ({
  title,
  description,
  slug,
  publishDate,
  content,
}) => {
  const formattedPublishDate = DateTime.fromFormat(
    publishDate,
    'yyyy-LL-dd'
  ).toJSDate();

  return (
    <div data-testid="BlogPostPage">
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: `https://seandodson.com/blog/${slug}`,
          type: 'article',
          article: {
            publishedTime: formattedPublishDate.toISOString(),
            section: 'Technology',
          },
        }}
      />
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
  const postsDirectoryPath = createBlogPostsDirectory(
    process.env.BLOG_CONTENT_MOCK
  );

  const slugs = await getBlogPostSlugs(postsDirectoryPath);

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

  const postsDirectoryPath = createBlogPostsDirectory(
    process.env.BLOG_CONTENT_MOCK
  );

  const post = await getBlogPost(postsDirectoryPath, slug);

  return {
    props: post,
  };
};

export default BlogPostPage;
