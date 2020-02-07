import React from 'react';
import propTypes from 'prop-types';
import InstallingSparkDocsMenu from './InstallingSparkDocsMenu';
import UsingSparkDocsMenu from './UsingSparkDocsMenu';
import PrinciplesSparkDocsMenu from './PrinciplesDocsMenu';

const Menu = ({ context }) => (
  <div className="docs-menu">
    { context === 'installing-spark'
      && <InstallingSparkDocsMenu />
    }
    {
      context === 'using-spark'
      && <UsingSparkDocsMenu />
    }
    {
      context === 'principles'
      && <PrinciplesSparkDocsMenu />
    }
  </div>
);

export default Menu;

Menu.propTypes = {
  links: propTypes.shape({}),
  context: propTypes.string,
};
