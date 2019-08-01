import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';
import { Link, navigate } from 'gatsby';
import { SprkTextInput } from '@sparkdesignsystem/spark-react';
import GuidesMenu from '../context/GuidesMenu';
import APIDocumentationMenu from '../context/APIDocumentationMenu';

const Menu = ({ context, components, setContext, menuVisible }) => (
  <div className={classNames(
    'menu',
    { 'menu--visible': menuVisible },
  )}
  >
    <SprkTextInput
      additionalClasses="sprk-u-BackgroundColor--white"
      label="Search"
      hiddenLabel
      leadingIcon="search"
      placeholder="Search"
    />
    <select
      className="menu__select"
      defaultValue={context}
      onChange={
        (e) => {
          setContext(e.target.value);

          if (e.target.value === 'guides') {
            navigate('gettingstarted/');
          } else {
            navigate(`${e.target.value}/`);
          }
        }
      }
    >
      <option value="guides">Guides</option>
      <option value="apidocumentation">API Documentation</option>
    </select>

    { context === 'guides'
    && <GuidesMenu />
    }
    {
      context === 'apidocumentation'
      && <APIDocumentationMenu components={components} />
    }
  </div>
);

export default Menu;

Menu.propTypes = {
  links: propTypes.shape({}),
};
