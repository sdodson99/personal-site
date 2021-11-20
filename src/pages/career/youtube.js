import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';
import { graphql, useStaticQuery } from 'gatsby';
import YouTubeVideoListing from '@/components/YouTubeVideoListing/YouTubeVideoListing';

const YouTubePage = () => {
  const youTubeVideosData = useStaticQuery(graphql`
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

  const youTubeVideos = youTubeVideosData.allYoutubeVideo.nodes.map((y) => ({
    id: y.videoId,
    title: y.title,
    thumbnailSrc: y.localThumbnail.childImageSharp.fluid.src,
  }));

  return (
    <Layout>
      <Helmet>
        <title>YouTube - Sean Dodson</title>
      </Helmet>
      <div className="content-container page-container">
        <PageHeading>YouTube</PageHeading>
        <p className="mt-8">
          {
            'Check out my recent YouTube videos. Be sure to leave a like and subscribe as well!'
          }
        </p>
        <div className="mt-8">
          <YouTubeVideoListing videos={youTubeVideos} />
        </div>
      </div>
    </Layout>
  );
};

export default YouTubePage;
