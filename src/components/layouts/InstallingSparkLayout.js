import React from 'react';
import Layout from './Layout';

function InstallingSparkLayout({children}) {
  return (
    <Layout initialContext={'installing-spark'}>{children}</Layout>
  );
}

export default InstallingSparkLayout;
