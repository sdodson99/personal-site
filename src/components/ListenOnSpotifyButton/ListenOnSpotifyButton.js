import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ListenOnSpotifyButton.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const ListenOnSpotifyButton = ({ trackUrl }) => (
  <a
    className={styles.listenOnSpotifyButton}
    href={trackUrl}
    target="_blank"
    rel="noreferrer"
  >
    <span>Listen on </span>
    <StaticImage
      className="ml-1"
      src="../../images/spotify-text.png"
      height={20}
    />
  </a>
);

ListenOnSpotifyButton.propTypes = {
  trackUrl: PropTypes.string.isRequired,
};

ListenOnSpotifyButton.defaultProps = {};

export default ListenOnSpotifyButton;
