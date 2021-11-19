import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';
import dotNetImage from '../../images/dotnetcore.png';
import azureImage from '../../images/azure.png';
import vueImage from '../../images/vuejs.png';
import showntellImage from '../../images/showntell.png';
import sucovidImage from '../../images/sucovid.png';
import typescriptImage from '../../images/typescript.png';
import npmImage from '../../images/npm.png';
import ProjectListing from '@/components/ProjectListing/ProjectListing';

const ProjectsPage = () => {
  const projects = [
    {
      name: 'SU COVID Symptom Tracker',
      imageSrc: sucovidImage,
      repositoryUrl: 'https://github.com/sdodson99/su-covid-symptom-tracker',
      description:
        'The SU COVID Symptom Tracker is a CLI tool to automatically submit daily COVID symptoms to the Stevenson University Wellness Center. Stevenson University required that students submit their symptoms each day, so this tool addressed a major pain point for myself and other students.',
      isArchived: true,
      features: [
        'Automatically submit COVID symptoms via a daily CRON job',
        'Submit COVID symptoms by answering CLI prompts',
        'Securely save Stevenson University login credentials for future symptom submissions',
      ],
      technologies: [
        {
          name: 'TypeScript',
          imageSrc: typescriptImage,
          subCategories: [
            'Web Scraping + Automation',
            'Commander',
            'Inquirer',
            'Node CRON',
            'Jest',
          ],
        },
        {
          name: 'NPM Packaging',
          imageSrc: npmImage,
          subCategories: [
            'Deployed to NPM',
            'GitHub Actions CI/CD',
            'Semantic Versioning',
          ],
        },
      ],
    },
    {
      name: "Show 'n Tell",
      imageSrc: showntellImage,
      repositoryUrl: 'https://github.com/sdodson99/show-n-tell',
      description:
        'Show ‘N Tell is a social media platform for users to upload and discover images of other user’s sentimental, valuable, or random items. This was a school project from a few years ago.',
      isArchived: true,
      features: [
        'Explore random image posts created by other users',
        'View a feed of image posts created by followed user profiles',
        "Explore and follow other user's profiles",
        "Like and comment on other user's image posts",
      ],
      technologies: [
        {
          name: 'ASP.NET Core',
          imageSrc: dotNetImage,
          subCategories: [
            'Entity Framework',
            'SignalR',
            'Swagger UI',
            'NUnit + Moq',
            'MediatR',
          ],
        },
        {
          name: 'Vue.js',
          imageSrc: vueImage,
          subCategories: ['Vuex', 'SignalR', 'Bootstrap', 'Vue Router'],
        },
        {
          name: 'Azure',
          imageSrc: azureImage,
          subCategories: [
            'Container Instances',
            'Key Vault',
            'Event Grid + Functions',
            'Azure SQL',
            'Blob Storage',
            'Application Insights',
          ],
        },
      ],
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Projects - Sean Dodson</title>
      </Helmet>
      <div className="content-container page-container">
        <PageHeading>Projects</PageHeading>
        <div className="mt-14">
          <ProjectListing projects={projects} />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
