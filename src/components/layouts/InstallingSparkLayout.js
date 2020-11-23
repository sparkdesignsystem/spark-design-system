import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';

function InstallingSparkLayout({ children, location }) {
  return (
    <Layout initialContext="installing-spark" location={location}>
      {children}
    </Layout>
  );
}

InstallingSparkLayout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default InstallingSparkLayout;
