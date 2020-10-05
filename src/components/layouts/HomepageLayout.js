import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';

function HomepageLayout({ children, location }) {
  return (
    <Layout initialContext="homepage" location={location}>
      {children}
    </Layout>
  );
}

HomepageLayout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default HomepageLayout;
