import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PageHeading from '@/components/PageHeading/PageHeading';
import MusicTrackListing from '@/components/MusicTrackListing/MusicTrackListing';

export const query = graphql`
  {
    allSpotifyTopTrack(limit: 10, sort: { fields: order }) {
      nodes {
        name
        artistString
        album {
          name
        }
        image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

const MusicPage = ({ data }) => {
  const tracks = data.allSpotifyTopTrack.nodes.map((t) => ({
    name: t.name,
    artistName: t.artistString,
    albumName: t.album.name,
    imageSrc: t.image.localFile.childImageSharp.fluid.src,
  }));

  return (
    <Layout>
      <Helmet>
        <title>Music - Sean Dodson</title>
      </Helmet>
      <div className="content-container page-container">
        <PageHeading>Music</PageHeading>
        <p className="mt-8">
          {
            "Check out the top songs I've been listening to in the past month. Feel free to judge my music taste. This content is pulled directly from my Spotify account."
          }
        </p>
        <div className="mt-8">
          <MusicTrackListing tracks={tracks} />
        </div>
      </div>
    </Layout>
  );
};

MusicPage.propTypes = {
  data: PropTypes.object,
};

export default MusicPage;
