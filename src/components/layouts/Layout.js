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
import H4 from '../markdown-render/h4';
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
  h4: H4,
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
  const lastPartofPath = /[^/]*$/;
  const currentPagePath = location ? location.pathname.match(lastPartofPath) : 'Home';
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
          <svg className="sprk-u-Width-100" width="1280" height="228" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#333" transform="translate(40.445 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M51.113 16.084l7.42 12.057M80.333 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M84.043 16.084l-7.421 12.057M47.866 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M80.833 7.774h3.638v1h-3.638z" /><path d="M82.188 5.42h.928c.512 0 .927.415.927.927H81.26c0-.512.415-.928.928-.928zM79.405 6.347h6.493a.927.927 0 01-.927.927h-4.639a.927.927 0 01-.927-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M46.511 7.774h3.638v1h-3.638z" /><path d="M47.866 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.416-.928.928-.928zM45.083 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g><path d="M48.169 6.144c65.598 23.081 116.148 34.593 151.651 34.534 35.503-.058 78.696-11.502 129.577-34.331" stroke="#BEBEBE" stroke-linecap="round" /><path d="M82.652 6.347c44.946 21.015 84.606 31.522 118.98 31.522 34.376 0 88.49-10.507 162.343-31.522" stroke="#BEBEBE" stroke-linecap="round" /><g fill="#333" transform="translate(321.512 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M332.18 16.084l7.42 12.057M361.4 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M365.11 16.084l-7.421 12.057M328.933 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M361.9 7.774h3.638v1H361.9z" /><path d="M363.255 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.415-.928.928-.928zM360.472 6.347h6.493a.927.927 0 01-.927.927h-4.639a.927.927 0 01-.927-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M327.578 7.774h3.638v1h-3.638z" /><path d="M328.933 5.42h.928c.512 0 .927.415.927.927h-2.782c0-.512.415-.928.927-.928zM326.15 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g><g fill="#333" transform="translate(321.512 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M332.18 16.084l7.42 12.057M361.4 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M365.11 16.084l-7.421 12.057M328.933 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M361.9 7.774h3.638v1H361.9z" /><path d="M363.255 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.415-.928.928-.928zM360.472 6.347h6.493a.927.927 0 01-.927.927h-4.639a.927.927 0 01-.927-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M327.578 7.774h3.638v1h-3.638z" /><path d="M328.933 5.42h.928c.512 0 .927.415.927.927h-2.782c0-.512.415-.928.927-.928zM326.15 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g><path d="M329.236 6.144c65.598 23.081 116.148 34.593 151.651 34.534 35.503-.058 78.696-11.502 129.577-34.331" stroke="#BEBEBE" stroke-linecap="round" /><path d="M363.719 6.347c44.946 21.015 84.606 31.522 118.98 31.522 34.376 0 88.49-10.507 162.343-31.522" stroke="#BEBEBE" stroke-linecap="round" /><g fill="#333" transform="translate(602.58 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M613.247 16.084l7.42 12.057M642.467 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M646.177 16.084l-7.421 12.057M610 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M642.967 7.774h3.638v1h-3.638z" /><path d="M644.322 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.415-.928.928-.928zM641.539 6.347h6.493a.927.927 0 01-.927.927h-4.639a.927.927 0 01-.927-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M608.645 7.774h3.638v1h-3.638z" /><path d="M610 5.42h.928c.512 0 .927.415.927.927h-2.782c0-.512.415-.928.927-.928zM607.217 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g><g><g fill="#333" transform="translate(602.58 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M613.247 16.084l7.42 12.057M642.467 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M646.177 16.084l-7.421 12.057M610 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M642.967 7.774h3.638v1h-3.638z" /><path d="M644.322 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.415-.928.928-.928zM641.539 6.347h6.493a.927.927 0 01-.927.927h-4.639a.927.927 0 01-.927-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M608.645 7.774h3.638v1h-3.638z" /><path d="M610 5.42h.928c.512 0 .927.415.927.927h-2.782c0-.512.415-.928.927-.928zM607.217 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g></g><path d="M610.303 6.144C675.9 29.225 726.45 40.737 761.954 40.678c35.504-.058 78.696-11.502 129.577-34.331" stroke="#BEBEBE" stroke-linecap="round" /><path d="M644.786 6.347c44.946 21.015 84.606 31.522 118.98 31.522 34.376 0 88.49-10.507 162.343-31.522" stroke="#BEBEBE" stroke-linecap="round" /><g><g fill="#333" transform="translate(883.646 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M894.314 16.084l7.42 12.057M923.534 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M927.244 16.084l-7.42 12.057M891.067 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M924.034 7.774h3.638v1h-3.638z" /><path d="M925.389 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.415-.928.928-.928zM922.606 6.347h6.493a.927.927 0 01-.927.927h-4.639a.927.927 0 01-.927-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M889.712 7.774h3.638v1h-3.638z" /><path d="M891.067 5.42h.928c.512 0 .927.415.927.927h-2.782c0-.512.415-.928.927-.928zM888.284 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g></g><g><g fill="#333" transform="translate(883.646 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M894.314 16.084l7.42 12.057M923.534 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M927.244 16.084l-7.42 12.057M891.067 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M924.034 7.774h3.638v1h-3.638z" /><path d="M925.389 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.415-.928.928-.928zM922.606 6.347h6.493a.927.927 0 01-.927.927h-4.639a.927.927 0 01-.927-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M889.712 7.774h3.638v1h-3.638z" /><path d="M891.067 5.42h.928c.512 0 .927.415.927.927h-2.782c0-.512.415-.928.927-.928zM888.284 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g></g><path d="M891.37 6.144c65.598 23.081 116.148 34.593 151.651 34.534 35.504-.058 78.696-11.502 129.577-34.331" stroke="#BEBEBE" stroke-linecap="round" /><path d="M925.853 6.347c44.946 21.015 84.606 31.522 118.98 31.522 34.376 0 88.49-10.507 162.343-31.522" stroke="#BEBEBE" stroke-linecap="round" /><g><g fill="#333" transform="translate(1164.713 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M1175.381 16.084l7.42 12.057M1204.601 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M1208.311 16.084l-7.42 12.057M1172.134 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M1205.101 7.774h3.638v1h-3.638z" /><path d="M1206.456 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.416-.928.928-.928zM1203.673 6.347h6.493a.927.927 0 01-.927.927h-4.639a.927.927 0 01-.927-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M1170.78 7.774h3.637v1h-3.638z" /><path d="M1172.134 5.42h.928c.512 0 .927.415.927.927h-2.782c0-.512.415-.928.927-.928zM1169.351 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g></g><g><g fill="#333" transform="translate(1164.713 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M1175.381 16.084l7.42 12.057M1204.601 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M1208.311 16.084l-7.42 12.057M1172.134 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M1205.101 7.774h3.638v1h-3.638z" /><path d="M1206.456 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.416-.928.928-.928zM1203.673 6.347h6.493a.927.927 0 01-.927.927h-4.639a.927.927 0 01-.927-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M1170.78 7.774h3.637v1h-3.638z" /><path d="M1172.134 5.42h.928c.512 0 .927.415.927.927h-2.782c0-.512.415-.928.927-.928zM1169.351 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g></g><path d="M1172.437 6.144c65.598 23.081 116.148 34.593 151.651 34.534 35.504-.058 78.696-11.502 129.577-34.331" stroke="#BEBEBE" stroke-linecap="round" /><path d="M1206.92 6.347c44.946 21.015 84.606 31.522 118.98 31.522 34.376 0 88.49-10.507 162.344-31.522" stroke="#BEBEBE" stroke-linecap="round" /><g><g fill="#333" transform="translate(1445.78 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M1456.448 16.084l7.42 12.057M1485.668 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M1489.378 16.084l-7.42 12.057M1453.201 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M1486.168 7.774h3.638v1h-3.638z" /><path d="M1487.523 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.416-.928.928-.928zM1484.74 6.347h6.493a.927.927 0 01-.927.927h-4.638a.927.927 0 01-.928-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M1451.846 7.774h3.638v1h-3.638z" /><path d="M1453.201 5.42h.928c.512 0 .927.415.927.927h-2.782c0-.512.415-.928.927-.928zM1450.418 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g></g><g><g fill="#333" transform="translate(1445.78 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M1456.448 16.084l7.42 12.057M1485.668 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M1489.378 16.084l-7.42 12.057M1453.201 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M1486.168 7.774h3.638v1h-3.638z" /><path d="M1487.523 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.416-.928.928-.928zM1484.74 6.347h6.493a.927.927 0 01-.927.927h-4.638a.927.927 0 01-.928-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M1451.846 7.774h3.638v1h-3.638z" /><path d="M1453.201 5.42h.928c.512 0 .927.415.927.927h-2.782c0-.512.415-.928.927-.928zM1450.418 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g></g><path d="M1453.504 6.144c65.598 23.081 116.148 34.593 151.652 34.534 35.503-.058 78.695-11.502 129.576-34.331" stroke="#BEBEBE" stroke-linecap="round" /><path d="M1487.987 6.347c44.946 21.015 84.606 31.522 118.98 31.522 34.376 0 88.49-10.507 162.344-31.522M-232.898 6.144C-167.3 29.225-116.75 40.737-81.247 40.678-45.744 40.62-2.55 29.176 48.33 6.347" stroke="#BEBEBE" stroke-linecap="round" /><path d="M-198.415 6.347c44.946 21.015 84.606 31.522 118.98 31.522 34.376 0 88.49-10.507 162.343-31.522" stroke="#BEBEBE" stroke-linecap="round" /><g><g fill="#333" transform="translate(40.445 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M51.113 16.084l7.42 12.057M80.333 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M84.043 16.084l-7.421 12.057M47.866 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M80.833 7.774h3.638v1h-3.638z" /><path d="M82.188 5.42h.928c.512 0 .927.415.927.927H81.26c0-.512.415-.928.928-.928zM79.405 6.347h6.493a.927.927 0 01-.927.927h-4.639a.927.927 0 01-.927-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M46.511 7.774h3.638v1h-3.638z" /><path d="M47.866 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.416-.928.928-.928zM45.083 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g></g><g><g fill="#333" transform="translate(1726.847 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M1737.515 16.084l7.42 12.057M1766.735 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M1770.445 16.084l-7.42 12.057M1734.268 16.084l7.421 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M1767.235 7.774h3.638v1h-3.638z" /><path d="M1768.59 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.416-.928.928-.928zM1765.807 6.347h6.493a.927.927 0 01-.927.927h-4.638a.927.927 0 01-.928-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M1732.913 7.774h3.638v1h-3.638z" /><path d="M1734.268 5.42h.928c.512 0 .927.415.927.927h-2.782c0-.512.415-.928.927-.928zM1731.485 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g></g><g><g fill="#333" transform="translate(-240.622 .782)"><path d="M22.408 0h5.276a2 2 0 012 2v225.218h-9.276V2a2 2 0 012-2z" /><rect y="7.419" width="50.091" height="9.274" rx="4.637" /><rect x="12.059" y="26.895" width="26.901" height="5.565" rx="2.782" /><path d="M19.697 44.516h4.421v8.347h-4.42a3 3 0 01-3-3v-2.347a3 3 0 013-3zM30.466 85.323h-5.42v-8.347h5.42a2 2 0 012 2v4.347a2 2 0 01-2 2z" /></g><path stroke="#333" stroke-width="2" stroke-linecap="square" d="M-229.954 16.084l7.42 12.057M-200.734 16.084l-7.42 12.057" /><path stroke="#333" stroke-linecap="square" d="M-197.024 16.084l-7.421 12.057M-233.2 16.084l7.42 12.057" /><g fill="#D8D8D8"><path stroke="#404040" d="M-200.234 7.774h3.638v1h-3.638z" /><path d="M-198.88 5.42h.929c.512 0 .927.415.927.927h-2.783c0-.512.415-.928.928-.928zM-201.662 6.347h6.493a.927.927 0 01-.927.927h-4.639a.927.927 0 01-.927-.927z" /></g><g fill="#D8D8D8"><path stroke="#404040" d="M-234.556 7.774h3.638v1h-3.638z" /><path d="M-233.201 5.42h.928c.512 0 .927.415.927.927h-2.783c0-.512.416-.928.928-.928zM-235.984 6.347h6.494a.927.927 0 01-.928.927h-4.638a.927.927 0 01-.928-.927z" /></g></g></g></svg>
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
