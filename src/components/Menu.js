import React from 'react';
import propTypes from 'prop-types';
import { SprkDivider } from '@sparkdesignsystem/spark-react';
import InstallingSparkDocsMenu from './InstallingSparkDocsMenu';
import UsingSparkDocsMenu from './UsingSparkDocsMenu';
import PrinciplesSparkDocsMenu from './PrinciplesDocsMenu';
import ContextMenu from './ContextMenu';

const Menu = ({ context, setContext}) => (
  <div className="docs-menu">
    { context === 'installing-spark'
      && <InstallingSparkDocsMenu/>
    }
    {
      context === 'using-spark'
      && <UsingSparkDocsMenu/>
    }
    {
      context === 'principles'
      && <PrinciplesSparkDocsMenu/>
    }
  </div>
);

export default Menu;

Menu.propTypes = {
  links: propTypes.shape({}),
};
