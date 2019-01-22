import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkLink } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

const SprkLinkDocs = () => {
  return (
    <CentralColumnLayout>
      <ExampleContainer>
        <SprkLink href="#nogo" id="foo">
          Base Link
        </SprkLink>
      </ExampleContainer>

      <ExampleContainer>
        <SprkLink variant="simple" href="/buttons" idString="simple-link">
          Simple Link
        </SprkLink>
      </ExampleContainer>

      <ExampleContainer>
        <SprkLink variant="has-icon" target="_blank" href="#nogo" analyticsString="foo">
          {/* TODO: SVG Component*/}
          <svg className="sprk-c-Icon sprk-c-Icon--xl" viewBox="0 0 100 100">
            <use xlinkHref="#communication" />
          </svg>
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
};

export default SprkLinkDocs;
