import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ExperienceListing.module.scss';
import ExperienceListingItem from '../ExperienceListingItem/ExperienceListingItem';

const ExperienceListing = ({ experiences }) => {
  const experienceListingItems = experiences.map((e) => (
    <div className={styles.experienceListingItem} key={e.name}>
      <ExperienceListingItem {...e} />
    </div>
  ));

  return (
    <div className={styles.experienceListing}>{experienceListingItems}</div>
  );
};

ExperienceListing.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      location: PropTypes.string,
      websiteUrl: PropTypes.string,
      imageSrc: PropTypes.string,
      position: PropTypes.string,
      startDate: PropTypes.object,
      endDate: PropTypes.object,
      isCurrent: PropTypes.bool,
      tasks: PropTypes.arrayOf(PropTypes.string),
    })
  ),
};

ExperienceListing.defaultProps = {
  experiences: [],
};

export default ExperienceListing;
