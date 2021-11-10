import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './FeatureListing.module.scss';
import FeatureCard from '../FeatureCard/FeatureCard';

const FeatureListing = ({ features }) => {
  const featureCards = features.map((f) => (
    <div key={f.title} className={styles.featureCardItem}>
      <FeatureCard
        title={f.title}
        description={f.description}
        imageSrc={f.imageSrc}
        href={f.href}
      />
    </div>
  ));

  return (
    <div className={styles.featureListing}>
      <div className="content-container">
        <div className={styles.featureCards}>{featureCards}</div>
      </div>
    </div>
  );
};

FeatureListing.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};

FeatureListing.defaultProps = {
  features: [],
};

export default FeatureListing;
