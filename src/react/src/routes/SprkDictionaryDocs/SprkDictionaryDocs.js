import React from 'react';
import { SprkDictionary } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkDictionaryDocs = () => {
  const docsKeyValuePairs = {
    'Email Address': 'sparkdesignsystem@quickenloans.com',
    'Mailing Address': '123 Main Street, Detroit, MI, 48216',
    'Home Phone': '(123) 456-7890',
    'Cell Phone': '(098) 765-4321',
    'Work Phone': '(555) 555-5555',
    'Work Extension': '55555',
  };

  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <SprkDictionary
          idString="dictionary1"
          keyValuePairs={docsKeyValuePairs}
        />
      </ExampleContainer>

      <ExampleContainer>
        <SprkDictionary
          idString="dictionary2"
          keyValuePairs={docsKeyValuePairs}
          variant="striped"
        />
      </ExampleContainer>
    </CentralColumnLayout>
  );
};

export default SprkDictionaryDocs;
