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
    element={text('element', 'button') || undefined}
    href={text('href (if element = "a" link)', '') || undefined}
    loading={boolean('loading', false)}
    additionalClasses={text('additionalClasses', '') || undefined}
    idString={text('idString', 'button-1')}
    analyticsString={text('analyticsString', 'button-1-analytics')}
  >
    {text('button text', 'Button')}
  </SprkButton>
))
  .add('secondary', () => (
    <SprkButton
      variant="secondary"
      disabled={boolean('disabled', false)}
      element={text('element', 'button') || undefined}
      href={text('href (if element = "a" link)', '') || undefined}
      idString={text('idString', 'button-2')}
      additionalClasses={text('additionalClasses', '') || undefined}
      analyticsString={text('analyticsString', 'button-2-analytics')}
      loading={boolean('loading', false)}
    >
      {text('button text', 'Button')}
    </SprkButton>
  ))
  .add('tertiary', () => (
    <SprkButton
      variant="tertiary"
      disabled={boolean('disabled', false)}
      element={text('element', 'button') || undefined}
      href={text('href (if element = "a" link)', '') || undefined}
      additionalClasses={text('additionalClasses', '') || undefined}
      idString={text('idString', 'button-3')}
      analyticsString={text('analyticsString', 'button-3-analytics')}
      loading={boolean('loading', false)}
    >
      {text('button text', 'Button')}
    </SprkButton>
  ))
  .add('disabled', () => (
    <SprkButton
      loading={boolean('loading', false)}
      variant={text('variant', 'tertiary') || undefined}
      element={text('element', 'button') || undefined}
      href={text('href (if element = "a" link)', '') || undefined}
      idString={text('idString', 'button-4')}
      additionalClasses={text('additionalClasses', '') || undefined}
      analyticsString={text('analyticsString', 'button-4-analytics')}
      disabled={boolean('disabled', true)}
    >
      {text('button text', 'Button')}
    </SprkButton>
  ))
  .add('with spinner', () => (
    <SprkButton
      loading={boolean('loading', true)}
      element={text('element', 'button') || undefined}
      href={text('href (if element = "a" link)', '') || undefined}
      idString={text('idString', 'button-7')}
      analyticsString={text('analyticsString', 'button-7-analytics')}
      disabled={boolean('disabled', false)}
      additionalClasses={text('additionalClasses', '') || undefined}
    >
      {text('button text', 'Button')}
    </SprkButton>
  ))
  .add('full width at small viewport', () => (
    <SprkButton
      loading={boolean('loading', false)}
      element={text('element', 'button') || undefined}
      href={text('href (if element = "a" link)', '') || undefined}
      idString={text('idString', 'button-8')}
      analyticsString={text('analyticsString', 'button-8-analytics')}
      additionalClasses={
        `sprk-c-Button--full@s ${text('additionalClasses', '')}`
      }
    >
      {text('button text', 'Button')}
    </SprkButton>
  ))
  .add('full width at extra small viewport', () => (
    <SprkButton
      loading={boolean('loading', false)}
      element={text('element', 'button') || undefined}
      href={text('href (if element = "a" link)', '') || undefined}
      idString={text('idString', 'button-9')}
      analyticsString={text('analyticsString', 'button-9-analytics')}
      additionalClasses={
        `sprk-c-Button--full@xs ${text('additionalClasses', '')}`
      }
    >
      {text('button text', 'Button')}
    </SprkButton>
  ))
  .add('as a link element', () => (
    <SprkButton
      element={text('element', 'a')}
      loading={boolean('loading', false)}
      href={text('href', 'https://www.sparkdesignsystem.com')}
      idString={text('idString', 'button-10')}
      analyticsString={text('analyticsString', 'button-10-analytics')}
      additionalClasses={text('additionalClasses', '') || undefined}
    >
      {text('button text', 'Button')}
    </SprkButton>
  ));
