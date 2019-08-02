import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({ children, menuContext, render }) => {
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
        reactAllFile: allFile(filter: {absolutePath: {regex: "/\\/react\\//"}, name: {regex: "/stories/"}}) {
          edges {
            node {
              id
              name
            }
          }
        }
        angularAllFile: allFile(filter: {absolutePath: {regex: "/\\/angular\\//"}, name: {regex: "/stories/"}}) {
          edges {
            node {
              id
              name
            }
          }
        }
        htmlAllFile: allFile(filter: {absolutePath: {regex: "/\\/vanilla\\//"}, name: {regex: "/stories/"}}) {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `}
    render={data => { 

      const reactStoriedComponents =  
        data.reactAllFile.edges.map((edge) => { 
          return edge
            .node
            .name
            .split('.')[0]
            .replace(/Sprk/, '')
            .toLowerCase();
        });

      const angularStoriedComponents =
        data.angularAllFile.edges.map((edge) => { 
          return edge
            .node
            .name
            .split('.')[0]
            .replace(/sprk\-/, '');
        });

      const vanillaStoriedComponents = 
        data.htmlAllFile.edges.map((edge) => { 
        return edge
          .node
          .name
          .split('.')[0]
          .replace(/Sprk/, '');
        });

      const components = Array.from(
        new Set([
          ...reactStoriedComponents,
          ...angularStoriedComponents,
          ...vanillaStoriedComponents
        ])).sort();

      return(
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
              components={components}
              context={context}
              setContext={setContext}
              menuVisible={menuVisible}
              setMenuVisible={setMenuVisible}
            />
            <div className="content">
              { render && render(components, reactStoriedComponents, angularStoriedComponents, vanillaStoriedComponents) }
              { children }
              <Footer />
            </div>
          </div>
        </div>
      )}
    }
  />
)};

export default Layout;
