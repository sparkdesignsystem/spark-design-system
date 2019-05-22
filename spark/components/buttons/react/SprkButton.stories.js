import React from 'react';
import { storiesOf } from '@storybook/react';
import { SprkButton } from '@sparkdesignsystem/spark-react';

storiesOf('Button', module)
  .add('test', () => (
    <SprkButton>Button</SprkButton>
  ));