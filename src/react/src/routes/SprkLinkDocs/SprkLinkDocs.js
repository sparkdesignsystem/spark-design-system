import React from 'react';
import { SprkLink, SprkIcon } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkLinkDocs = () => (
  <CentralColumnLayout>
    <ExampleContainer>
      <SprkLink href="#nogo" id="foo">
        Base Link
      </SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink href="#nogo" variant="unstyled">
        Unstyled Link
      </SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink variant="simple" href="/button" idString="simple-link">
        Simple Link
      </SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink
        variant="has-icon"
        target="_blank"
        href="#nogo"
        analyticsString="foo"
      >
        <SprkIcon
          additionalClasses="sprk-c-Icon--xl"
          iconName="communication"
        />
        Icon With Text Link
      </SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink variant="disabled" href="#nogo">
        Disabled Link
      </SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink variant="plain" additionalClasses="foo" href="#nogo">
        Plain Link
      </SprkLink>
    </ExampleContainer>
  </CentralColumnLayout>
);

export default SprkLinkDocs;
