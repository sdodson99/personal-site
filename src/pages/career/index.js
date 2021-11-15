import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';
import CategoryListing from '@/components/CategoryListing/CategoryListing';
import suitcaseImage from '../../images/suitcase.png';
import youtubeImage from '../../images/youtube.png';
import projectsImage from '../../images/projects.png';

const CareerPage = () => {
  const categories = [
    {
      title: 'Experience',
      description:
        "I'm a software developer. Learn more about my current and recent gigs.",
      imageSrc: suitcaseImage,
      to: 'experience',
    },
    {
      title: 'Projects',
      description:
        'I also build software in my free time for fun! Interested in my projects?',
      imageSrc: projectsImage,
      to: 'projects',
    },
    {
      title: 'YouTube',
      description:
        'I enjoy making YouTube videos about software development and helping my viewers. Check out some of my recent videos.',
      imageSrc: youtubeImage,
      to: 'youtube',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Career - Sean Dodson</title>
      </Helmet>
      <div className="content-container page-container">
        <PageHeading>Career</PageHeading>
        <div className="mt-14">
          <CategoryListing categories={categories} />
        </div>
      </div>
    </Layout>
  );
};

export default CareerPage;
