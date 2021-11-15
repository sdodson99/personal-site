import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ContactCard.module.scss';

const ContactCard = ({ title, description, imageSrc, href, linkChildren }) => (
  <div className={styles.contactCard}>
    <div className="text-center md:text-left md:flex md:flex-col md:items-start">
      <h2 className="text-2xl">{title}</h2>
      <p className="mt-5 font-thin">{description}</p>
      <a
        className="mt-5 btn btn-primary"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {linkChildren}
      </a>
    </div>
    <div className="mt-5 md:mt-0 md:ml-3 flex justify-center items-center">
      <img className={styles.contactImage} src={imageSrc} alt={title} />
    </div>
  </div>
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
