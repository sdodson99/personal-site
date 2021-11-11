import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

export const query = graphql`
  {
    allSpotifyTopTrack {
      nodes {
        name
        artistString
        album {
          name
          release_date
        }
        image {
          localFile {
            absolutePath
          }
        }
      }
      totalCount
    }
    siteBuildMetadata {
      buildTime
    }
  }
`;

const PersonalPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Personal - Sean Dodson</title>
      </Helmet>
      <div className="content-container">Work in progress...</div>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </Layout>
  );
};

PersonalPage.propTypes = {
  data: PropTypes.object,
};

export default PersonalPage;
