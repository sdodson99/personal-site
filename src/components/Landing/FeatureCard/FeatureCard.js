import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './FeatureCard.module.scss';
import { Link } from 'gatsby';

const FeatureCard = ({ title, description, imageSrc, href }) => (
  <div className={styles.featureCard}>
    <div className="flex flex-col items-center">
      <h3 className="text-2xl">{title}</h3>
      <img className={styles.featureImage} src={imageSrc} alt={title} />
      <p className="mt-5 font-thin text-gray-800">{description}</p>
    </div>
    <Link className="mt-5 btn btn-primary" to={href}>
      Learn More
    </Link>
  </div>
);

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default FeatureCard;
