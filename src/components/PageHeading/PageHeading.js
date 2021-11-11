import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './PageHeading.module.scss';

const PageHeading = ({ children }) => (
  <h1 className={styles.pageHeading}>{children}</h1>
);

PageHeading.propTypes = {
  children: PropTypes.node,
};

PageHeading.defaultProps = {};

export default PageHeading;
