import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  SprkMasthead,
  SprkTextInput,
  SprkLink,
} from '@sparkdesignsystem/spark-react';
import SiteLogo from './site-logo';
import { useInstallingSparkData } from '../hooks/use-installing-spark';
import { useUsingSparkData } from '../hooks/use-using-spark';
import { usePrincipleSparkData } from '../hooks/use-principle-spark';

const Header = ({ setContext }) => {
  const utilityItems = [
    <SprkLink
      onClick={() => {
        setContext('installing-spark');
      }}
      additionalClasses="sprk-c-Masthead__link"
      variant="simple"
      element={Link}
      to="/installing-spark"
    >
      Installing Spark
    </SprkLink>,
    <SprkLink
      onClick={() => {
        setContext('using-spark');
      }}
      additionalClasses="sprk-c-Masthead__link"
      variant="simple"
      element={Link}
      to="/using-spark"
    >
      Using Spark
    </SprkLink>,
    <SprkLink
      onClick={() => {
        setContext('principles');
      }}
      additionalClasses="sprk-c-Masthead__link"
      variant="simple"
      element={Link}
      to="/principles/design-principles"
    >
      Principles
    </SprkLink>,
    <SprkTextInput
      additionalClasses="docs-header-search--wide sprk-u-mbn"
      leadingIcon="search"
      hiddenLabel
      name="InlineSearch"
      placeholder="Search"
    />,
  ];

  const installingSparkPages = useInstallingSparkData().map((page) => ({
    text: page.node.frontmatter.title,
    to: `/installing-spark/${page.node.parent.name}`,
    element: Link,
  }));

  const usingSparkComponents = useUsingSparkData().components.map((page) => ({
    text: page.node.frontmatter.title,
    to: `/using-spark/components/${page.node.parent.name}`,
    element: Link,
  }));

  const usingSparkFoundations = useUsingSparkData().foundations.map((page) => ({
    text: page.node.frontmatter.title,
    to: `/using-spark/foundations/${page.node.parent.name}`,
    element: Link,
  }));

  const usingSparkPages = usingSparkFoundations.concat(usingSparkComponents);

  const principlePages = usePrincipleSparkData().map((page) => ({
    text: page.node.frontmatter.title,
    to: `/principles/${page.node.parent.name}`,
    element: Link,
  }));

  const narrowNavLinks = [
    {
      element: Link,
      text: 'Installing Spark',
      to: '/installing-spark/html-environment-setup',
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
      siteLogo={
        <SiteLogo
          onClick={() => {
            setContext('homepage');
          }}
        />
      }
      additionalClasses="docs-masthead"
      utilityContents={utilityItems}
      navLink={
        <SprkTextInput
          additionalClasses="docs-header-search sprk-u-Width-100"
          leadingIcon="search"
          hiddenLabel
          name="InlineSearch"
          placeholder="Search"
        />
      }
      narrowNavLinks={narrowNavLinks}
    />
  );
};

Header.propTypes = {
  setContext: PropTypes.func,
};

export default Header;
