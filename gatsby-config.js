// init. environment variables
const dotenv = require('dotenv');
dotenv.config();

const { MARKS, INLINES, BLOCKS } = require('@contentful/rich-text-types')

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

const { githubApiQuery } = require('./github-api')   // import the API query created 

module.exports = {
  pathPrefix: "/portfolio-site",

  siteMetadata: {
    title: `Sania D Souza`,
    description: `Software developer/writer based out of Toronto.`,
    author: `Sania`,
    url:  `https://www.sania-dsouza.com`,
    siteUrl: "https://www.sania-dsouza.com",
    image: "/images/favicon.png",
    keywords: `Sania D Souza, software developer, test developer, writer, writing, creative, freelance`
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
        },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/project/`,
        },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2dc492`,
        theme_color: `#2dc492`,
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
      // {
      //   resolve: 'gatsby-source-medium',
      //   options: {
      //     username: '@sania.dsouza2012', // Medium user name
      //   },
      // },
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          color: `#357068`,
          // Disable the loading spinner.
          showSpinner: true,
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: contentfulConfig,
      },
      
      {   
        resolve: `@contentful/gatsby-transformer-contentful-richtext`,
        options: {
          renderOptions: {
            /*
            * Defines custom html string for each node type like heading, embedded entries etc..
            */
            renderNode: {
              // Example
              [BLOCKS.EMBEDDED_ASSET]: node => {
                let { description, file } = node.data.target.fields
                //console.log(file["en-US"].url.substring(2,))
                //console.log(node.data.target.fields)
                let imageUrl = "https://"+file["en-US"].url.substring(2,);
                return `<img src=${imageUrl} alt=${description['en-US']} />`
              },
              [INLINES.EMBEDDED_ENTRY]: node => {
                //console.log(node.data.target.fields)
                return `<a href=${node.data.target.fields.slug['en-US']} class='custom-entry'> ${node.data.target.fields.title['en-US']} </a>`
              },
            }
          }
        }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],

}
