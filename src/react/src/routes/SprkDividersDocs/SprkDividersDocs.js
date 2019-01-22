import React from 'react';
import CentralColumnLayout from '../../container/CentralColumnLayout/CentralColumnLayout';

import { SprkDividers } from '@sparkdesignsystem/spark-core-react';

const SprkDividersDocs = () => {
  return (
    <CentralColumnLayout>
      <div className="sprk-u-mbm">
        <h2 className="drizzle-b-h2">Dividers</h2>
        <SprkDividers idString="divider-1"></SprkDividers>
      </div>
    </CentralColumnLayout>
  )
}

export default SprkDividersDocs;