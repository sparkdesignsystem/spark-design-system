import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import SprkButton from './SprkButton';

const stories = storiesOf('Components|Button', module);

stories.addDecorator(withKnobs);

stories.add('primary', () => (
  <SprkButton
    onClick={action('button clicked')}
    disabled={boolean('disabled', false)}
  >
      Button
  </SprkButton>
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
    <SprkButton
      variant="tertiary"
      disabled={boolean('disabled', false)}
    >
      Button
    </SprkButton>
  ))
  .add('disabled', () => (
    <SprkButton disabled>Button</SprkButton>
  ))
  .add('with spinner', () => (
    <SprkButton loading>Button</SprkButton>
  ))
  .add('full with at small viewport', () => (
    <SprkButton additionalClasses="sprk-c-Button--full@s">Button</SprkButton>
  ))
  .add('full with at extra small viewport', () => (
    <SprkButton additionalClasses="sprk-c-Button--full@xs">Button</SprkButton>
  ));
