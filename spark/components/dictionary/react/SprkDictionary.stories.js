import React from 'react';
import { storiesOf } from '@storybook/react';
import { SprkDictionary } from '@sparkdesignsystem/spark-react';
import { Box } from '../../../../.storybook/story-layout';

storiesOf('Dictionary', module)
  .add('default', () => (
    <Box>
      <SprkDictionary
        idString="dictionary-1"
        keyValuePairs={{
          'Email Address': 'sparkdesignsystem@quickenloans.com',
          'Mailing Address': '123 Main Street, Detroit, MI, 48216',
          'Home Phone': '(123) 456-7890',
          'Cell Phone': '(098) 765-4321',
          'Work Phone': '(555) 555-5555',
          'Work Extension': '55555',
        }}
      />
    </Box>
  ))
  .add('striped', () => (
    <Box>
      <SprkDictionary
        variant="striped"
        idString="dictionary-2"
        keyValuePairs={{
          'Email Address': 'sparkdesignsystem@quickenloans.com',
          'Mailing Address': '123 Main Street, Detroit, MI, 48216',
          'Home Phone': '(123) 456-7890',
          'Cell Phone': '(098) 765-4321',
          'Work Phone': '(555) 555-5555',
          'Work Extension': '55555'
        }}
      />
    </Box>
  ));
