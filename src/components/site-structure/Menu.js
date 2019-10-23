import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import { Link, navigate } from 'gatsby';
import InstallingSparkDocsMenu from '../context/InstallingSparkDocsMenu';
import UsingSparkDocsMenu from '../context/UsingSparkDocsMenu';
import PrinciplesSparkDocsMenu from '../context/PrinciplesDocsMenu';

const Menu = ({ context, menuVisible }) => (
  <div className={classNames(
    'menu',
    { 'menu--visible': menuVisible },
  )}
  >
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
