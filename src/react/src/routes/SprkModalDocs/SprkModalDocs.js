/* global document */
import React from 'react';
import { SprkButton, SprkModal } from '@sparkdesignsystem/spark-core-react';
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
      basic, wait, info, focusTarget, noFocus,
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
          <SprkModal
            title="Focus Target Test"
            isVisible={focusTarget}
            variant="info"
            onCloseFocusTarget={
              document.getElementById('focusTarget')
            }
            confirmClick={() => {
              this.toggle('focusTarget');
            }}
            cancelClick={() => { this.toggle('focusTarget'); }}
          >
            Closing this modal should focus the focus target.
          </SprkModal>

          <SprkButton onClick={() => { this.toggle('focusTarget'); }}>Trigger Focus Target Modal</SprkButton>
          <SprkButton id="focusTarget" variant="secondary">I am the focus target</SprkButton>

        </ExampleContainer>

        <ExampleContainer heading="No Focus Test">
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
          <SprkButton onClick={() => { this.toggle('noFocus'); }}>Trigger No Focus Modal</SprkButton>
        </ExampleContainer>
      </CentralColumnLayout>

    );
  }
}

export default SprkModalDocs;
