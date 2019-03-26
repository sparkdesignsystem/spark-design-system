import React from 'react';
import { SprkStack, SprkStackItem } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

const SprkStackDocs = () => (
  <CentralColumnLayout>
    <SprkStack additionalClasses="sprk-u-mbl">
      <SprkStackItem>
        <p>Test stack.</p>
      </SprkStackItem>

      <SprkStackItem>
        <p>Test stack.</p>
      </SprkStackItem>
    </SprkStack>

    <SprkStack splitAt="small" additionalClasses="sprk-u-mbl">
      <SprkStackItem>
        <p>Test stack split at small.</p>
      </SprkStackItem>

      <SprkStackItem>
        <p>Test stack split at small.</p>
      </SprkStackItem>
    </SprkStack>

    <SprkStack
      splitAt="medium"
      itemSpacing="small"
      additionalClasses="sprk-u-mbl"
    >
      <SprkStackItem additionalClasses="sprk-u-BackgroundColor--green">
        <p>Test stack split and medium item spacing.</p>
      </SprkStackItem>

      <SprkStackItem additionalClasses="sprk-u-BackgroundColor--green">
        <p>Test stack split and medium item spacing.</p>
      </SprkStackItem>
    </SprkStack>

    <SprkStack
      splitAt="medium"
      itemSpacing="medium"
      additionalClasses="sprk-u-mbl"
    >
      <SprkStackItem additionalClasses="sprk-u-BackgroundColor--green">
        <p>Test stack split and medium item spacing.</p>
      </SprkStackItem>

      <SprkStackItem additionalClasses="sprk-u-BackgroundColor--green">
        <p>Test stack split and medium item spacing.</p>
      </SprkStackItem>
    </SprkStack>

    <SprkStack
      splitAt="large"
      itemSpacing="large"
      additionalClasses="sprk-u-mbl"
    >
      <SprkStackItem additionalClasses="sprk-u-BackgroundColor--blue">
        <p>Test stack split and large item spacing.</p>
      </SprkStackItem>

      <SprkStackItem additionalClasses="sprk-u-BackgroundColor--blue">
        <p>Test stack split and large item spacing.</p>
      </SprkStackItem>
    </SprkStack>

    <SprkStack splitAt="huge" itemSpacing="tiny" additionalClasses="sprk-u-mbl">
      <SprkStackItem additionalClasses="sprk-u-BackgroundColor--red">
        <p>Test stack split and tiny item spacing.</p>
      </SprkStackItem>

      <SprkStackItem additionalClasses="sprk-u-BackgroundColor--red">
        <p>Test stack split and tiny item spacing.</p>
      </SprkStackItem>
    </SprkStack>

    <SprkStack splitAt="huge" itemSpacing="huge" additionalClasses="sprk-u-mbl">
      <SprkStackItem additionalClasses="sprk-u-BackgroundColor--yellow">
        <p>Test stack split and huge item spacing.</p>
      </SprkStackItem>

      <SprkStackItem additionalClasses="sprk-u-BackgroundColor--yellow">
        <p>Test stack split and huge item spacing.</p>
      </SprkStackItem>
    </SprkStack>
  </CentralColumnLayout>
);

export default SprkStackDocs;
