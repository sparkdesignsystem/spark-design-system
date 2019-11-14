import React from 'react';
import { Link } from 'react-router-dom';
import {
  SprkMasthead,
  SprkLink,
  SprkButton,
} from '@sparkdesignsystem/spark-react';
import EmptyLayout from '../../containers/EmptyLayout/EmptyLayout';
import SiteLogo from '../../components/SiteLogo/SiteLogo';

function SprkMastheadDefaultDocs() {
  const links = [
    {
      element: Link,
      text: 'Item 1',
      to: '/link',
    },
    {
      text: 'Item 2',
      href: 'https://www.google.com',
      target: '_blank',
    },
  ];

  const addedNarrowNavLinks = [
    {
      element: Link,
      leadingIcon: 'landline',
      text: '(555) 555-5555',
      to: '/button',
    },
    {
      element: Link,
      leadingIcon: 'call-team-member',
      text: 'Talk To Us',
      to: '/link',
    },
    {
      element: Link,
      text: 'Sign In',
      to: '/button',
      isButton: true,
    },
  ];

  const utilityItems = [
    <SprkLink
      href="#nogo"
      variant="plain"
      additionalClasses="sprk-c-Masthead__link"
    >
      (555) 555-5555
    </SprkLink>,
    <SprkLink
      href="#nogo"
      variant="plain"
      additionalClasses="sprk-c-Masthead__link"
    >
      Talk To Us
    </SprkLink>,
    <SprkButton
      element={Link}
      to="/button"
      variant="secondary"
      additionalClasses="sprk-c-Button--compact"
    >
      Sign In
    </SprkButton>,
  ];

  return (
    <EmptyLayout>
      <SprkMasthead
        littleNavLinks={links}
        narrowNavLinks={links.concat(addedNarrowNavLinks)}
        siteLogo={<SiteLogo />}
        utilityContents={utilityItems}
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

export default SprkMastheadDefaultDocs;
