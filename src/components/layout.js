import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { SprkLink, SprkTextInput } from '@sparkdesignsystem/spark-react';
import SiteLogo from './site-logo';
import Header from './header';
import SiteNavigation from './site-navigation';

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
  to: '/link',
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


function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
      {
        allDirectory {
          edges {
            node {
              name
              fields {
                slug 
              }
            }
          }
        }
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
      render={data => (
        <div className="nav-layout">
          {
          }
          <div
            dangerouslySetInnerHTML={{
              __html: data.allSparkIconSet.edges[0].node.internal.content,
            }}
          />
          <div className="nav-layout__panel nav-layout__header">
            <Header
              logo={<SiteLogo />}
              narrowNavLinks={
                links.concat(
                  [{
                    text: 'Components',
                    subNavLinks:
                      data.allDirectory.edges
                        .filter(edge => ((edge.node.name
                          && edge.node.fields
                          && edge.node.fields.slug) ? edge : null))
                        .map(edge => ({
                          element: Link,
                          text: edge.node.name,
                          to: edge.node.fields.slug,
                        })),
                  }],
                )
              }
              utilityItems={utilityItems}
            />
          </div>
          <div className="nav-layout__panel nav-layout__nav">
            <SiteNavigation navItems={
              links.concat(
                [{
                  text: 'Components',
                  subNavLinks:
                data.allDirectory.edges
                  .filter(edge => ((edge.node.name
                    && edge.node.fields
                    && edge.node.fields.slug) ? edge : null))
                  .map(edge => ({
                    element: Link,
                    text: edge.node.name,
                    to: edge.node.fields.slug })),
                }],
              )
            }
            />
          </div>
          <div className="nav-layout__panel nav-layout__main">
            {children}
            <footer>
              <SprkLink
                href="#"
                variant="plain"
                additionalClasses="sprk-c-Masthead__link"
              >
                @sparkQL
              </SprkLink>
            </footer>
          </div>
        </div>
      )}
    />
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
