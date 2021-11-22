import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './MusicTrackCard.module.scss';
import Card from '../Card/Card';
import ListenOnSpotifyButton from '../ListenOnSpotifyButton/ListenOnSpotifyButton';

const MusicTrackCard = ({ name, artistName, albumName, imageSrc, url }) => (
  <Card>
    <div className={styles.musicTrackCard}>
      <div className="flex justify-center">
        <img className={styles.albumImage} src={imageSrc} alt={albumName} />
      </div>
      <div className="mt-5">
        <div className="font-bold">{name}</div>
        <div className="mt-2 italic">{artistName}</div>
      </div>
      <div className="mt-5">
        <ListenOnSpotifyButton trackUrl={url} />
      </div>
    </div>
  </Card>
);

MusicTrackCard.propTypes = {
  name: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

MusicTrackCard.defaultProps = {};

export default MusicTrackCard;
