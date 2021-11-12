import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './MusicTrackCard.module.scss';

const MusicTrackCard = ({ name, artistName, albumName, imageSrc }) => (
  <div className={styles.musicTrackCard}>
    <div className="flex justify-center">
      <img className={styles.albumImage} src={imageSrc} alt={albumName} />
    </div>
    <div className="mt-5">
      <div className="font-bold">{name}</div>
      <div className="mt-2 italic">{artistName}</div>
    </div>
  </div>
);

MusicTrackCard.propTypes = {
  name: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

MusicTrackCard.defaultProps = {};

export default MusicTrackCard;
