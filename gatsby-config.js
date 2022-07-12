// Query a file from content/

const rss = require("./utils/rss-option");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Codecademia",
    description:
      "An accessible platform dedicated to sharing refined and translated advanced computer science concepts to ease learning.",
    siteUrl: process.env.BASE_URL,
    body: {
      content: "Some SEO content",
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-feed`,
      options: rss.options,
    },
    // Change file to file nodes
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              aliases: {
                es6: "js",
              },
            },
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
