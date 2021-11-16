import React, { useState } from 'react';
import * as styles from './Header.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import { HamburgerElastic } from 'react-animated-burgers';
import NavigationBar from '../NavigationBar/NavigationBar';
import classNames from 'classnames';
import { Link } from 'gatsby';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleButton = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.header}>
      <div className="sm:flex justify-between items-center">
        <div className="content-container flex flex-1 justify-between items-center">
          <Link to="/">
            <StaticImage
              height={50}
              width={50}
              placeholder="none"
              src="../../images/logo.svg"
              alt="SD Logo"
              loading="eager"
            />
          </Link>

          <div className="sm:hidden">
            <HamburgerElastic
              isActive={isMenuOpen}
              buttonWidth="40"
              toggleButton={handleToggleButton}
            />
          </div>

          {/* Navigation Bar for desktop. */}
          <div className={classNames(styles.navbar, styles.desktop)}>
            <NavigationBar />
          </div>
        </div>

        {/* Navigation Bar for mobile. */}
        <div
          className={classNames(
            styles.navbar,
            styles.mobile,
            isMenuOpen ? styles.open : ''
          )}
        >
          <NavigationBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
