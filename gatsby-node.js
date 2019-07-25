/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

// return new Promise((resolve, reject) => {
//   graphql(`
//     query pages {
//       allMdx {
//         edges {
//           node {
//             frontmatter {
//               path
//               title
//               type
//             }
//             code {
//               body
//             }
//             exports {
//               variants {
//                 description
//                 name
//                 sprkComponent
//                 sourceCode
//               }
//               description
//               restrictions
//               information
//               sprkComponent
//               sourceCode
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     result.data.allMdx.edges.forEach(({ node }) => {
//       console.log(node);
//   });
// });

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'develop-html' || stage === 'build-html') {
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
