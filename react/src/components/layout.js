import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import { SprkLink, SprkTextInput } from '@sparkdesignsystem/spark-react';
import SiteLogo from './site-logo';
import Header from './header';
import SiteNavigation from './site-navigation';

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
                [{
                  text: 'Components',
                  subNavLinks:
                    data.allMdx.edges
                      .map(edge => ({
                        element: Link,
                        text: edge.node.frontmatter.title,
                        to: edge.node.frontmatter.path,
                      })),
                }]
              }
              utilityItems={utilityItems}
            />
          </div>
          <div className="nav-layout__panel nav-layout__nav">
            <SiteNavigation navItems={
              [{
                text: 'Components',
                subNavLinks:
                  data.allMdx.edges
                    .map(edge => ({
                      element: Link,
                      text: edge.node.frontmatter.title,
                      to: edge.node.frontmatter.path })),
                  }]
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
