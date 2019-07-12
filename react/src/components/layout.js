import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import {
  SprkTextInput,
  SprkFooter
} from '@sparkdesignsystem/spark-react';
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
                type
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
      render={
        data => {
          let docPages = [];
          let fundamentals = [];
          let components = [];

          data.allMdx.edges.map(edge => {
            if (edge.node.frontmatter.type === 'fundamental') {
              return fundamentals.push({
                element: Link,
                text: edge.node.frontmatter.title,
                to: edge.node.frontmatter.path
              });
            } else if (edge.node.frontmatter.type === 'component') {
              return components.push({
                element: Link,
                text: edge.node.frontmatter.title,
                to: edge.node.frontmatter.path
              });
            } else {
              return docPages.push({
                element: Link,
                text: edge.node.frontmatter.title,
                to: edge.node.frontmatter.path
              });
            }
          });

          return (
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
                    [
                      {
                        text: 'Documentation',
                        subNavLinks: docPages
                      },
                      {
                        text: 'Fundamentals',
                        subNavLinks: fundamentals
                      },
                      {
                        text: 'Components',
                        subNavLinks: components
                      },
                    ]
                  }
                  utilityItems={utilityItems}
                />
              </div>
              <div className="nav-layout__panel nav-layout__nav">
                <SiteNavigation navItems={
                  [
                    {
                      text: 'Documentation',
                      subNavLinks: docPages
                    },
                    {
                      text: 'Fundamentals',
                      subNavLinks: fundamentals
                    },
                    {
                      text: 'Components',
                      subNavLinks: components
                    },
                  ]
                }
                />
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
      }
    />
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
