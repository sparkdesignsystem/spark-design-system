module.exports = {
  siteMetadata: {
    title: 'Spark Design System',
    description:
      'Spark Design System is a system of patterns and components ' +
      'used to create the user interface for the Quicken Loans family of ' +
      'Fintech products.',
    author: '@SparkDesignSys',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/spark-logo.svg',
      },
    },
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
        path: 'src/pages/installing-spark.mdx',
        name: 'installing-spark-page',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/pages/using-spark.mdx',
        name: 'using-spark-page',
      },
    },

    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-symbol-set-fetch',
      options: {
        url:
          'https://www.rockomni.com/mcds/assets/GlobalContent/NonStockImages/Icons/spark-icons-v14.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          'homepage-pages': require.resolve(
            './src/components/layouts/HomepageLayout.js',
          ),
          'installing-spark-pages': require.resolve(
            './src/components/layouts/InstallingSparkLayout.js',
          ),
          'installing-spark-page': require.resolve(
            './src/components/layouts/InstallingSparkLayout.js',
          ),
          'using-spark-pages': require.resolve(
            './src/components/layouts/UsingSparkLayout.js',
          ),
          'using-spark-page': require.resolve(
            './src/components/layouts/UsingSparkLayout.js',
          ),
          'principles-pages': require.resolve(
            './src/components/layouts/PrinciplesLayout.js',
          ),
          default: require.resolve('./src/components/layouts/Layout.js'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        // eslint-disable-next-line global-require
        postCssPlugins: [require('postcss-preset-env')({ stage: 0 })],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-113915182-1',
        // Defines where to place the tracking script - `true`
        // in the head and `false` in the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      },
    },
  ],
};
