import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Card.module.scss';

const Card = ({ children }) => <div className={styles.card}>{children}</div>;

Card.propTypes = {
  children: PropTypes.node,
};

Card.defaultProps = {};

export default Card;
