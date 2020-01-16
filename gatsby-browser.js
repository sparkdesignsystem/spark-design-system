/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
exports.onRouteUpdate = () => {
  if (typeof docsearch !== 'undefined') {
    docsearch({ // eslint-disable-line no-undef
      apiKey: '9486baf438a1d7fd0b6c982838d6f9bc',
      indexName: 'sparkdesignsystem',
      inputSelector: '.docs-header-search .sprk-u-Width-100',
      debug: 'false',
    });
  }
};
