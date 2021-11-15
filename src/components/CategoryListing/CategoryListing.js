import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './CategoryListing.module.scss';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryListing = ({ categories }) => {
  const categoryCards = categories.map((c) => (
    <div key={c.title} className="mb-12">
      <CategoryCard {...c} />
    </div>
  ));

  return <div className={styles.categoryListing}>{categoryCards}</div>;
};

CategoryListing.propTypes = {
  categories: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
};

CategoryListing.defaultProps = {
  categories: [],
};

export default CategoryListing;
