import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';
import CategoryListing from '@/components/CategoryListing/CategoryListing';
import { graphql, useStaticQuery } from 'gatsby';

const PersonalPage = () => {
  const images = useStaticQuery(graphql`
    {
      weightPlate: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "weight-plate" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, height: 100)
        }
      }
      guitar: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "guitar" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, height: 100)
        }
      }
    }
  `);

  const categories = [
    {
      title: 'Lifting',
      description:
        'Lifting weights and exercising keeps me sane. Check out some of my recent workouts.',
      imageData: images.weightPlate,
      to: 'lifting',
    },
    {
      title: 'Music',
      description:
        "I'm almost always listening to music. Check out what I've been listening to recently.",
      imageData: images.guitar,
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
