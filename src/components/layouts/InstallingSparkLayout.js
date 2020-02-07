import React from 'react';
import Layout from './Layout';

function InstallingSparkLayout({ children, location }) {
  return (
    <Layout initialContext={'installing-spark'} location={location}>{children}</Layout>
  );
}

export default InstallingSparkLayout;
