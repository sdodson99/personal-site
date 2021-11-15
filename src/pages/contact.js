import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';
import mailImage from '../images/mail.png';
import linkedinImage from '../images/linkedin.png';
import ContactListing from '@/components/ContactListing/ContactListing';

const EMAIL_URL = 'mailto:sc.dodson4@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/sean-dodson21';

const ContactPage = () => {
  const contacts = [
    {
      title: 'Email',
      description: 'Feel free to send me an email if you want to get in touch.',
      imageSrc: mailImage,
      href: EMAIL_URL,
      linkChildren: 'Email Me',
    },
    {
      title: 'LinkedIn',
      description:
        'I check LinkedIn less frequently than email, but feel free to send me a message.',
      imageSrc: linkedinImage,
      href: LINKEDIN_URL,
      linkChildren: 'Go to LinkedIn',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Contact - Sean Dodson</title>
      </Helmet>
      <div className="content-container page-container">
        <PageHeading>Contact</PageHeading>
        <div className="mt-14">
          <ContactListing contacts={contacts} />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
