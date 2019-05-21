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
  logo: PropTypes.string,
  narrowNavLinks: PropTypes.arrayOf(PropTypes.Object),
  utilityItems: PropTypes.arrayOf(PropTypes.Object),
};
