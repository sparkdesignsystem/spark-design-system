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
        path: 'src/pages/homepage',
        name: 'homepage-pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/data/',
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        path: 'src/data/',
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/pages/installing-spark',
        name: 'installing-spark-pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/pages/principles',
        name: 'principles-pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/pages/using-spark',
        name: 'using-spark-pages',
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
          'homepage-pages': require.resolve('./src/components/layouts/HomepageLayout.js'),
          'installing-spark-pages': require.resolve('./src/components/layouts/InstallingSparkLayout.js'),
          'using-spark-pages': require.resolve('./src/components/layouts/UsingSparkLayout.js'),
          'principle-pages': require.resolve('./src/components/layouts/PrinciplesLayout.js'),
          default: require.resolve('./src/components/layouts/Layout.js'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
    {
      resolve: `gatsby-plugin-algolia-docsearch`,
      options: {
        apiKey: "9486baf438a1d7fd0b6c982838d6f9bc",
        indexName: "sparkdesignsystem",
        inputSelector: ".docs-header-search input"
      }
    }
  ],
};
