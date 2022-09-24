import React, { ReactNode } from 'react';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div data-testid="Layout">
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
    <Footer />
  </div>
);