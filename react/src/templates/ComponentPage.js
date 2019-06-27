import React from 'react';
import Proptypes from 'prop-types';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx';
import Layout from '../components/layout';

const ComponentPage = ({ data }) => {
  const { node } = data.allMdx.edges[0];

  return (
    <Layout>
      <h1>{node.frontmatter.title}</h1>
      {/* TODO */}
      <MDXRenderer>{node.code.body}</MDXRenderer>
    </Layout>
  )
};

export default ComponentPage;

export const query = graphql`
  query pageData {
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
`;

ComponentPage.propTypes = {
  data: Proptypes.shape({}),
};
