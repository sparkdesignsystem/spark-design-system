import React from 'react';
import PropTypes from 'prop-types';

import { SprkMasthead } from '@sparkdesignsystem/spark-react';

function Header({ logo, narrowNavLinks, utilityItems }) {
  return (
    <header className="header">
      <SprkMasthead
        narrowNavLinks={narrowNavLinks}
        utilityContents={utilityItems}
        siteLogo={logo}
      />
    </header>
  );
}

export default Header;

Header.propTypes = {
  logo: PropTypes.node,
  narrowNavLinks: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  })),
  utilityItems: PropTypes.arrayOf(PropTypes.node),
};
