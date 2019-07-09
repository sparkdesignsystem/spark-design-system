import React from 'react';
import Layout from '../components/layout';
import {
  SprkHighlightBoard,
  SprkList,
  SprkListItem,
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

        <h3 className="sprk-b-TypeDisplayThree sprk-u-mbm">
          <SprkLink href="https://www.npmjs.com/package/@sparkdesignsystem/spark">
            Spark
          </SprkLink>
        </h3>

        <p className="sprk-u-mbm">
          Spark contains the patterns and components that make up the visual and interaction
          design of the Quicken Loans family of Fintech products. If your application is expected
          to look and behave like a Quicken Loans application, this package is the starting point.
          When the Spark Sass and JS setup files are imported into an application you will receive
          code for all of Spark.
        </p>

        <p className="sprk-u-mbs">
          The following components are in Spark:
        </p>

        <SprkList element="ul">
          <SprkListItem>
            <SprkLink href="/accordions">
              Accordions
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/alerts">
              Alerts
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/buttons">
              Buttons
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/dividers">
              Dividers
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/dropdown">
              Dropdown
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/footer">
              Footer
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/icons">
              Icons
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/inputs">
              Inputs
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/links">
              Links
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/lists">
              Lists
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/masthead">
              Masthead
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/modals">
              Modals
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/pagination">
              Pagination
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/promo">
              Promo
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/stepper">
              Stepper
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/tables">
              Tables
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/tabs">
              Tabbed Navigation
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/toggle">
              Toggle
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/card">
              Card
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/dictionary">
              Dictionary
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/highlight-board">
              Highlight Board
            </SprkLink>
          </SprkListItem>
          <SprkListItem>
            <SprkLink href="/awards">
              Awards
            </SprkLink>
          </SprkListItem>
          </SprkList>
      </div>
  </Layout>
);

export default IndexPage;
