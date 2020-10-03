import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';

const UsingSparkLayout = ({ children, location }) => (
  <Layout initialContext="using-spark" location={location}>
    {children}
  </Layout>
);

export default UsingSparkLayout;

UsingSparkLayout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.string,
};
