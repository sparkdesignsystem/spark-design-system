/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `Mdx`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` });
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     });
//   }
// };

// Use allMdx to query for all mdx files
// to create a page for each mdx file it finds
// in the then callback
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
              }
            }
          }
        }
      }
    `).then(result => {

      result.data.allMdx.edges.forEach(({ node }) => {
        // console.log('catastasdfasdfadsf',node.fields.slug )

        createPage({
          path: node.frontmatter.path,
          component: path.resolve('./src/templates/ComponentPage.js'),
          context: {
            slug: node.frontmatter.path,
          },
        });
      });
      resolve();
    });
  });
};

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//   return graphql(`
//     {
//       allMdx {
//         edges {
//           node {
//             frontmatter {
//               name
//             }
//           }
//         }
//       }
//     }
//   `).then((data, errors) => {
//     console.log("TCL: exports.createPages -> data", data.data.edges)
//     if (errors) {
//       return Promise.reject(errors);
//     }

//     const { edges } = data.allMdx;


//     edges.forEach(({ node }) => {
//       if (node.fields && node.fields.slug) {
//         createPage({
//           path: node.fields.slug,
//           component: path.resolve('./src/templates/ComponentPage.js'),
//           context: {
//             slug: node.fields.slug,
//           },
//         });
//       }
//     });
//   });
// };

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
