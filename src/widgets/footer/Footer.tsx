import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import TwitterIcon from 'bootstrap-icons/icons/twitter.svg';
import LinkedInIcon from 'bootstrap-icons/icons/linkedin.svg';
import GitHubIcon from 'bootstrap-icons/icons/github.svg';
import YouTubeIcon from 'bootstrap-icons/icons/youtube.svg';

type FooterProps = {};

export const Footer = ({}: FooterProps) => {
  const year = new Date().getFullYear();

  const socials = [
    {
      name: 'youtube',
      description: 'Subscribe to my YouTube channel',
      href: 'https://www.youtube.com/c/SingletonSean',
      Icon: YouTubeIcon,
    },
    {
      name: 'twitter',
      description: 'Follow me on Twitter',
      href: 'https://twitter.com/sdodson_',
      Icon: TwitterIcon,
    },
    {
      name: 'github',
      description: 'Explore my GitHub contributions',
      href: 'https://github.com/sdodson99',
      Icon: GitHubIcon,
    },
    {
      name: 'linkedin',
      description: 'Connect with me on LinkedIn',
      href: 'https://www.linkedin.com/in/sean-dodson21/',
      Icon: LinkedInIcon,
    },
  ];

  return (
    <footer className={styles.footer} data-testid="Footer">
      <section className={styles.mainContainer}>
        <div className={`container ${styles.main}`}>
          <div>
            <Image src="/logo.svg" alt="Sean Dodson" width={75} height={75} />
          </div>
          <div className={styles.socials}>
            <div>Follow My Socials</div>
            <div className={styles.socialLinksContainer}>
              {socials.map(({ name, href, description, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  <Icon className={styles.socialIcon} title={description} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.copyright}>
        Copyright © {year} Sean Dodson. All right reserved.
      </section>
    </footer>
  );
};
