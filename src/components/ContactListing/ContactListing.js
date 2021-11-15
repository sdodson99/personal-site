import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './ContactListing.module.scss';
import ContactCard from '../ContactCard/ContactCard';

const ContactListing = ({ contacts }) => {
  const contactCards = contacts.map((c) => (
    <div className={styles.contactCard} key={c.title}>
      <ContactCard {...c} />
    </div>
  ));

  return <div className={styles.contactListing}>{contactCards}</div>;
};

ContactListing.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      linkChildren: PropTypes.string.isRequired,
    })
  ),
};

ContactListing.defaultProps = {
  contacts: [],
};

export default ContactListing;
