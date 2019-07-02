import React from 'react';
import Proptypes from 'prop-types';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../components/layout';

const ComponentPage = ({ pageContext }) => {
  return (
    <Layout>
      <MDXRenderer>{pageContext.body}</MDXRenderer>
    </Layout>
  )
};

export default ComponentPage;

ComponentPage.propTypes = {
  pageContext: Proptypes.shape({}),
}