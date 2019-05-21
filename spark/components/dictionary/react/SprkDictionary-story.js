import React from 'react';
import { storiesOf } from '@storybook/react';
import { SprkDictionary } from '@sparkdesignsystem/spark-react';

const keyValuePairs = {
  'Email Address': 'sparkdesignsystem@quickenloans.com',
  'Mailing Address': '123 Main Street, Detroit, MI, 48216',
  'Home Phone': '(123) 456-7890',
  'Cell Phone': '(098) 765-4321',
  'Work Phone': '(555) 555-5555',
  'Work Extension': '55555'
};

storiesOf('Dictionary', module)
  .add('test', () => (
    <SprkDictionary
      idString="dictionary-1"
      keyValuePairs={keyValuePairs}
    />
  ));