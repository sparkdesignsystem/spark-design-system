import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({ children, menuContext }) => {
  const [context, setContext] = useState(menuContext || 'guides');
  const [menuVisible, setMenuVisible] = useState(false);

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
        allDirectory(filter: {relativePath: {regex: "/^components\\//"}, relativeDirectory: {eq: "components"}}) {
          edges {
            node {
              name
              relativePath
              relativeDirectory
            }
          }
        }
        reactMdx: allMdx(filter: {fileAbsolutePath: {regex: "/react/"}}) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              parent {
                ... on File {
                  id
                  name
                }
              }
            }
          }
        }
        angularMdx: allMdx(filter: {fileAbsolutePath: {regex: "/angular/"}}) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              parent {
                ... on File {
                  id
                  name
                }
              }
            }
          }
        }
        htmlMdx: allMdx(filter: {fileAbsolutePath: {regex: "/vanilla/"}}) {
          edges {
            node {
              id
              frontmatter {
                title
              }
              parent {
                ... on File {
                  id
                  name
                }
              }
            }
          }
        }
      }
    `}
      render={data => (
        <div className="layout">
          <div
              // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: data.allSparkIconSet.edges[0].node.internal.content,
            }}
          />
          <Header
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
          />
          <div className="content-menu-wrapper">
            <Menu
              context={context}
              setContext={setContext}
              menuVisible={menuVisible}
              setMenuVisible={setMenuVisible}
            />
            <div className="content">
              { children }
            </div>
          </div>
          <Footer />
        </div>
      )}
    />
  );
};

export default Layout;
