import React, { Component } from 'react';
import { SprkAlert } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';

class SprkAlertDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible1: true,
      isVisible2: true,
      isVisible3: true,
      isVisible4: true,
      isVisible5: true,
      isVisible6: true,
    };
  }

  render() {
    const {
      isVisible1,
      isVisible2,
      isVisible3,
      isVisible4,
      isVisible5,
      isVisible6,
    } = this.state;
    return (
      <CentralColumnLayout>
        <div className="sprk-u-mbm">
          <SprkAlert
            isVisible={isVisible1}
            message="Information alert message placeholder."
            variant="info"
            idString="alert-1"
            additionalClasses="sprk-u-mbh"
            onDismiss={() => {
              this.setState({ isVisible1: false });
            }}
          />
        </div>

        <div className="sprk-u-mbm">
          <SprkAlert
            isVisible={isVisible2}
            message="Success alert message placeholder."
            variant="success"
            idString="alert-2"
            onDismiss={() => {
              this.setState({ isVisible2: false });
            }}
          />
        </div>

        <div className="sprk-u-mbm">
          <SprkAlert
            isVisible={isVisible3}
            message="Plain alert message placeholder."
            idString="alert-3"
            onDismiss={() => {
              this.setState({ isVisible3: false });
            }}
          />
        </div>

        <div className="sprk-u-mbm">
          <SprkAlert
            isVisible={isVisible4}
            message="Fail alert message placeholder."
            variant="fail"
            idString="alert-4"
            onDismiss={() => {
              this.setState({ isVisible4: false });
            }}
          />
        </div>

        <div className="sprk-u-mbm">
          <SprkAlert
            isVisible={isVisible5}
            message="Fail alert message that is not dismissible."
            variant="fail"
            idString="alert-4"
            isDismissible={false}
          />
        </div>

        <div className="sprk-u-mbm">
          <SprkAlert
            isVisible={isVisible6}
            onDismiss={() => {
              this.setState({ isVisible6: false });
            }}
            message="ALERT ALERT!"
            variant="success"
            idString="alert-5"
            isDismissible
            analyticsString="dismiss-button"
          />
        </div>

        <h2 className="sprk-u-mbl">Info Alert with different Icons</h2>
        <div className="sprk-u-mbm">
          <SprkAlert
            isVisible={isVisible1}
            message="Information alert message placeholder."
            variant="info"
            idString="alert-1"
            additionalClasses="sprk-u-mbh"
            iconNameDismiss="facebook"
            iconNameInfo="instagram"
            onDismiss={() => {
              this.setState({ isVisible1: false });
            }}
          />
        </div>

        <h2 className="sprk-u-mbl">Success Alert with different Icon</h2>
        <div className="sprk-u-mbm">
          <SprkAlert
            isVisible={isVisible1}
            message="Success alert message placeholder."
            variant="success"
            idString="alert-1"
            additionalClasses="sprk-u-mbh"
            iconNameSuccess="camera"
            onDismiss={() => {
              this.setState({ isVisible1: false });
            }}
          />
        </div>
      </CentralColumnLayout>
    );
  }
}

export default SprkAlertDocs;
