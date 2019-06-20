import React from 'react';
import Proptypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ContentIframe from '../components/content-iframe';

function ComponentPage({ data }) {
  const { node } = data.allDirectory.edges[0];
  /*
  *  TODO: Get Storybook story data
  * from storybook to pass in here
  * to use to build iframe url.
  * See react/.storybook/config.js, line 53, line 57
  * */
  return (
    <Layout>
      <div>
        <h1>{ node.name }</h1>
        <ContentIframe
          title="Preview"
          variant=""
          src={`/iframe.html?id=components-${node.name}`}
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
