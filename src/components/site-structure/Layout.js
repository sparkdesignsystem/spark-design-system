import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({ children, render }) => {
  const [context, setContext] = useState('homepage');
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
      }
    `}
    render={data => {

      return(
        <div className="layout">
          <div
              // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: data.allSparkIconSet.edges[0].node.internal.content,
            }}
          />
          <Header
            setContext={setContext}
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
          />
          <div className="content-menu-wrapper">
            { context !== 'homepage' &&
            <Menu
              components={{}}
              context={context}
              menuVisible={menuVisible}
              setMenuVisible={setMenuVisible}
            />}
            <div className="content">
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
