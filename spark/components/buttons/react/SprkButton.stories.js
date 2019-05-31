import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SprkButton } from '@sparkdesignsystem/spark-react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs)

stories.add('primary', () => (
    <SprkButton onClick={action('button clicked')}>Button</SprkButton>
  ))
  .add('secondary', () => (
    <SprkButton
      variant="secondary"
      disabled={boolean('disabled', false)}
    >
      {text('button text', 'hello')}
    </SprkButton>
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
