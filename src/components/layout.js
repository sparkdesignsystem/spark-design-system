import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import {
  SprkTextInput,
  SprkFooter,
} from '@sparkdesignsystem/spark-react';
import SiteLogo from './site-logo';
import Header from './header';
import ContextMenu from './ContextMenu';
// import SiteNavigation from './site-navigation';

const utilityItems = [
  <SprkTextInput
    leadingIcon="search"
    hiddenLabel
    name="InlineSearch"
    placeholder="Search"
  />,
];


function Layout({ children, menuContext }) {
  const [context, setContext] = useState(menuContext || 'guides');

  return (
    <StaticQuery
      query={graphql`
      {
        allSparkIconSet {
          edges {
            node {
              internal {
                content
              }
            }
          }
        }
      }
    `}
      render={
        data => (
          <div className="nav-layout">
            <div
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: data.allSparkIconSet.edges[0].node.internal.content,
              }}
            />
            <div className="nav-layout__panel nav-layout__header">
              <Header
                logo={<SiteLogo />}
                narrowNavLinks={
                  [
                    {
                      text: 'Components',
                      subNavLinks: [],
                    },
                  ]
                }
                utilityItems={utilityItems}
              />
            </div>
            <div className="nav-layout__panel nav-layout__nav">
              <ContextMenu context={context} setContext={setContext} links={[]} />
            </div>
            <div className="nav-layout__panel nav-layout__main">
              {children}
              <SprkFooter
                connectIcons={{
                  heading: 'Connect With Us',
                  icons: [
                    {
                      href: '#nogo',
                      name: 'twitter',
                      screenReaderText: 'Twitter',
                      element: 'a',
                    },
                    {
                      href: '#nogo',
                      name: 'github',
                      screenReaderText: 'github',
                      element: 'a',
                    },
                  ],
                }}
              />
            </div>
          </div>
        )
      }
    />
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
