import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './WatchOnYouTubeButton.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const WatchOnYouTubeButton = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <a
      className={styles.watchOnYouTubeButton}
      href={videoUrl}
      target="_blank"
      rel="noreferrer"
    >
      <span>Watch on </span>
      <StaticImage
        className="ml-1"
        src="../../images/youtube-text.png"
        placeholder="none"
        alt="YouTube"
        height={20}
      />
    </a>
  );
};

WatchOnYouTubeButton.propTypes = {
  videoId: PropTypes.string.isRequired,
};

WatchOnYouTubeButton.defaultProps = {};

export default WatchOnYouTubeButton;
