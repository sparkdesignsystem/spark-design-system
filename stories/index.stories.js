import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SprkButton } from '@sparkdesignsystem/spark-react';

storiesOf('Button', module)
  .add('with asdfdsfsdf', () => (
    <SprkButton
      onClick={action('clicked')}
    >
      Hello Button
    </SprkButton>
  ))
  .add('with some emoji', () => (
    <SprkButton onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </SprkButton>
  ));
