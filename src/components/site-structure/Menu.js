import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import { Link, navigate } from 'gatsby';

const Menu = ({ context, menuVisible }) => (
  <div className={classNames(
    'menu',
    { 'menu--visible': menuVisible },
  )}
  >

    { context } is the context

    { context === 'installing-spark'
      && <p>Im a installing menu!</p>
    }
    {
      context === 'using-spark'
      && <p>Im a using spark menu!</p>
    }
    {
      context === 'principles'
      && <p>Im a principles menu!</p>
    }
  </div>
);

export default Menu;

Menu.propTypes = {
  links: propTypes.shape({}),
};
