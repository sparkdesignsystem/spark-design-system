import React from 'react';
import { SprkTextInput, SprkLink } from '@sparkdesignsystem/spark-react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SiteNavigation from '../components/site-navigation';

import '../scss/main.scss';
import SiteLogo from '../components/site-logo';
import Header from '../components/header';

const links = [{
  text: 'Item 1',
  subNavLinks: [
    {
      element: Link,
      text: 'Item 1',
      to: '/link',
    },
  ],
},
{
  text: 'Item 2',
  href: 'https://www.google.com',
  target: '_blank',
},
];

const utilityItems = [
  <SprkTextInput
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
  />,
];

const IndexPage = () => (
  <Layout
    header={(
      <Header
        logo={<SiteLogo />}
        narrowNavLinks={links}
        utilityItems={utilityItems}
      />
)}
    footer={(
      <footer>
        <SprkLink
          href="#"
          variant="plain"
          additionalClasses="sprk-c-Masthead__link"
        >
@sparkQL
        </SprkLink>
      </footer>
)}
    nav={<SiteNavigation navItems={links} />}
  >
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
