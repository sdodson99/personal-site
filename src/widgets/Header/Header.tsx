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
            alt="Sean Dodson Logo"
            width={50}
            height={50}
          />
        </a>
      </Link>
    </nav>
  </header>
);
