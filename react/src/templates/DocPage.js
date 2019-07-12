import React from 'react';
import Layout from '../components/layout';
import Proptypes from 'prop-types';
import { MDXRenderer } from 'gatsby-mdx';

const DocPage = ({ pageContext, title } ) =>  {
  console.log(pageContext, 'docs page');

  return (
  <Layout>
    <h1 className="sprk-b-TypeDisplayOne sprk-u-mbm">
      { title }
    </h1>

    <MDXRenderer>{ pageContext.body }</MDXRenderer>
  </Layout>
)};

export default DocPage;

DocPage.propTypes = {
  pageContext: Proptypes.shape({}),
}