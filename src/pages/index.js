import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Landing/Hero/Hero';
import FeatureListing from '@/components/Landing/FeatureListing/FeatureListing';
import suitcaseImage from '../images/suitcase.png';
import faceImage from '../images/face.png';
import mailImage from '../images/mail.png';

const IndexPage = () => {
  const features = [
    {
      title: 'Career',
      description:
        'Interested in my software development experience and projects?',
      imageSrc: suitcaseImage,
      href: '/',
    },
    {
      title: 'Personal',
      description: 'Who is Sean Dodson anyways?',
      imageSrc: faceImage,
      href: '/',
    },
    {
      title: 'Contact',
      description: 'Have a question or want to get in touch?',
      imageSrc: mailImage,
      href: '/',
    },
  ];

  return (
    <Layout>
      <Hero />
      <FeatureListing features={features} />
    </Layout>
  );
};

export default IndexPage;
