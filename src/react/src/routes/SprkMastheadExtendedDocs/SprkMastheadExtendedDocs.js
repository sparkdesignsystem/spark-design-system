import React from 'react';
import { Link } from 'react-router-dom';
import {
  SprkMasthead,
  SprkLink,
  SprkButton,
  SprkIcon,
  SprkDropdown,
} from '@sparkdesignsystem/spark-react';
import EmptyLayout from '../../containers/EmptyLayout/EmptyLayout';
import SiteLogo from '../../components/SiteLogo/SiteLogo';

function SprkMastheadExtendedDocs() {
  const links = [
    {
      text: 'Navigation Item',
      subNavLinks: [
        {
          text: 'Placeholder',
        },
        {
          text: 'Item',
        },
        {
          text: 'Sub Menu Item',
        },
      ],
    },
    {
      element: Link,
      text: 'Your Item',
      to: '/link',
    },
    {
      element: Link,
      text: 'Nav Item',
      to: '/button',
    },
    {
      text: 'Navigation Item',
      subNavLinks: [
        {
          text: 'Item 1',
        },
        {
          text: 'Taxes and Insurance',
        },
        {
          text: 'Item 3',
        },
      ],
    },
    {
      element: Link,
      text: 'Your Item',
      to: '/link',
    },
  ];

  const addedNarrowNavLinks = [
    {
      element: Link,
      leadingIcon: 'call-team-member',
      text: 'Talk To Us',
      to: '/link',
    },
    {
      element: Link,
      leadingIcon: 'settings',
      text: 'Settings',
      to: '/button',
    },
    {
      leadingIcon: 'user',
      text: 'My Account',
      subNavLinks: [
        {
          text: 'Change Username',
        },
        {
          element: Link,
          text: 'Change Password',
          to: '/link',
        },
        {
          text: 'Sign Out',
        },
      ],
    },
  ];

  const dropdownChoices = {
    choiceFunction: choiceText => {
      console.log(choiceText);
    },
    items: [
      {
        text: 'Option 1',
        value: 'option-1',
        element: 'a',
        href: '/link',
        target: '_blank',
      },
      {
        text: 'Option 2',
        value: 'option-2',
        element: Link,
        to: '/link',
      },
      {
        text: 'Option 3',
        value: 'option-3',
      },
    ],
  };

  const selector = {
    choiceFunction: text => {
      console.log(text);
    },
    items: [
      {
        title: 'Selection Choice Title 1',
        information: 'Additional Information',
        value: 'choice-1',
      },
      {
        element: Link,
        title: 'Selection Choice Title 2',
        information: 'Additional Information',
        to: '/button',
        value: 'choice-2',
      },
    ],
    footer: (
      <SprkButton
        variant="tertiary"
        additionalClasses="sprk-c-Button--compact"
        onClick={() => {
          console.log('Clicked!');
        }}
      >
        Placeholder
      </SprkButton>
    ),
  };

  const utilityItems = [
    <SprkLink
      href="#nogo"
      variant="plain"
      additionalClasses="sprk-c-Masthead__link"
    >
      Talk To Us
    </SprkLink>,
    <SprkDropdown
      additionalClasses="sprk-u-Right--zero sprk-u-mrm"
      additionalIconClasses="sprk-c-Icon--l"
      iconName="user-account"
      choices={dropdownChoices}
      title="My Choices"
    />,
  ];

  return (
    <EmptyLayout>
      <SprkMasthead
        bigNavLinks={links}
        selector={selector}
        narrowSelector={selector}
        narrowNavLinks={links.concat(addedNarrowNavLinks)}
        siteLogo={<SiteLogo />}
        utilityContents={utilityItems}
        variant="extended"
        navLink={<SprkLink variant="simple" href="#nogo" additionalClasses="sprk-c-Masthead__link">Sign In</SprkLink>}
      />
      <div className="sprk-u-mal">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
      <div className="sprk-u-mal">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
      <div className="sprk-u-mal">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
      <div className="sprk-u-mal">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
      <div className="sprk-u-mal">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
      <div className="sprk-u-mal">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
      <div className="sprk-u-mal">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
    </EmptyLayout>
  );
}

export default SprkMastheadExtendedDocs;
