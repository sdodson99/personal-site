const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.seandodson.com',
    title: 'Personal Site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@/components': path.resolve(__dirname, 'src/components'),
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
        timeRanges: ['medium_term'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/remote-data`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-source-youtube-v3`,
      options: {
        channelId: ['UC7X9mQ_XtTYWzr9Tf_NYcIg'],
        apiKey: process.env.YOUTUBE_API_KEY,
      },
    },
    {
      resolve: '@fs/gatsby-plugin-drive',
      options: {
        folderId: process.env.GOOGLE_DRIVE_FOLDER_ID,
        key: {
          private_key: process.env.GOOGLE_PRIVATE_KEY,
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
        },
        destination: `${__dirname}/remote-data`,
      },
    },
  ],
};
