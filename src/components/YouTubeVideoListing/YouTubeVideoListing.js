import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './YouTubeVideoListing.module.scss';
import YouTubeVideoCard from '../YouTubeVideoCard/YouTubeVideoCard';

const YouTubeVideoListing = ({ videos }) => {
  const videoCards = videos.map((v) => (
    <div className={styles.youtubeVideoCard} key={v.id}>
      <YouTubeVideoCard {...v} />
    </div>
  ));

  return <div className={styles.youtubeVideoListing}>{videoCards}</div>;
};

YouTubeVideoListing.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      thumbnailSrc: PropTypes.string.isRequired,
    })
  ),
};

YouTubeVideoListing.defaultProps = {
  videos: [],
};

export default YouTubeVideoListing;
