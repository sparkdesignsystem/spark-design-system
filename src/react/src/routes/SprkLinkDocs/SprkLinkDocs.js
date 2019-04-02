import React from 'react';
import { SprkLink, SprkIcon } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkLinkDocs = () => (
  <CentralColumnLayout>
    <ExampleContainer>
      <SprkLink id="foo">Base Link</SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink variant="unstyled">Unstyled Link</SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink variant="simple" idString="simple-link">
        Simple Link
      </SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink variant="has-icon" target="_blank" analyticsString="foo">
        <SprkIcon
          additionalClasses="sprk-c-Icon--xl"
          iconName="communication"
        />
        Icon With Text Link
      </SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink variant="disabled">Disabled Link</SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink variant="plain" additionalClasses="foo">
        Plain Link
      </SprkLink>
    </ExampleContainer>
  </CentralColumnLayout>
);

export default SprkLinkDocs;
