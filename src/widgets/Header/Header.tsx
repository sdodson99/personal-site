import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';

type HeaderProps = {};

const Header = ({}: HeaderProps) => (
  <div className={styles.header} data-testid="Header">
    <Image src="/logo.svg" alt="Sean Dodson Logo" width={50} height={50} />
  </div>
);

export default Header;
