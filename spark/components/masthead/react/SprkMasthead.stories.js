import React from 'react';
import { storiesOf } from '@storybook/react';

import SprkMasthead from './SprkMasthead';
import SprkButton from '../../buttons/react/SprkButton';
import SprkLink from '../../../base/links/react/SprkLink';

const links = [
  {
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
    leadingIcon: 'landline',
    text: '(555) 555-5555',
    to: '/button',
  },
  {
    leadingIcon: 'call-team-member',
    text: 'Talk To Us',
    to: '/link',
  },
  {
    text: 'Sign In',
    to: '/button',
    isButton: true,
  },
];
const selector = {
  choiceFunction: (text) => {
    console.log(text);
  },
  items: [{
    title: 'Selection Choice Title 1',
    information: 'Additional Information',
    value: 'choice-1',
  },
  {
    title: 'Selection Choice Title 2',
    information: 'Additional Information',
    to: '/button',
    value: 'choice-2',
  },
  ],
  footer: <SprkButton variant="tertiary" additionalClasses="sprk-c-Button--compact" onClick={() => { console.log('Clicked!'); }}>Placeholder</SprkButton>,
};
const utilityItems = [
  <SprkLink href="#nogo" variant="plain" additionalClasses="sprk-c-Masthead__link">(555) 555-5555</SprkLink>,
  <SprkLink href="#nogo" variant="plain" additionalClasses="sprk-c-Masthead__link">Talk To Us</SprkLink>,
  <SprkButton element="a" to="/button" variant="secondary" additionalClasses="sprk-c-Button--compact">Sign In</SprkButton>,
];
storiesOf('Components|Masthead', module)
  .add('default', () => (
    <SprkMasthead
      littleNavLinks={links}
      narrowNavLinks={links.concat(addedNarrowNavLinks)}
      siteLogo={<div />}
      utilityContents={utilityItems}
    />
  ))
  .add('extended', () => (
    <SprkMasthead
      bigNavLinks={links}
      selector={selector}
      narrowSelector={selector}
      narrowNavLinks={links.concat(addedNarrowNavLinks)}
      siteLogo={<div />}
      utilityContents={utilityItems}
      variant="extended"
    />
  ));
