/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (typeof docsearch !== 'undefined') {
    docsearch({ // eslint-disable-line no-undef
      apiKey: '9486baf438a1d7fd0b6c982838d6f9bc',
      indexName: 'sparkdesignsystem',
      inputSelector: '.docs-header-search input',
      debug: 'false',
    });

    docsearch({ // eslint-disable-line no-undef
      apiKey: '9486baf438a1d7fd0b6c982838d6f9bc',
      indexName: 'sparkdesignsystem',
      inputSelector: '.docs-header-search--wide input',
      debug: 'false',
    });
  }

  const mainContent = document.querySelector('#gatsby-focus-wrapper');
  if (mainContent) mainContent.setAttribute('data-sprk-main', '');
  document.getElementsByTagName('html')[0].classList.add('sprk-u-JavaScript');

  if (prevLocation !== null) {
    const skipNav = document.querySelector("#skip_nav")
    if (skipNav) {
      skipNav.focus()
    }
  }
};
