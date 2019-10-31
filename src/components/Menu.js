import React from 'react';
import propTypes from 'prop-types';
import InstallingSparkDocsMenu from './InstallingSparkDocsMenu';
import UsingSparkDocsMenu from './UsingSparkDocsMenu';
import PrinciplesSparkDocsMenu from './PrinciplesDocsMenu';
import ContextMenu from './ContextMenu';
import { SprkTextInput, SprkDivider } from '@sparkdesignsystem/spark-react';

const Menu = ({ context, setContext}) => (
  <div className="docs-menu">
    <div className="docs-menu__context">
      <ContextMenu
        className="sprk-b-List sprk-b-List--bare"
        context={context}
        setContext={setContext}
      />

      <SprkTextInput
        additionalClasses="docs-nav-search sprk-u-mvl sprk-u-BackgroundColor--white sprk-u-Width--100"
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
