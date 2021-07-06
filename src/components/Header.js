import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import {
  SprkMasthead,
  SprkInput,
  SprkLabel,
  SprkIcon,
  SprkInputContainer,
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
      to="/principles/accessibility-guidelines"
    >
      Principles
    </SprkLink>,
    <SprkInputContainer additionalClasses="docs-header-search--wide sprk-u-mbn">
      <div className="sprk-b-InputContainer__icon-container">
        <SprkLabel htmlFor="inline-search" isHidden>
          Search
        </SprkLabel>
        <SprkIcon
          iconName="search"
          additionalClasses="sprk-b-InputContainer__icon"
          aria-hidden="true"
        />
        <SprkInput
          id="inline-search"
          additionalClasses="sprk-b-TextInput--has-svg-icon"
          type="search"
          placeholder="Search"
        />
      </div>
    </SprkInputContainer>,
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

  const usingSparkExamples = useUsingSparkData().examples.map((page) => ({
    text: page.node.frontmatter.title,
    to: `/using-spark/examples/${page.node.parent.name}`,
    element: Link,
  }));

  const usingSparkFoundations = useUsingSparkData().foundations.map((page) => ({
    text: page.node.frontmatter.title,
    to: `/using-spark/foundations/${page.node.parent.name}`,
    element: Link,
  }));

  // So we don't see a "Guides" landing page link under "the Guides section"
  const processedSparkGuides = useUsingSparkData().guides.filter(
    (item) => item.node.parent.name !== 'guides',
  );

  const usingSparkGuides = processedSparkGuides.map((page) => ({
    text: page.node.frontmatter.title,
    to: `/using-spark/guides/${page.node.parent.name}`,
    element: Link,
  }));

  const usingSparkPages = usingSparkFoundations.concat(
    usingSparkGuides,
    usingSparkComponents,
    usingSparkExamples,
  );

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
      text: 'Guides',
      to: '/using-spark/guides',
      onClick: () => {
        setContext('guides');
      },
      subNavLinks: usingSparkGuides,
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
        // eslint-disable-next-line max-len
        <SprkInputContainer additionalClasses="docs-header-search sprk-u-Width-100">
          <div className="sprk-b-InputContainer__icon-container">
            <SprkLabel htmlFor="inline-search" isHidden>
              Search
            </SprkLabel>
            <SprkIcon
              iconName="search"
              additionalClasses="sprk-b-InputContainer__icon"
              aria-hidden="true"
            />
            <SprkInput
              id="inline-search"
              additionalClasses="sprk-b-TextInput--has-svg-icon"
              type="search"
              placeholder="Search"
            />
          </div>
        </SprkInputContainer>
      }
      narrowNavLinks={narrowNavLinks}
    />
  );
};

Header.propTypes = {
  setContext: PropTypes.func,
};

export default Header;
