import React, { useState } from 'react';
import classnames from 'classnames';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import '../../scss/main.scss';

import H1 from '../markdown-render/h1';
import H2 from '../markdown-render/h2';
import H3 from '../markdown-render/h3';
import P from '../markdown-render/p';
import Ul from '../markdown-render/ul';
import Li from '../markdown-render/li';
import A from '../markdown-render/a';
import inlineCode from '../markdown-render/inlineCode';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  li: Li,
  a: A,
  code: inlineCode,
};

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
      render={data => (
        <>
          <div className="docs-layout sprk-o-CenteredColumn">
            <div
              className="sprk-u-Display--none"
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
              <MDXProvider components={components}>
                { children }
              </MDXProvider>
            </div>
          </div>
          <Footer />
        </>
      )
    }
    />
  );
};

export default Layout;
