/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
          edges {
            node {
              frontmatter {
                path
                title
              }
              code {
                body
              }
            }
          }
        }
      }
    `).then(result => {

      result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: path.resolve('./src/templates/ComponentPage.js'),
          context: {
            slug: node.frontmatter.path,
            title: node.frontmatter.title,
            body: node.code.body
          },
        });
      });
      resolve();
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /(sparkDatePicker|tiny-date-picker|sparkExports).js$/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
