import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';
import { graphql, useStaticQuery } from 'gatsby';

const YouTubePage = () => {
  const youtubeVideosData = useStaticQuery(graphql`
    {
      allYoutubeVideo(limit: 10) {
        nodes {
          title
          publishedAt
          videoId
          localThumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Helmet>
        <title>YouTube - Sean Dodson</title>
      </Helmet>
      <div className="content-container page-container">
        <PageHeading>YouTube</PageHeading>
        <div className="mt-14">
          <pre>{JSON.stringify(youtubeVideosData, null, 4)}</pre>
        </div>
      </div>
    </Layout>
  );
};

export default YouTubePage;
