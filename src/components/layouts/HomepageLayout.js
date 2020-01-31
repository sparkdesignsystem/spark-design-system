import React from 'react';
import Layout from './Layout';

function HomepageLayout({ children, location }) {
  return (
    <Layout initialContext={'homepage'} location={location}>{children}</Layout>
  );
}

export default HomepageLayout;
