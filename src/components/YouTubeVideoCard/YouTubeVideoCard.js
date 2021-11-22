import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './YouTubeVideoCard.module.scss';
import Card from '../Card/Card';
import WatchOnYouTubeButton from '../WatchOnYouTubeButton/WatchOnYouTubeButton';

const YouTubeVideoCard = ({ id, title, thumbnailSrc }) => {
  return (
    <Card>
      <div className={styles.youtubeVideoCard}>
        <div>
          <div className={styles.thumbnail}>
            <img src={thumbnailSrc} alt={title} />
          </div>
          <h2 className="text-2xl mt-5">{title}</h2>
        </div>
        <div className="mt-5">
          <WatchOnYouTubeButton videoId={id} />
        </div>
      </div>
    </Card>
  );
};

YouTubeVideoCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnailSrc: PropTypes.string.isRequired,
};

YouTubeVideoCard.defaultProps = {};

export default YouTubeVideoCard;
