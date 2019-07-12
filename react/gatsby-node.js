/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      query pages {
        allMdx {
          edges {
            node {
              frontmatter {
                path
                title
                type
              }
              code {
                body
              }
              exports {
                variants {
                  description
                  name
                  sprkComponent
                  sourceCode
                }
                description
                restrictions
                information
                sprkComponent
                sourceCode
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMdx.edges.forEach(({ node }) => {
        if (node.frontmatter.type === 'component') {
          createPage({
            path: node.frontmatter.path,
            component: path.resolve('./src/templates/ComponentPage.js'),
            context: {
              slug: node.frontmatter.path,
              title: node.frontmatter.title,
              description: node.exports.description,
              restrictions: node.exports.restrictions,
              information: node.exports.information,
              sprkComponent: node.exports.sprkComponent,
              sourceCode: node.exports.sourceCode,
              body: node.code.body,
              variants: node.exports.variants
            },
          });
        } else if (node.frontmatter.type === 'fundamental') {
          createPage({
            path: node.frontmatter.path,
            component: path.resolve('./src/templates/FundamentalPage.js'),
            context: {
              slug: node.frontmatter.path,
              title: node.frontmatter.title,
              description: node.exports.description,
              restrictions: node.exports.restrictions,
              information: node.exports.information,
              sprkComponent: node.exports.sprkComponent,
              sourceCode: node.exports.sourceCode,
              body: node.code.body,
              variants: node.exports.variants
            },
          });
        } else {
          createPage({
            path: node.frontmatter.path,
            component: path.resolve('./src/templates/DocPage.js'),
            context: {
              slug: node.frontmatter.path,
              title: node.frontmatter.title,
              description: node.exports.description,
              restrictions: node.exports.restrictions,
              information: node.exports.information,
              sprkComponent: node.exports.sprkComponent,
              sourceCode: node.exports.sourceCode,
              body: node.code.body,
              variants: node.exports.variants
            },
          });
        }
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
