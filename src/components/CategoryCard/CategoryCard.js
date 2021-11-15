import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './CategoryCard.module.scss';
import { Link } from 'gatsby';

const CategoryCard = ({ title, description, imageSrc, to }) => (
  <div className={styles.categoryCard}>
    <div className="text-center sm:text-left sm:flex sm:flex-col sm:items-start">
      <h2 className="text-2xl">{title}</h2>
      <p className="mt-5 font-thin">{description}</p>
      <Link className="mt-5 btn btn-primary" to={to}>
        Learn More
      </Link>
    </div>
    <div className="flex justify-center">
      <img className={styles.categoryImage} src={imageSrc} alt={title} />
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
