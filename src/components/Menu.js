import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import InstallingSparkDocsMenu from './InstallingSparkDocsMenu';
import UsingSparkDocsMenu from './UsingSparkDocsMenu';
import PrinciplesSparkDocsMenu from './PrinciplesDocsMenu';
import ContextMenu from './ContextMenu';
import { SprkDivider } from '@sparkdesignsystem/spark-react';

const Menu = ({ context, setContext, menuVisible }) => (
  <div className={classNames('menu',{ 'menu--visible': menuVisible })}>
    <div className="menu__context">
      <ContextMenu
        className="sprk-b-List sprk-b-List--bare"
        context={context}
        setContext={setContext}
      />
      <SprkDivider element="span" />
    </div>
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
