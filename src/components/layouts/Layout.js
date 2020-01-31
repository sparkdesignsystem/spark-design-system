import React, { useState } from 'react';
import classnames from 'classnames';
import { MDXProvider } from '@mdx-js/react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import '../../scss/main.scss';

import SEO from '../seo';
import H1 from '../markdown-render/h1';
import H2 from '../markdown-render/h2';
import H3 from '../markdown-render/h3';
import P from '../markdown-render/p';
import Ul from '../markdown-render/ul';
import Li from '../markdown-render/li';
import A from '../markdown-render/a';
import Table from '../markdown-render/table';
import Blockquote from '../markdown-render/blockquote';
import inlineCode from '../markdown-render/inlineCode';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  li: Li,
  a: A,
  table: Table,
  blockquote: Blockquote,
  code: inlineCode,
};

const Layout = ({ children, initialContext, hasSideBar, location }) => {
  const [context, setContext] = useState(initialContext || 'homepage');
  const [menuVisible, setMenuVisible] = useState(false);
  const currentPagePath = location ? /[^/]*$/.exec(location.pathname) : 'Home';
  const currentPageName = currentPagePath
    .toString()
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ');

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
          <Header
            context={context}
            setContext={setContext}
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
          />
          <SEO title={currentPageName} />
          <div className="docs-layout sprk-o-CenteredColumn">
            <div
              className="sprk-u-Display--none"
                // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: data.allSparkIconSet.edges[0].node.internal.content,
              }}
            />

            {hasSideBar
              && (
              <div className={classnames({
                'docs-layout__side-bar': true,
              })}
              >
                <Menu
                  components={{}}
                  context={context}
                  setContext={setContext}
                  menuVisible={menuVisible}
                  setMenuVisible={setMenuVisible}
                />
              </div>
              )
            }

            <div className="docs-layout__content sprk-o-Box sprk-o-Box--large">
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

Layout.defaultProps = {
  hasSideBar: true,
};

Layout.propTypes = {
  children: PropTypes.node,
  hasSideBar: PropTypes.bool,
  initialContext: PropTypes.string,
};

export default Layout;
