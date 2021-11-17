import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Helmet } from 'react-helmet';
import PageHeading from '@/components/PageHeading/PageHeading';
import { DateTime } from 'luxon';
import lawIqImage from '../../images/lawiq.png';
import triceratImage from '../../images/tricerat.jpeg';
import textronImage from '../../images/textron.jpeg';
import paypalImage from '../../images/paypal.jpeg';

const ExperiencePage = () => {
  const experiences = [
    {
      name: 'Law IQ',
      description:
        "LawIQ develops software to manage data for organizations in the energy industry. I was a LawIQ intern between my Fall and Spring semester's in 2018.",
      location: 'Hampstead, MD',
      websiteUrl: 'https://www.lawiq.com/',
      imageSrc: lawIqImage,
      position: 'Intern',
      startDate: DateTime.fromFormat('01/2018', 'MM/yyyy'),
      endDate: DateTime.fromFormat('01/2018', 'MM/yyyy'),
      isCurrent: false,
      tasks: [
        'Experienced operating in an Agile (Scrum) environment',
        'Helped organize Scrum sprints with Jira',
        'Conducted research to keep team updated on status of potential and current customers',
      ],
    },
    {
      name: 'Tricerat',
      description:
        'Tricerat develops software to solve enterprise printing demands. I primarily developed C# WPF (MVVM) desktop applications that perform CRUD operations on databases, files, and registry keys. I also developed a ASP.NET Blazor web application for customer intranets.',
      location: 'Baltimore, MD',
      websiteUrl: 'https://www.tricerat.com/',
      imageSrc: triceratImage,
      position: 'Software Developer',
      startDate: DateTime.fromFormat('02/2019', 'MM/yyyy'),
      endDate: DateTime.fromFormat('01/2021', 'MM/yyyy'),
      isCurrent: false,
      tasks: [
        'Developed C# WPF applications with MVVM architecture',
        'Implemented desktop wireframe designs in WPF using XAML to enhance user experience',
        'Setup virtual machines to test applications in multiple environments',
        'Rapidly solved customer cases to increase customer satisfaction',
      ],
    },
    {
      name: 'Textron Systems',
      description:
        'Textron Systems builds solutions for various matters in the defense industry. I helped develop electronic warfare applications using C# and C++, and helped drive integrations between hardware and software systems.',
      location: 'Timonium, MD',
      websiteUrl: 'https://www.textronsystems.com/',
      imageSrc: textronImage,
      position: 'Software Developer 1',
      startDate: DateTime.fromFormat('02/2021', 'MM/yyyy'),
      endDate: DateTime.fromFormat('05/2021', 'MM/yyyy'),
      isCurrent: false,
      tasks: [
        'Developed C# applications for simulating electronic warfare environments',
        'Leveraged HTTP/UDP for communication between software systems',
        'Implemented, integrated, and tested software with embedded hardware systems.',
      ],
    },
    {
      name: 'PayPal',
      description:
        'PayPal is globally reimagining the financial and online payments industry. I help build full stack applications using React and GraphQL to acquire PayPal Credit users.',
      location: 'Timonium, MD',
      websiteUrl: 'https://www.paypal.com/',
      imageSrc: paypalImage,
      position: 'Software Developer 1',
      startDate: DateTime.fromFormat('06/2021', 'MM/yyyy'),
      isCurrent: true,
      tasks: [],
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Experience - Sean Dodson</title>
      </Helmet>
      <div className="content-container page-container">
        <PageHeading>Experience</PageHeading>
        <div className="mt-14">Work in progress...</div>
      </div>
    </Layout>
  );
};

export default ExperiencePage;
