import React from 'react';
import { Link } from 'react-router-dom';
import { SprkLink, SprkIcon } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkLinkDocs = () => (
  <CentralColumnLayout>
    <h2 className="drizzle-b-h2">Links</h2>
    <ExampleContainer>
      <SprkLink href="/">This is a standard Spark Link!</SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <p>
        Here is a
        <SprkLink href="/"> link </SprkLink>
        in the middle of a line.
      </p>
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
      <SprkLink variant="plain">Plain Link</SprkLink>
    </ExampleContainer>

    <h2 className="drizzle-b-h2">External Links</h2>
    <ExampleContainer>
      <SprkLink id="foo" href="https://google.com" target="_blank">
        https://google.com
      </SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink id="foo" href="https://google.com" target="_blank">
        http://google.com
      </SprkLink>
    </ExampleContainer>

    <h2 className="drizzle-b-h2">Same Page Links</h2>
    <ExampleContainer>
      <SprkLink href="#info">Jump Link</SprkLink>
    </ExampleContainer>

    <ExampleContainer>
      <SprkLink href="/button#jumpLinkTarget">Jump Link with Page</SprkLink>
    </ExampleContainer>

    <h2 className="drizzle-b-h2">Link with no href provided</h2>
    <ExampleContainer>
      <SprkLink>No href provided.</SprkLink>
    </ExampleContainer>

    <h2 className="drizzle-b-h2">Link Using Tel</h2>
    <ExampleContainer>
      <SprkLink href="tel:+123456789">Tel Link</SprkLink>
    </ExampleContainer>

    <h2 className="drizzle-b-h2">Link Using mailto</h2>
    <ExampleContainer>
      <SprkLink href="mailto:example@example.com">mailto Link</SprkLink>
    </ExampleContainer>

    <h2 className="drizzle-b-h2">Additional Classes</h2>
    <ExampleContainer>
      <SprkLink additionalClasses="sprk-u-mbm">
        Link with Margin Bottom class
      </SprkLink>
    </ExampleContainer>

    <h2 className="drizzle-b-h2">Disabled Link</h2>
    <ExampleContainer>
      <SprkLink variant="disabled">Disabled Link</SprkLink>
    </ExampleContainer>

    <h2 className="drizzle-b-h2">Icon With Text Link</h2>
    <ExampleContainer>
      <SprkLink variant="has-icon" idString="link-">
        <SprkIcon
          additionalClasses="sprk-c-Icon--l sprk-u-mrs sprk-c-Icon--stroke-current-color"
          iconName="communication"
        />
        Message Us
      </SprkLink>
    </ExampleContainer>

    <h2 className="drizzle-b-h2">React Router Link</h2>
    <ExampleContainer>
      <SprkLink element={Link} to="/button">
        To Button
      </SprkLink>
    </ExampleContainer>

    <div id="info">Hi, I'm info!</div>
  </CentralColumnLayout>
);

export default SprkLinkDocs;
