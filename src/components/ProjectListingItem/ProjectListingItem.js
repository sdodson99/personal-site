import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ProjectListingItem.module.scss';

const ProjectListingItem = ({
  name,
  imageSrc,
  description,
  repositoryUrl,
  projectUrl,
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

  const hasTechnologies = technologies?.length > 0;
  const technologyImages = technologies.map((t) => (
    <img
      className={styles.technologyImage}
      key={t.name}
      alt={t.name}
      src={t.imageSrc}
      title={t.name}
    />
  ));

  return (
    <div className={styles.projectListingItem}>
      <div className={styles.projectLogo}>
        <img src={imageSrc} alt={name} />
      </div>
      <div className="mt-5 md:mt-0 md:ml-8">
        <h2 className="text-2xl text-center md:text-left">{name}</h2>
        <div className="mt-3 text-center font-thin md:text-left">
          <div className="md:flex">
            <div>{getSourceCodeLabel()}&nbsp;</div>
            <a
              className="link"
              href={repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              {repositoryUrl}
            </a>
          </div>
          {projectUrl && (
            <div className="mt-1 md:flex">
              <div>Live Project:&nbsp;</div>
              <a
                className="link"
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
              >
                {projectUrl}
              </a>
            </div>
          )}
          {hasTechnologies && (
            <div className="mt-1 md:flex md:items-center">
              <div className="md:mr-2">Technology:</div>
              <div className={styles.technologyImagesContainer}>
                {technologyImages}
              </div>
            </div>
          )}
        </div>
        <p className="mt-5">{description}</p>
        {hasFeatures && (
          <div className="mt-3">
            <div className="italic">What can the user do?</div>
            <ul className="list-disc list-outside ml-5">{featuresDisplay}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

ProjectListingItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  repositoryUrl: PropTypes.string.isRequired,
  projectUrl: PropTypes.string,
  description: PropTypes.node.isRequired,
  isArchived: PropTypes.bool,
  features: PropTypes.arrayOf(PropTypes.string),
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
    })
  ),
};

ProjectListingItem.defaultProps = {
  isArchived: false,
  features: [],
  technologies: [],
};

export default ProjectListingItem;
