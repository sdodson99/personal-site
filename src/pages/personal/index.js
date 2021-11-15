import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';
import CategoryListing from '@/components/CategoryListing/CategoryListing';
import weightPlateImage from '../../images/weight-plate.png';
import guitarImage from '../../images/guitar.png';

const PersonalPage = () => {
  const categories = [
    {
      title: 'Lifting',
      description:
        'Lifting weights and exercising keeps me sane. Check out some of my recent workouts.',
      imageSrc: weightPlateImage,
      to: 'lifting',
    },
    {
      title: 'Music',
      description:
        "I'm almost always listening to music. Check out what I've been listening to recently.",
      imageSrc: guitarImage,
      to: 'music',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Personal - Sean Dodson</title>
      </Helmet>
      <div className="content-container page-container">
        <PageHeading>Personal</PageHeading>
        <div className="mt-14">
          <CategoryListing categories={categories} />
        </div>
      </div>
    </Layout>
  );
};

export default PersonalPage;
