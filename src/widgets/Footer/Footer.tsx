import React from 'react';
import styles from './Footer.module.css';

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer} data-testid="Footer">
      Copyright © {year} Sean Dodson. All right reserved.
    </div>
  );
};

export default Footer;
