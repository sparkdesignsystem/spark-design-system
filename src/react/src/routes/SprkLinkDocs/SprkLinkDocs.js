import React from 'react';
import CentralColumnLayout from '../../container/CentralColumnLayout/CentralColumnLayout';

import { SprkLink } from '@sparkdesignsystem/spark-core-react';

const SprkLinkDocs = () => {
  return (
    <CentralColumnLayout>
      <div className="sprk-u-mbm">
        <SprkLink>
          Base Link
        </SprkLink>
      </div>

      <div className="sprk-u-mbm">
        <SprkLink variant="simple">
          Simple Link
        </SprkLink>
      </div>

      <div className="sprk-u-mbm">
        <SprkLink variant="has-icon">
          {/* TODO: SVG Component*/}
          <svg className="sprk-c-Icon sprk-c-Icon--xl" viewBox="0 0 100 100">
            <use xlinkHref="#communication" />
          </svg>
          Icon With Text Link
        </SprkLink>
      </div>

      <div className="sprk-u-mbm">
        <SprkLink variant="disabled">
          Disabled Link
        </SprkLink>
      </div>
    </CentralColumnLayout>
  );
};

export default SprkLinkDocs;
