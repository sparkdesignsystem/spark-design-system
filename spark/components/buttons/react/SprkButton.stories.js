import React from 'react';
import { storiesOf } from '../../../../react/node_modules/@storybook/react';
import { action } from '@storybook/addon-actions';
import SprkButton from './SprkButton';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

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
  ));
