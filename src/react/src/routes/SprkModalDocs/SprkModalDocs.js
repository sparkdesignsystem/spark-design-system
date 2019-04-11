import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import { SprkButton, SprkModal } from '@sparkdesignsystem/spark-core-react';
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
    var mutator = {};
    mutator[key] = !this.state[key];
    this.setState(mutator)
  }

  render () {
    return (
      <CentralColumnLayout>
        <ExampleContainer heading="Trigger A Basic Modal">
          <SprkModal title="Default Modal"
                     isVisible={this.state.basic}
                     confirmText={'Yes please'}
                     cancelText={'No thank you'}
                     confirmClick={()=>{
                       console.log('confirm!')
                       this.toggle('basic')
                      }}
                     cancelClick={this.toggle.bind(this, 'basic')}>

            Would you like to buy a mortgage?
          </SprkModal>
          <SprkButton onClick={this.toggle.bind(this, 'basic')}>Trigger Choice Modal</SprkButton>
        </ExampleContainer>

        <ExampleContainer heading="Trigger An Info Only Modal">
          <SprkModal title="Info Modal"
                     isVisible={this.state.info}
                     variant="info"
                     confirmClick={()=>{
                       console.log('confirm!')
                       this.toggle('info')
                     }}
                     cancelClick={this.toggle.bind(this, 'info')}>

            Your mortgage has been downloaded.
          </SprkModal>
          <SprkButton onClick={this.toggle.bind(this, 'info')} >Trigger Info Modal</SprkButton>
        </ExampleContainer>

        <ExampleContainer heading="Trigger A Wait Modal">
          <SprkModal title="Wait Modal"
                     isVisible={this.state.wait}
                     variant="wait"
                     confirmClick={()=>{
                       console.log('confirm!')
                       this.toggle('wait')
                     }}
                     cancelClick={this.toggle.bind(this, 'wait')}>
            This modal will close in 3 seconds.
          </SprkModal>
          <SprkButton onClick={()=>{
            this.toggle('wait');
            setTimeout(this.toggle.bind(this, 'wait'), 3000);
          }}>Trigger Wait Modal</SprkButton>
        </ExampleContainer>

        {/* <ExampleContainer heading="Focus Target Test">
          <SprkModal title="Focus Target Test"
                     isVisible={this.state.focusTarget}
                     variant="info"
                     onCloseFocusTarget={
                       document.getElementById('focusTarget')
                     }
                     confirmClick={()=>{
                       this.toggle('focusTarget')
                     }}
                     cancelClick={this.toggle.bind(this, 'focusTarget')}>

            Closing this modal should focus the focus target.
          </SprkModal>
          <SprkButton onClick={this.toggle.bind(this, 'focusTarget')} >Trigger Focus Target Modal</SprkButton>
          <SprkButton id='focusTarget' variant='secondary'>I'm the focus target</SprkButton>
        </ExampleContainer> */}

        <ExampleContainer heading="No Focus Test">
          <SprkModal title="No Focus Modal"
                     isVisible={this.state.noFocus}
                     variant="info"
                     shouldReturnFocusOnClose={false}
                     confirmClick={()=>{
                       this.toggle('noFocus')
                     }}
                     cancelClick={this.toggle.bind(this, 'noFocus')}>

            Closing this modal should not return focus to the calling element. Focus behavior will depend on browser.
          </SprkModal>
          <SprkButton onClick={this.toggle.bind(this, 'noFocus')} >Trigger No Focus Modal</SprkButton>
        </ExampleContainer>
      </CentralColumnLayout>

    );
  }
};

export default SprkModalDocs;
