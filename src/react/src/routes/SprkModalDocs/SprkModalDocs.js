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
      info: false
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
          <SprkModal title="A Basic Modal"
                     isVisible={this.state.basic}
                     confirmClick={()=>{
                       console.log('confirm!')
                       this.toggle('basic')
                      }}
                     cancelClick={this.toggle.bind(this, 'basic')}>

            Some Content for for that basic modal via slots

            <p>And Even more text</p>
          </SprkModal>
          <SprkButton onClick={this.toggle.bind(this, 'basic')}>Trigger Choice Modal</SprkButton>
        </ExampleContainer>

        <ExampleContainer heading="Trigger An Info Only Modal">
          <SprkModal title="An Info Only Modal"
                     isVisible={this.state.info}
                     variant="info"
                     confirmClick={()=>{
                       console.log('confirm!')
                       this.toggle('info')
                     }}
                     cancelClick={this.toggle.bind(this, 'info')}>

            Some Content for for the info modal via slots

            <p>The more you know!</p>
          </SprkModal>
          <SprkButton onClick={this.toggle.bind(this, 'info')} >Trigger Info Modal</SprkButton>
        </ExampleContainer>

        <ExampleContainer heading="Trigger A Wait Modal">
          <SprkModal title="A Wait Modal"
                     isVisible={this.state.wait}
                     variant="wait"
                     confirmClick={()=>{
                       console.log('confirm!')
                       this.toggle('wait')
                     }}
                     cancelClick={this.toggle.bind(this, 'wait')}>

            Some Content for for the wait modal via slots

            <p>This modal will dismiss via timeout after 2 seconds.</p>
          </SprkModal>
          <SprkButton onClick={()=>{
            this.toggle('wait');
            setTimeout(this.toggle.bind(this, 'wait'), 2000);
          }}>Trigger Wait Modal</SprkButton>
        </ExampleContainer>

      </CentralColumnLayout>
    );
  }
};

export default SprkModalDocs;
