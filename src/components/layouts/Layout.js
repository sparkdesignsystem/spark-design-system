import React, { useState } from 'react';
import classnames from 'classnames';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

const Layout = ({ children, initialContext,  render }) => {
  const [context, setContext] = useState(initialContext || 'homepage');
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
          <div className="layout__header">
            <Header
              context={context}
              setContext={setContext}
              menuVisible={menuVisible}
              setMenuVisible={setMenuVisible}
            />
          </div>
          <div className={classnames({
            "layout__side-bar": true,
            "layout__side-bar-mobile--visible": menuVisible
          })}>
            <Menu
              components={{}}
              context={context}
              setContext={setContext}
              menuVisible={menuVisible}
              setMenuVisible={setMenuVisible}
            />
          </div>
          <div className="layout__content">
            { children }
            <Footer />
          </div>
        </div>
      )}
    }
  />
)};

export default Layout;
