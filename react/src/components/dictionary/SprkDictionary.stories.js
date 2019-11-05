import React from 'react';

import SprkDictionary from './SprkDictionary';

export default {
  title: 'Components|Dictionary',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkDictionary,
  parameters: {
    jest: ['SprkDictionary'],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/dictionary)
    `,
  },
};

export const defaultStory = () => (
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
);

defaultStory.story = {
  name: 'Default',
};

export const striped = () => (
  <SprkDictionary
    variant="striped"
    idString="dictionary-2"
    keyValuePairs={{
      'Email Address': 'sparkdesignsystem@quickenloans.com',
      'Mailing Address': '123 Main Street, Detroit, MI, 48216',
      'Home Phone': '(123) 456-7890',
      'Cell Phone': '(098) 765-4321',
      'Work Phone': '(555) 555-5555',
      'Work Extension': '55555',
    }}
  />
);

striped.story = {
  name: 'Striped',
};
