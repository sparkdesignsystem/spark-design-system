import React from 'react';
import Layout from './Layout';

function PrinciplesLayout({children}) {
  return (
    <Layout initialContext={'principles'}>{children}</Layout>
  );
}

export default PrinciplesLayout;
