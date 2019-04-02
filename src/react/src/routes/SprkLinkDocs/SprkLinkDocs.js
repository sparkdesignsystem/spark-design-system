import React from 'react';
import { SprkLink, SprkIcon } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkLinkDocs = () => (
  <CentralColumnLayout>
    <h2 className="drizzle-b-h2">External Links</h2>
    <ExampleContainer>
      <SprkLink id="foo" href="https://google.com" target="_blank">https://google.com</SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink id="foo" href="https://google.com" target="_blank">http://google.com</SprkLink>
    </ExampleContainer>

    <h2 className="drizzle-b-h2">Same Page Links</h2>
    <ExampleContainer>
      <SprkLink href="#info">Jump Link</SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink href="/button#foo">Jump Link with Page</SprkLink>
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
    <div id="info">Hi, I'm info!</div>
  </CentralColumnLayout>
);

export default SprkLinkDocs;
