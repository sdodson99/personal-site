import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from 'widgets/layout';
import { BlogPostFeed } from 'features/view-blog-post-feed';

const Home: NextPage = () => {
  const posts = [
    {
      id: '1',
      title: 'Post Title 1',
      publishDate: new Date(2022, 7, 14),
      previewContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
      slug: 'post-title-1',
    },
    {
      id: '2',
      title: 'Post Title 2',
      publishDate: new Date(2022, 6, 1),
      previewContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
      slug: 'post-title-2',
    },
    {
      id: '3',
      title: 'Post Title 3',
      publishDate: new Date(2022, 3, 28),
      previewContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
      slug: 'post-title-3',
    },
    {
      id: '4',
      title: 'Post Title 4',
      publishDate: new Date(2022, 1, 12),
      previewContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
      slug: 'post-title-4',
    },
    {
      id: '5',
      title: 'Post Title 5',
      publishDate: new Date(2021, 11, 17),
      previewContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Lacus vel facilisis volutpat est velit egestas dui id ornare.',
      slug: 'post-title-5',
    },
  ];

  return (
    <div data-testid="HomePage">
      <Head>
        <title>Blog - Sean Dodson</title>
      </Head>

      <Layout>
        <div className="container-sm">
          <BlogPostFeed posts={posts} />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
