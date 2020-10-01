import React from 'react';
import Layout from './Layout';

function PrinciplesLayout({ children, location }) {
  return (
    <Layout initialContext={'principles'} location={location}>{children}</Layout>
  );
}

PrinciplesLayout.propTypes = {
  children: PropTypes.node,
};

export default PrinciplesLayout;
