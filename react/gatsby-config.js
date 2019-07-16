module.exports = {
  siteMetadata: {
    title: `Spark Design System`,
    description: `Spark Design System is a system of patterns and components`
      + `used to create the user interface for the Quicken Loans family of`
      + `Fintech products.`,
    author: `@sparkQL`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `../spark/`,
        name: 'spark-components',
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-symbol-set-fetch`,
      options: {
        url: `https://www.rockomni.com/mcds/assets/GlobalContent/NonStockImages`
          + `/Icons/spark-core-icons-V10.svg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-mdx`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: 'starter',
        start_url: `/`,
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: `src/images/gatsby-icon.png`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline
    // functionality // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
