import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';

const LiftingPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Weight Lifting - Sean Dodson</title>
      </Helmet>
      <div className="content-container page-container">
        <PageHeading>Weight Lifting</PageHeading>
        <p className="mt-8">
          {
            'Check out my recent workouts. This content is pulled from my Strong account. I still need to automate this to update automatically!'
          }
        </p>
        <div className="mt-8">WIP</div>
      </div>
    </Layout>
  );
};

export default LiftingPage;
