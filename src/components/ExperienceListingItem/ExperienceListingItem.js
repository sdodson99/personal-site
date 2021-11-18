import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ExperienceListingItem.module.scss';

const ExperienceListingItem = ({
  name,
  description,
  location,
  websiteUrl,
  imageSrc,
  position,
  startDate,
  endDate,
  isCurrent,
  tasks,
}) => {
  const startDateDisplay = startDate.toFormat('MM/yyyy');
  const endDateDisplay = isCurrent ? 'Present' : endDate.toFormat('MM/yyyy');

  const hasTasks = tasks?.length > 0;
  const tasksDisplay = tasks?.map((t) => <li key={t}>{t}</li>);

  return (
    <div className={styles.experienceListingItem}>
      <div className={styles.companyLogo}>
        <a href={websiteUrl} target="_blank" rel="noreferrer">
          <img src={imageSrc} alt={name} />
        </a>
      </div>
      <div className="mt-5 md:mt-0 md:ml-8">
        <h2 className="text-2xl text-center md:text-left">{name}</h2>
        <div className="mt-3 text-center font-thin md:text-left">
          <div>
            <span className="mx-2 md:mx-0 md:mr-5">{position}</span>
            <span className="mx-2 md:mx-0 md:mr-5">{location}</span>
          </div>
          <div className="mt-1">
            <span>{startDateDisplay}</span>
            <span> - </span>
            <span>{endDateDisplay}</span>
          </div>
        </div>
        <p className="mt-5">{description}</p>
        {hasTasks && (
          <div className="mt-3">
            <div className="italic">What did I do?</div>
            <ul className="list-disc list-inside">{tasksDisplay}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

ExperienceListingItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  websiteUrl: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object,
  isCurrent: PropTypes.bool,
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ExperienceListingItem.defaultProps = {
  isCurrent: false,
};

export default ExperienceListingItem;
