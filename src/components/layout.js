import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

function Layout({ header, nav, footer, children }) {
  return (
    <StaticQuery
      query={graphql`
      {
        allSparkIconSet {
          edges {
            node {
              internal{
                content
              }
            }
          }
        }
      }
    `}
      render={data => (
        <div className="nav-layout">
          <div
            dangerouslySetInnerHTML={{
              __html: data.allSparkIconSet.edges[0].node.internal.content,
            }}
          />
          <div className="nav-layout__panel nav-layout__header">
            {header}
          </div>
          <div className="nav-layout__panel nav-layout__nav">
            {nav}
          </div>
          <div className="nav-layout__panel nav-layout__main">
            {children}
            {footer
              && (
              <div>
                {footer}
              </div>
              )
            }
          </div>
        </div>
      )}
    />
  );
}

export default Layout;

Layout.propTypes = {
  header: PropTypes.node,
  nav: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.node,
};
