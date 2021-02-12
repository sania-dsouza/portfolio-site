// init. environment variables
const dotenv = require('dotenv');
dotenv.config();

const { githubApiQuery } = require('./github-api')   // import the API query created 

module.exports = {
  pathPrefix: "/portfolio-site",

  siteMetadata: {
    title: `Sania D Souza`,
    description: `My home on the world wide web!`,
    author: `Sania`,
    siteUrl: "https://www.sania-dsouza.com"
  },
  
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
      {
        resolve: `gatsby-source-github-api`,
        options: {
          url: "https://api.github.com/graphql", // default Github GraphQL v4 API endpoint

          // token: required by the GitHub API
          token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,

          // GraphQLquery: defaults to a search query
          graphQLQuery: githubApiQuery,

          // variables: defaults to variables needed for a search query
          variables: {
            github_login: process.env.GITHUB_LOGIN
          }
        }
      },
      {
        resolve: 'gatsby-source-medium',
        options: {
          username: '@sania.dsouza2012', // Medium user name
        },
      },
      {
        resolve: `gatsby-source-cloudinary`,
        options: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME,
          apiKey: process.env.CLOUDINARY_API_KEY,
          apiSecret: process.env.CLOUDINARY_API_SECRET,
          resourceType: `image`,
          prefix: `personal-site/`,
          maxResults: 50
        }
      },
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          color: `#357068`,
          // Disable the loading spinner.
          showSpinner: true,
        },
      },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],

}
