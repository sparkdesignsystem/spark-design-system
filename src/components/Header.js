import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  SprkTextInput,
  SprkLink,
  SprkMasthead,
} from '@sparkdesignsystem/spark-react';
import SiteLogo from './site-logo';

const Header = ({ context, setContext }) => {
  const utilityItems = [
    (
      <SprkLink
        onClick={
          () => {
            setContext('installing-spark');
          }
        }
        additionalClasses="sprk-c-Masthead__link"
        variant="plain"
        element={Link}
        to="/installing-spark/setting-up-your-environment"
      >
        Installing Spark
      </SprkLink>
    ),
    (
      <SprkLink
        onClick={
          () => {
            setContext('using-spark');
            console.log(context, 'using-spark');
          }
        }
        additionalClasses="sprk-c-Masthead__link"
        variant="plain"
        element={Link}
        to="/using-spark/foundations/color"
      >
        Using Spark
      </SprkLink>
    ),
    (
      <SprkLink
        onClick={
          () => {
            setContext('principles');
            console.log(context, 'principles');
          }
        }
        additionalClasses="sprk-c-Masthead__link"
        variant="plain"
        element={Link}
        to="/principles/accessibility-guidelines"
      >
        Principles
      </SprkLink>
    ),
    (
      <SprkTextInput
        additionalClasses="docs-header-search sprk-u-mbn"
        leadingIcon="search"
        hiddenLabel
        name="InlineSearch"
        placeholder="Search"
      />
    ),
  ];

  const narrowNavLinks = [
    {
      element: Link,
      text: 'Installing Spark',
      to: '/installing-spark/setting-up-your-environment',
      onClick: () => {
        setContext('installing-spark');
      },
    },
    {
      element: Link,
      text: 'Using Spark',
      to: '/using-spark/foundations/color',
      onClick: () => {
        setContext('using-spark');
      },
    },
    {
      element: Link,
      text: 'Principles',
      to: '/principles/accessibility-guidelines',
      onClick: () => {
        setContext('principles');
      },
    },
  ];

  return (
    <SprkMasthead
      siteLogo={(
        <SiteLogo onClick={() => { setContext('homepage'); }} />
      )}
      additionalClasses="docs-masthead"
      utilityContents={utilityItems}
      navLink={(
        <SprkTextInput
          additionalClasses="docs-header-search sprk-u-Width-100"
          leadingIcon="search"
          hiddenLabel
          name="InlineSearch"
          placeholder="Search"
        />
      )}
      narrowNavLinks={narrowNavLinks}
    />
  );
};

Header.propTypes = {
  menuVisible: PropTypes.bool,
  setMenuVisible: PropTypes.func,
  context: PropTypes.string,
  setContext: PropTypes.func,
};

export default Header;
