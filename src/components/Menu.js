import React from 'react';
import propTypes from 'prop-types';
import InstallingSparkDocsMenu from './InstallingSparkDocsMenu';
import UsingSparkDocsMenu from './UsingSparkDocsMenu';
import PrinciplesSparkDocsMenu from './PrinciplesDocsMenu';
import ContextMenu from './ContextMenu';
import { SprkTextInput, SprkDivider } from '@sparkdesignsystem/spark-react';

const Menu = ({ context, setContext}) => (
  <div className="menu">
    <div className="menu__context">
      <ContextMenu
        className="sprk-b-List sprk-b-List--bare"
        context={context}
        setContext={setContext}
      />

      <SprkTextInput
        additionalClasses="sprk-u-mvl sprk-u-BackgroundColor--white"
        leadingIcon="search"
        hiddenLabel
        name="InlineSearch"
        placeholder="Search"
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
