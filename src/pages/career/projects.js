import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';

const ProjectsPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Projects - Sean Dodson</title>
      </Helmet>
      <div className="content-container page-container">
        <PageHeading>Projects</PageHeading>
        <div className="mt-14">Work in progress...</div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
