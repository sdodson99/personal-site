import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

type HeaderProps = {};

export const Header = ({}: HeaderProps) => (
  <header className={styles.header} data-testid="Header">
    <nav>
      <Link href="/">
        <a>
          <Image
            src="/logo.svg"
            alt=""
            width={50}
            height={50}
            data-testid="HeaderLogo"
          />
        </a>
      </Link>
    </nav>
  </header>
);
