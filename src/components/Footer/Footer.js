import React from 'react';
import * as styles from './Footer.module.scss';
import linkedinImage from '../../images/linkedin.png';
import youtubeImage from '../../images/youtube.png';
import githubImage from '../../images/github.png';
import { Link } from 'gatsby';

const LINKEDIN_URL = 'https://www.linkedin.com/in/sean-dodson21';
const YOUTUBE_URL = 'https://www.youtube.com/channel/UC7X9mQ_XtTYWzr9Tf_NYcIg';
const GITHUB_URL = 'https://github.com/sdodson99';

const Footer = () => (
  <div className={styles.footer}>
    <div className="content-container">
      <div className="flex flex-col items-center text-center sm:text-left sm:flex-row sm:justify-between sm:items-start">
        <div className="sm:flex">
          <div className={styles.navLinkGroup}>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </div>
          <div className={styles.navLinkGroup}>
            <Link className={styles.navLink} to="/personal">
              Personal
            </Link>
            <Link className={styles.navLink} to="/lifting">
              Lifting
            </Link>
            <Link className={styles.navLink} to="/music">
              Music
            </Link>
          </div>
          <div className={styles.navLinkGroup}>
            <Link className={styles.navLink} to="/career">
              Career
            </Link>
          </div>
          <div className={styles.navLinkGroup}>
            <Link className={styles.navLink} to="/contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 sm:mt-0">
          <div className="text-center">Follow My Socials</div>
          <div className="flex">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <img
                className={styles.socialImage}
                src={linkedinImage}
                alt="LinkedIn"
              />
            </a>
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer">
              <img
                className={styles.socialImage}
                src={youtubeImage}
                alt="YouTube"
              />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <img
                className={styles.socialImage}
                src={githubImage}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
