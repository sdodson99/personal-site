import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div>
    <div className={styles.page}>
      <Header />
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
