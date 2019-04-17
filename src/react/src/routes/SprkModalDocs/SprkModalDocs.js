/* global document */
import React from 'react';
import { SprkButton, SprkModal, SprkAlert } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

class SprkModalDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: false,
      wait: false,
      info: false,
      focusTarget: false,
      noFocus: false,
      alert: false,
      nestedParent: false,
      nestedChild: false,
    };
  }

  toggle(key) {
    const mutator = {};
    // eslint-disable-next-line react/destructuring-assignment
    mutator[key] = !this.state[key];
    this.setState(mutator);
  }

  render() {
    const {
      basic, wait, info, focusTarget, noFocus, alert, nestedParent, nestedChild,
    } = this.state;

    return (
      <CentralColumnLayout>
        <ExampleContainer heading="Trigger A Basic Modal">
          <SprkModal
            title="Default Modal"
            isVisible={basic}
            confirmText="Yes please"
            cancelText="No thank you"
            confirmClick={() => { this.toggle('basic'); }}
            cancelClick={() => { this.toggle('basic'); }}
          >

            Would you like to buy a mortgage?
          </SprkModal>
          <SprkButton onClick={() => { this.toggle('basic'); }}>Trigger Choice Modal</SprkButton>
        </ExampleContainer>

        <ExampleContainer heading="Trigger An Info Only Modal">
          <SprkModal
            title="Info Modal"
            isVisible={info}
            variant="info"
            confirmClick={() => { this.toggle('info'); }}
            cancelClick={() => { this.toggle('info'); }}
          >
            Your mortgage has been downloaded.
          </SprkModal>
          <SprkButton onClick={() => { this.toggle('info'); }}>Trigger Info Modal</SprkButton>
        </ExampleContainer>

        <ExampleContainer heading="Trigger A Wait Modal">
          <SprkModal
            title="Wait Modal"
            isVisible={wait}
            variant="wait"
            confirmClick={() => {
              this.toggle('wait');
            }}
            cancelClick={() => { this.toggle('wait'); }}
          >
            This modal will close in 3 seconds.
          </SprkModal>
          <SprkButton onClick={() => {
            this.toggle('wait');
            setTimeout(this.toggle.bind(this, 'wait'), 3000);
          }}
          >
            Trigger Wait Modal
          </SprkButton>
        </ExampleContainer>

        <ExampleContainer heading="Focus Target Test">
          <div className="sprk-o-Stack sprk-o-Stack--medium">
            <p className="sprk-o-Stack__item">
              Closing the modal should put focus on the target.
            </p>
            <SprkModal
              title="Focus Target Test"
              isVisible={focusTarget}
              shouldReturnFocusOnClose={false}
              confirmClick={() => {
                this.toggle('focusTarget');
                document.getElementById('focusTarget').focus();
              }}
              cancelClick={() => {
                this.toggle('focusTarget');
                document.getElementById('focusTarget').focus();
              }}
            >
              Closing this modal should focus the focus target.
            </SprkModal>

            <div className="sprk-o-Stack__item">
              <SprkButton
                onClick={() => { this.toggle('focusTarget'); }}
              >
                Trigger Focus Target Modal
              </SprkButton>
            </div>
            <div className="sprk-o-Stack__item">
              <SprkButton
                id="focusTarget"
                variant="secondary"
                additionalClasses="sprk-o-Stack__item"
              >
                I am the focus target
              </SprkButton>
            </div>
          </div>
        </ExampleContainer>

        <ExampleContainer heading="No Focus Test">
          <div className="sprk-o-Stack sprk-o-Stack--medium">
            <p className="sprk-o-Stack__item">
              Closing the modal should not return focus to any element.
            </p>
            <SprkModal
              title="No Focus Modal"
              isVisible={noFocus}
              variant="info"
              shouldReturnFocusOnClose={false}
              confirmClick={() => {
                this.toggle('noFocus');
              }}
              cancelClick={() => { this.toggle('noFocus'); }}
            >
              Closing this modal should NOT return focus to the calling element.
              Focus behavior will depend on browser and page state.
            </SprkModal>

            <div className="sprk-o-Stack__item">
              <SprkButton
                onClick={() => { this.toggle('noFocus'); }}
              >
                Trigger No Focus Modal
              </SprkButton>
            </div>
          </div>
        </ExampleContainer>

        <ExampleContainer heading="Modal in a Modal">
          <SprkModal
            title="Nested Modal Parent Header"
            isVisible={nestedParent}
            confirmText="M O D A L C E P T I O N"
            cancelText="Cancel"
            confirmClick={() => { this.toggle('nestedChild'); }}
            cancelClick={() => { this.toggle('nestedParent'); }}
          >
            Nested modal parent content.
            <SprkModal
              title="Nested Modal Child Header"
              isVisible={nestedChild}
              confirmText="Yes"
              cancelText="No"
              confirmClick={() => { this.toggle('nestedChild'); }}
              cancelClick={() => { this.toggle('nestedChild'); }}
            >
              Nested modal child content. Clicking the Mask will close this modal.
              Pressing Escape will close *all* modals.
            </SprkModal>
          </SprkModal>
          <SprkButton onClick={() => { this.toggle('nestedParent'); }}>Trigger Nested Modal</SprkButton>
        </ExampleContainer>

        <ExampleContainer heading="Alert in a Modal">
          <SprkModal
            title="Alert in a Modal"
            isVisible={alert}
            variant="info"
            confirmClick={() => { this.toggle('alert'); }}
            cancelClick={() => { this.toggle('alert'); }}
          >
            SprkAlert does not currently pull focus, but this test case is provided in case
            that functionality is added in the future.
            <SprkAlert
              message="Information alert message placeholder."
              variant="info"
            />
          </SprkModal>
          <SprkButton onClick={() => { this.toggle('alert'); }}>Trigger Modal Containing Alert</SprkButton>
        </ExampleContainer>
      </CentralColumnLayout>

    );
  }
}

export default SprkModalDocs;
