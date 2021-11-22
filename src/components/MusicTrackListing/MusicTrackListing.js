import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './MusicTrackListing.module.scss';
import MusicTrackCard from '../MusicTrackCard/MusicTrackCard';

const MusicTrackListing = ({ tracks }) => {
  const trackCards = tracks.map((t) => (
    <div className={styles.musicTrackCard} key={t.name}>
      <MusicTrackCard {...t} />
    </div>
  ));

  return <div className={styles.musicTrackListing}>{trackCards}</div>;
};

MusicTrackListing.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      artistName: PropTypes.string.isRequired,
      albumName: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

MusicTrackListing.defaultProps = {
  tracks: [],
};

export default MusicTrackListing;
