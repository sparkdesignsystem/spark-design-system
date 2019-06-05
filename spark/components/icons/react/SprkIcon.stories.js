import React from 'react';
import { storiesOf } from '@storybook/react';
import SprkIcon from './SprkIcon';

storiesOf('Components|Icons', module)
  .add('amount-money', () => (
    <SprkIcon iconName="amount-money" additionalClasses="sprk-c-Icon--l" />
  ))
  .add('access', () => (
    <SprkIcon iconName="access" additionalClasses="sprk-c-Icon--l" />
  ))
  .add('apply-now', () => (
    <SprkIcon iconName="apply-now" additionalClasses="sprk-c-Icon--l" />
  ));