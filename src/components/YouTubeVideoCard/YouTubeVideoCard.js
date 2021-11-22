import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './YouTubeVideoCard.module.scss';
import Card from '../Card/Card';

const YouTubeVideoCard = ({ id, title, thumbnailSrc }) => {
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  return (
    <Card>
      <div className={styles.youtubeVideoCard}>
        <div>
          <div className={styles.thumbnail}>
            <img src={thumbnailSrc} alt={title} />
          </div>
          <h2 className="text-2xl mt-5">{title}</h2>
        </div>
        <a
          className="btn btn-primary mt-5"
          href={videoUrl}
          target="_blank"
          rel="noreferrer"
        >
          Watch
        </a>
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
