/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require('react');

exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
) => {

  setHeadComponents([
    <link
      key="plugin-docsearch-css"
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
    />
  ]);

  setPostBodyComponents([
    <script
      key="plugin-docsearch-js"
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js"
    />,
  ]);
};
