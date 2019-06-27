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
        allMdx {
          edges {
            node {
              frontmatter {
                path
                title
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
                      data.allMdx.edges
                        .filter(edge => ((edge.node.frontmatter.title
                          && edge.node.frontmatter
                          && edge.node.frontmatter.path) ? edge : null))
                        .map(edge => ({
                          element: Link,
                          text: edge.node.frontmatter.title,
                          to: edge.node.frontmatter.path,
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
                data.allMdx.edges
                  .filter(edge => ((edge.node.frontmatter.title
                    && edge.node.frontmatter
                    && edge.node.frontmatter.path) ? edge : null))
                  .map(edge => ({
                    element: Link,
                    text: edge.node.frontmatter.title,
                    to: edge.node.frontmatter.path })),
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
