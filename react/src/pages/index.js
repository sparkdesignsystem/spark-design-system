import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';

import '../scss/main.scss';

const IndexPage = () => (
  <Layout>
    <div className="sprk-o-Box">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
