import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';

const UsingSparkLayout = ({ children }) => (
  <Layout initialContext="using-spark">{children}</Layout>
);

export default UsingSparkLayout;

UsingSparkLayout.propTypes = {
  children: PropTypes.node,
};
