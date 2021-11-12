import React from 'react';
import * as styles from './NavigationBar.module.scss';
import { Link } from 'gatsby';

const NavigationBar = () => (
  <nav className={styles.navigationBar}>
    <Link
      to="/"
      className={styles.navItem}
      activeClassName={styles.activeNavItem}
    >
      HOME
    </Link>
    <Link
      to="/personal"
      className={styles.navItem}
      activeClassName={styles.activeNavItem}
      partiallyActive={true}
    >
      PERSONAL
    </Link>
    <Link
      to="/career"
      className={styles.navItem}
      activeClassName={styles.activeNavItem}
      partiallyActive={true}
    >
      CAREER
    </Link>
    <Link
      to="/contact"
      className={styles.navItem}
      activeClassName={styles.activeNavItem}
      partiallyActive={true}
    >
      CONTACT
    </Link>
  </nav>
);

export default NavigationBar;
