/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

//todo this is not getting rerun by gatsby develop
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
                description
                restrictions
              }
              code {
                body
              }
              exports {
                variants {
                  description
                  name
                  component
                  sourceCode
                }
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
            description: node.frontmatter.description,
            restrictions: node.frontmatter.restrictions,
            body: node.code.body,
            variants: node.exports.variants
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
