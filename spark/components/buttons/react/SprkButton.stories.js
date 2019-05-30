import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SprkButton } from '@sparkdesignsystem/spark-react';
storiesOf('Button', module)
  .add('primary', () => (
    <SprkButton onClick={action('button clicked')}>Button</SprkButton>
  ))
  .add('secondary', () => (
    <SprkButton variant="secondary">Button</SprkButton>
  ))
  .add('tertiary', () => (
    <SprkButton variant="tertiary">Button</SprkButton>
  ))
  .add('disabled', () => (
    <SprkButton disabled>Button</SprkButton>
  ))
  .add('with spinner', () => (
    <SprkButton loading>Button</SprkButton>
  ));
