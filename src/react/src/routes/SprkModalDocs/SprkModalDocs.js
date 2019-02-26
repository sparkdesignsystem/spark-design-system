import React from 'react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
// import {Link} from 'react-router-dom';

import { SprkButton, SprkModal } from '@sparkdesignsystem/spark-core-react';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

class SprkModalDocs extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      basic: false
    };
  }

  toggle(key) {
    var mutator = {};
    mutator[key] = !this.state[key];
    this.setState(mutator, ()=>{
      // wait for state to apply before the log
      console.log('trying to set', key, this.state)
    })
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
          <SprkButton variant="secondary" onClick={this.toggle.bind(this, 'basic')}>Trigger Modal</SprkButton>
        </ExampleContainer>

        <ExampleContainer heading="Trigger A Wait Modal">
          <SprkModal title="A Wait Modal" 
                     isVisible={this.state.wait}
                     modalType="wait"
                     confirmClick={()=>{
                       console.log('confirm!')
                       this.toggle('wait')
                     }}
                     cancelClick={this.toggle.bind(this, 'wait')}>
                     
            Some Content for for the wait modal via slots

            <p>This modal will dismiss via timeout after 2 seconds.</p>
          </SprkModal>
          <SprkButton variant="secondary" onClick={()=>{
            this.toggle('wait');
            setTimeout(this.toggle.bind(this, 'wait'), 2000);
          }}>Trigger Modal</SprkButton>
        </ExampleContainer>

      </CentralColumnLayout>
    );
  }
};

export default SprkModalDocs;
