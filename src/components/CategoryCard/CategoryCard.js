import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './CategoryCard.module.scss';
import { Link } from 'gatsby';

const CategoryCard = ({ title, description, imageSrc, to }) => (
  <div className={styles.categoryCard}>
    <div className="flex order-1 justify-center sm:order-2">
      <img className={styles.categoryImage} src={imageSrc} alt={title} />
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

CategoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

CategoryCard.defaultProps = {};

export default CategoryCard;
