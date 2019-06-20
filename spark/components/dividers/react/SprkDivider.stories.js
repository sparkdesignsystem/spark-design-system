import React from 'react';
import { storiesOf } from '@storybook/react';

import SprkDivider from './SprkDivider';

storiesOf('Components|Divider', module)
  .add('as a span element', () => (
    <SprkDivider
      idString="divider-1"
      element="span"
    />
  ))
  .add('as a hr element', () => (
    <SprkDivider
      idString="divider-2"
      element="hr"
    />
  ));
