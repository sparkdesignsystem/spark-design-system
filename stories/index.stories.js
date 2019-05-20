import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { SprkButton } from '@sparkdesignsystem/spark-react';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with asdfdsfsdf', () => <SprkButton onClick={action('clicked')}>Hello Button</SprkButton>)
  .add('with some emoji', () => (
    <SprkButton onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </SprkButton>
  ));
