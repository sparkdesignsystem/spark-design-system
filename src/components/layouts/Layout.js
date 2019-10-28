import React, { useState } from 'react';
import classnames from 'classnames';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import '../../scss/main.scss';

const Layout = ({ children, initialContext }) => {
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
        <div className="docs-layout">
          <div
              // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: data.allSparkIconSet.edges[0].node.internal.content,
            }}
          />
          <div className="docs-layout__header">
            <Header
              context={context}
              setContext={setContext}
              menuVisible={menuVisible}
              setMenuVisible={setMenuVisible}
            />
          </div>
          <div className={classnames({
            "docs-layout__side-bar": true,
            "docs-layout__side-bar-mobile--visible": menuVisible
          })}>
            <Menu
              components={{}}
              context={context}
              setContext={setContext}
              menuVisible={menuVisible}
              setMenuVisible={setMenuVisible}
            />
          </div>
          <div className="docs-layout__content">
            { children }
            <Footer />
          </div>
        </div>
      )}
    }
  />
)};

export default Layout;
