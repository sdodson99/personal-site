import React, { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div data-testid="Layout">
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
    <Footer />
  </div>
);

export default Layout;
