import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div className={styles.Layout}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
