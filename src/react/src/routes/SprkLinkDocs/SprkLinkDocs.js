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
          <svg className="sprk-o-StrokeIconSymbol sprk-c-Icon sprk-c-Icon--l sprk-u-mrs sprk-c-Icon--stroke-current-color" viewBox="0 0 64 64" id="communication" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#c8102e" strokeMiterlimit="10" strokeWidth="2" d="M25.7 41.1v7.01h23.55l7.56 6.3v-6.3H62V23.67H47.44"></path><path fill="none" stroke="#c8102e" strokeMiterlimit="10" strokeWidth="2" d="M47.19 9.59H2V40.7h9.63v8.56L25.9 40.7h21.29V9.59z"></path></svg>
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
