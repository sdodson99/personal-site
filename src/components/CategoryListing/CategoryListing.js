import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './CategoryListing.module.scss';
import CategoryListingItem from '../CategoryListingItem/CategoryListingItem';

const CategoryListing = ({ categories }) => {
  const categoryListingItems = categories.map((c) => (
    <div key={c.title} className="mb-12">
      <CategoryListingItem {...c} />
    </div>
  ));

  return <div className={styles.categoryListing}>{categoryListingItems}</div>;
};

CategoryListing.propTypes = {
  categories: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageData: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired,
  }),
};

CategoryListing.defaultProps = {
  categories: [],
};

export default CategoryListing;
