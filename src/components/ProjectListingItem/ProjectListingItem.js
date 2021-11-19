import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ProjectListingItem.module.scss';

const ProjectListingItem = ({
  name,
  imageSrc,
  description,
  repositoryUrl,
  isArchived,
  features,
  technologies,
}) => {
  const getSourceCodeLabel = () => {
    if (isArchived) {
      return 'Source Code (Archived):';
    }

    return 'Source Code:';
  };

  const hasFeatures = features?.length > 0;
  const featuresDisplay = features?.map((f) => <li key={f}>{f}</li>);

  // const hasTechnologies = technologies?.length > 0;

  return (
    <div className={styles.projectListingItem}>
      <div className={styles.projectLogo}>
        <img src={imageSrc} alt={name} />
      </div>
      <div className="mt-5 md:mt-0 md:ml-8">
        <h2 className="text-2xl text-center md:text-left">{name}</h2>
        <div className="mt-3 text-center font-thin md:text-left">
          {getSourceCodeLabel()}{' '}
          <a
            className="text-blue-500 hover:underline hover:text-blue-800"
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            {repositoryUrl}
          </a>
        </div>
        <p className="mt-5">{description}</p>
        {hasFeatures && (
          <div className="mt-3">
            <div className="italic">What can the user do?</div>
            <ul className="list-disc list-inside">{featuresDisplay}</ul>
          </div>
        )}
        {/* {hasTechnologies && (
          <div className="mt-3">
            <div className="italic">Technology</div>
          </div>
        )} */}
      </div>
    </div>
  );
};

ProjectListingItem.propTypes = {
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
};

ProjectListingItem.defaultProps = {
  isArchived: false,
  features: [],
  technologies: [],
};

export default ProjectListingItem;
