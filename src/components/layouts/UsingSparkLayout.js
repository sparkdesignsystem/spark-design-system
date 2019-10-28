import React from 'react';
import Layout from './Layout';

function UsingSparkLayout({children}) {
  return (
    <Layout initialContext={'using-spark'}>{children}</Layout>
  );
}

export default UsingSparkLayout;
