import React from 'react';
import Layout from '../components/layout';
import {
  SprkHighlightBoard,
  SprkLink
} from '@sparkdesignsystem/spark-react';

import '../scss/main.scss';

const IndexPage = () => (
  <Layout>
    <SprkHighlightBoard
      imgSrc='https://staging.sparkdesignsystem.com/assets/toolkit/images/wires.jpg'
      imgAlt='Spark Design Systen'
      heading='Welcome to the Spark Design System'
      ctaText='Github'
      ctaHref='https://github.com/sparkdesignsystem/spark-design-system'
      ctaText2='Getting Started'
      ctaHref2='https://sparkdesignsystem.com/gettingstarted/html'
      />
      <div className="sprk-o-Box">
        <p className="sprk-u-mbm">
          Spark Design System is a
          product of <SprkLink href="https://github.com/quickenloans">Quicken Loans</SprkLink>.
          Spark is a system of patterns and components used to
          create the user interface for the Quicken Loans
          family of Fintech products.
        </p>
      </div>
  </Layout>
);

export default IndexPage;
