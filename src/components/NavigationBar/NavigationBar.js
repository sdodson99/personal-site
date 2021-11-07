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
      to="/career"
      className={styles.navItem}
      activeClassName={styles.activeNavItem}
    >
      CAREER
    </Link>
    <Link
      to="/personal"
      className={styles.navItem}
      activeClassName={styles.activeNavItem}
    >
      PERSONAL
    </Link>
    <Link
      to="/contact"
      className={styles.navItem}
      activeClassName={styles.activeNavItem}
    >
      CONTACT
    </Link>
  </nav>
);

export default NavigationBar;
