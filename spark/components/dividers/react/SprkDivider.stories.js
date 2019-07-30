import React from 'react';
import { storiesOf } from '@storybook/react';

import SprkDivider from './SprkDivider';

storiesOf('Components|Divider', module)
  .add('As A Span Element', () => (
    <SprkDivider
      idString="divider-1"
      element="span"
    />
  ))
  .add('As A HR Element', () => (
    <SprkDivider
      idString="divider-2"
      element="hr"
    />
  ));
