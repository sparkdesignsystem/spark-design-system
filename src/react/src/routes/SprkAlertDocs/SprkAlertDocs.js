import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

import { SprkAlert } from '@sparkdesignsystem/spark-core-react';

const SprkAlertDocs = () => {
  return (
    <CentralColumnLayout>
      <div className="sprk-u-mbm">
        <SprkAlert message="Information alert message placeholder." variant="info" idString="alert-1" additionalClasses="sprk-u-mbh"/>
      </div>

      <div className="sprk-u-mbm">
        <SprkAlert message="Success alert message placeholder." variant="success" idString="alert-2"/>
      </div>

      <div className="sprk-u-mbm">
        <SprkAlert message="Plain alert message placeholder." idString="alert-3"/>
      </div>

      <div className="sprk-u-mbm">
        <SprkAlert message="Fail alert message placeholder." variant="fail" idString="alert-4"/>
      </div>

      <div className="sprk-u-mbm">
        <SprkAlert message="Fail alert message that is not dismissible." variant="fail" idString="alert-4" isDismissible={false}/>
      </div>

      <div className="sprk-u-mbm">
        <SprkAlert message="ALERT ALERT!" variant="success" idString="alert-5" isDismissible analyticsString="dismiss-button"/>
      </div>
    </CentralColumnLayout>
  );
};

export default SprkAlertDocs;
