import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';
import CategoryListing from '@/components/CategoryListing/CategoryListing';
import { graphql, useStaticQuery } from 'gatsby';

const CareerPage = () => {
  const images = useStaticQuery(graphql`
    {
      experience: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "suitcase" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, height: 100)
        }
      }
      projects: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "projects" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, height: 100)
        }
      }
      youtube: file(
        sourceInstanceName: { eq: "images" }
        name: { eq: "youtube" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: NONE, height: 100)
        }
      }
    }
  `);

  const categories = [
    {
      title: 'Experience',
      description:
        "I'm a software developer. Learn more about my current and recent gigs.",
      imageData: images.experience,
      to: 'experience',
    },
    {
      title: 'Projects',
      description:
        'I also build software in my free time for fun! Interested in my projects?',
      imageData: images.projects,
      to: 'projects',
    },
    {
      title: 'YouTube',
      description:
        'I enjoy making YouTube videos about software development and helping my viewers. Check out some of my recent videos.',
      imageData: images.youtube,
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
