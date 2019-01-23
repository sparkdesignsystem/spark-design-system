import React from 'react';
import CentralColumnLayout from '../../container/CentralColumnLayout/CentralColumnLayout';

import { SprkDivider } from '@sparkdesignsystem/spark-core-react';

const SprkDividerDocs = () => {
  return (
    <CentralColumnLayout>
      <div className="sprk-u-mbm">
        <h2 className="drizzle-b-h2">Divider as span</h2>
        <SprkDivider idString="divider-1" element="span"></SprkDivider>
      </div>

      <div className="sprk-u-mbm">
        <h2 className="drizzle-b-h2">Divider as hr</h2>
        <SprkDivider idString="divider-1" element="hr"></SprkDivider>
      </div>
    </CentralColumnLayout>
  )
}

export default SprkDividerDocs;