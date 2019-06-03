import React from 'react';
import Proptypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ContentIframe from '../components/content-iframe';

function ComponentPage({ data }) {
  const { node } = data.allDirectory.edges[0];
  return (
    <Layout>
      <div>
        <h1>{ node.name }</h1>
        <ContentIframe
          title="Preview"
          src={`/react/iframe.html?id=${node.name}--default`}
        />
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
