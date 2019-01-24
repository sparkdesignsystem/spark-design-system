import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import { SprkTabbedNav } from '@sparkdesignsystem/spark-core-react';

const SprkTabbedNavDocs = () => {
  return (
    <CentralColumnLayout>
      <SprkTabbedNav foo="hello world"/>
    </CentralColumnLayout>
  );
};

export default SprkTabbedNavDocs;
