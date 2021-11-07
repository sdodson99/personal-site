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
      Home
    </Link>
    <Link
      to="/career"
      className={styles.navItem}
      activeClassName={styles.activeNavItem}
    >
      Career
    </Link>
    <Link
      to="/personal"
      className={styles.navItem}
      activeClassName={styles.activeNavItem}
    >
      Personal
    </Link>
    <Link
      to="/contact"
      className={styles.navItem}
      activeClassName={styles.activeNavItem}
    >
      Contact
    </Link>
  </nav>
);

NavigationBar.propTypes = {};

export default NavigationBar;
