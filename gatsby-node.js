/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Directory'
    && node.dir.endsWith('spark/components')) {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allDirectory {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allDirectory.edges.forEach(({ node }) => {
      if (node.fields && node.fields.slug) {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/ComponentPage.js'),
          context: {
            slug: node.fields.slug,
          },
        });
      }
    });
  });
};
