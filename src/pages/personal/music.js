import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import PageHeading from '@/components/PageHeading/PageHeading';
import MusicTrackListing from '@/components/MusicTrackListing/MusicTrackListing';

const MusicPage = () => {
  const tracksData = useStaticQuery(graphql`
    {
      allSpotifyTopTrack(sort: { fields: order }) {
        nodes {
          name
          artistString
          album {
            name
          }
          external_urls {
            spotify
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
  `);

  const tracks = tracksData.allSpotifyTopTrack.nodes.map((t) => ({
    name: t.name,
    artistName: t.artistString,
    albumName: t.album.name,
    imageSrc: t.image.localFile.childImageSharp.fluid.src,
    url: t.external_urls.spotify,
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

export default MusicPage;
