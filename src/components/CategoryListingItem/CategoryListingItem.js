import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './CategoryListingItem.module.scss';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CategoryListingItem = ({ title, description, imageData, to }) => {
  const image = getImage(imageData);

  return (
    <div className={styles.categoryListingItem}>
      <div className="flex order-1 justify-center sm:order-2">
        <GatsbyImage
          image={image}
          alt={title}
          className={styles.categoryImage}
        />
      </div>
      <div className="mt-5 order-2 text-center sm:text-left sm:flex sm:flex-col sm:items-start sm:order-1 sm:mt-0">
        <h2 className="text-2xl">{title}</h2>
        <p className="mt-5 font-thin">{description}</p>
        <Link className="mt-5 btn btn-primary" to={to}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

CategoryListingItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageData: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
};

CategoryListingItem.defaultProps = {};

export default CategoryListingItem;
