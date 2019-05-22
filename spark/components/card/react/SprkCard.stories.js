import React from 'react';
import { storiesOf } from '@storybook/react';
import { SprkCard } from '@sparkdesignsystem/spark-react';

storiesOf('Card', module)
  .add('test', () => (
    <SprkCard
      idString="card-1"
      additionalContentClasses="
        sprk-o-Stack
        sprk-o-Stack--large"
      >
    </SprkCard>
  ));