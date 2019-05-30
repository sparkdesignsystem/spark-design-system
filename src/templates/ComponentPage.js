import React from 'react';
import Proptypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

function ComponentPage({ data }) {
  const { node } = data.allDirectory.edges[0];
  return (
    <Layout>
      <div>
        <h1>{ node.name }</h1>
        <p>Hello, World!</p>
      </div>
    </Layout>
  );
}

export default ComponentPage;

export const query = graphql`
  query($slug: String!) {
    allDirectory(filter: { fields: { slug: { eq: $slug } } }) {
      edges { 
        node { 
          name
        }
      }
    }
  }
`;

ComponentPage.propTypes = {
  data: Proptypes.shape({}),
};

ComponentPage.defaultProps = {
  data: {},
};
