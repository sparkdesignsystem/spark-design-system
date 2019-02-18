import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { SprkToggle } from '@sparkdesignsystem/spark-core-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

const SprkTabsDocs = () => (
  <CentralColumnLayout>
    <SprkToggle
      additionalClasses="sprk-o-Stack__item"
      toggleIconName="chevron-down-circle-two-color"
      title="My Disclaimer"
      analyticsString="toggle-1"
    >
      <p className="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">
        This is an example of disclaimer content.
        The aria-expanded="true" attribute will be
        viewable in the DOM on the toggle link when this
        content is shown. When this content is hidden
        the aria-expanded attribute will have the value of false.
        This helps accessibilty devices in understanding
        that the link is a control for expandable content.
      </p>
    </SprkToggle>
  </CentralColumnLayout>
);

export default SprkTabsDocs;
