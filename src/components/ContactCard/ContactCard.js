import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ContactCard.module.scss';
import Card from '../Card/Card';

const ContactCard = ({ title, description, imageSrc, href, linkChildren }) => (
  <Card>
    <div className={styles.contactCard}>
      <div className="flex justify-center items-center md:ml-3 md:order-2">
        <img className={styles.contactImage} src={imageSrc} alt={title} />
      </div>
      <div className="mt-5 flex-1 text-center md:text-left sm:flex sm:flex-col sm:justify-between md:items-start md:mt-0">
        <div>
          <h2 className="text-2xl">{title}</h2>
          <p className="mt-5 font-thin">{description}</p>
        </div>
        <a
          className="mt-5 btn btn-primary"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {linkChildren}
        </a>
      </div>
    </div>
  </Card>
);

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  linkChildren: PropTypes.string.isRequired,
};

ContactCard.defaultProps = {};

export default ContactCard;
