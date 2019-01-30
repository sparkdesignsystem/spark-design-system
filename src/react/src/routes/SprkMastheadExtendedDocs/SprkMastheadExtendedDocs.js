import React from 'react';
import { SprkMasthead, SprkLink, SprkButton, SprkIcon, SprkDropdown } from '@sparkdesignsystem/spark-core-react';
import EmptyLayout from '../../containers/EmptyLayout/EmptyLayout';
import SiteLogo from '../../components/SiteLogo/SiteLogo';
import { Link } from 'react-router-dom';

function SprkMastheadExtendedDocs(props) {

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
        }
      ],
    },
    {
      element: Link,
      text: 'Your Item',
      to: '/link'
    },
    {
      element: Link,
      text: 'Nav Item',
      to: '/button'
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
        }
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
      to: '/link'
    },
    {
      element: Link,
      leadingIcon: 'settings',
      text: 'Settings',
      to: '/button'
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
          to: '/link'
        },
        {
          text: 'Sign Out',
        }
      ],
    }
  ];

  const dropdownChoices = [
    {
      text: 'Option 1',
      value: 'option-1'
    },
    {
      text: 'Option 2',
      value: 'option-2'
    }
  ];

  const selector = {
    choiceFunction: (text) => {console.log(text);},
    links: [
      {
        title: 'Selection Choice Title 1',
        information: 'Additional Information',
        value: 'choice-1'
      },
      {
        element: Link,
        title: 'Selection Choice Title 2',
        information: 'Additional Information',
        to: '/button',
        value: 'choice-2'
      }
    ],
    footer: <SprkButton variant="tertiary" additionalClasses="sprk-c-Button--compact" onClick={() => {console.log('Clicked!')}}>Placeholder</SprkButton>
  };

  const utilityItems = [
    <SprkLink href="#nogo" variant="plain" additionalClasses="sprk-c-Masthead__link">Talk To Us</SprkLink>,
    <SprkLink href="#nogo" variant="plain" additionalClasses="sprk-c-Masthead__link"><SprkIcon iconType="settings" additionalClasses="sprk-c-Icon--stroke-current-color sprk-c-Icon--l" /></SprkLink>,
    <SprkDropdown additionalClasses="sprk-u-Right--zero sprk-u-mrm" additionalIconClasses="sprk-c-Icon--l" iconType="user" choices={dropdownChoices} title="My Choices" />
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
      />
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet delectus deleniti eos, fugit harum, iste
          laudantium minus nemo nobis porro quis quos, similique suscipit voluptates? Beatae ipsum maiores sequi.</p>
      </div>
    </EmptyLayout>
  );
}

export default SprkMastheadExtendedDocs;
