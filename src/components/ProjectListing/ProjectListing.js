import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ProjectListing.module.scss';
import ProjectListingItem from '../ProjectListingItem/ProjectListingItem';

const ProjectListing = ({ projects }) => {
  const projectListingItems = projects.map((p) => (
    <div key={p.name} className={styles.projectListingItem}>
      <ProjectListingItem {...p} />
    </div>
  ));

  return <div className={styles.projectListing}>{projectListingItems}</div>;
};

ProjectListing.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      repositoryUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isArchived: PropTypes.bool,
      features: PropTypes.arrayOf(PropTypes.string),
      technologies: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          imageSrc: PropTypes.string.isRequired,
          subCategories: PropTypes.arrayOf(PropTypes.string),
        })
      ),
    })
  ),
};

ProjectListing.defaultProps = {
  projects: [],
};

export default ProjectListing;
