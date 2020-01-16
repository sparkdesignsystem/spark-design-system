import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  SprkTextInput,
  SprkLink,
  SprkMasthead,
} from '@sparkdesignsystem/spark-react';
import SiteLogo from './site-logo';
import { useInstallingSparkData } from '../hooks/use-installing-spark';
import { useUsingSparkData } from '../hooks/use-using-spark';
import { usePrincipleSparkData } from '../hooks/use-principle-spark';

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

  const installingSparkPages = useInstallingSparkData().map(page => (
    {
      text: page.node.frontmatter.title,
      to: `/installing-spark/${page.node.parent.name}`,
      element: Link,
    }
  ));

  const usingSparkPages = useUsingSparkData().map(page => (
    {
      text: page.node.frontmatter.title,
      to: `/using-spark/${page.node.parent.name}`,
      element: Link,
    }
  ));

  const principlePages = usePrincipleSparkData().map(page => (
    {
      text: page.node.frontmatter.title,
      to: `/principles/${page.node.parent.name}`,
      element: Link,
    }
  ));

  const narrowNavLinks = [
    {
      element: Link,
      text: 'Installing Spark',
      to: '/installing-spark/setting-up-your-environment',
      onClick: () => {
        setContext('installing-spark');
      },
      subNavLinks: installingSparkPages,
    },
    {
      element: Link,
      text: 'Using Spark',
      to: '/using-spark/foundations/color',
      onClick: () => {
        setContext('using-spark');
      },
      subNavLinks: usingSparkPages,
    },
    {
      element: Link,
      text: 'Principles',
      to: '/principles/accessibility-guidelines',
      onClick: () => {
        setContext('principles');
      },
      subNavLinks: principlePages,
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
  context: PropTypes.string,
  setContext: PropTypes.func,
};

export default Header;
