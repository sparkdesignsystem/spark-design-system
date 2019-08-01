module.exports = {
  siteMetadata: {
    title: 'Spark Design System',
    description: 'Spark Design System is a system of patterns and components'
      + 'used to create the user interface for the Quicken Loans family of'
      + 'Fintech products.',
    author: '@sparkQL',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'spark/',
        name: 'spark-components',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/pages',
        name: 'mdx-generated-pages',
      },
    },

    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-symbol-set-fetch',
      options: {
        url: 'https://www.rockomni.com/mcds/assets/GlobalContent/NonStockImages'
          + '/Icons/spark-core-icons-V10.svg',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/site-structure/Layout.js'),
        },
      },
    },
  ],
};
