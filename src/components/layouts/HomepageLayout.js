import React from 'react';
import Layout from './Layout';

function HomepageLayout({children}) {
  return (
    <Layout initialContext={'homepage'}>{children}</Layout>
  );
}

export default HomepageLayout;
