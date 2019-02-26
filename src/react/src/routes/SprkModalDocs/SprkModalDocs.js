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
                     confirmClick={()=>{console.log('confirm!')}}
                     cancelClick={this.toggle.bind(this, 'basic')}>
                     
            Some Content for for that basic modal via slots

            <p>And Even more text</p>
          </SprkModal>
          <SprkButton variant="secondary" onClick={this.toggle.bind(this, 'basic')}>Trigger Modal</SprkButton>
        </ExampleContainer>

        <h3>Debug:</h3>
        <p>basic: {this.state.basic}</p>

        {/* <ExampleContainer heading="Trigger A Wait Modal">
          <SprkModal modalType="wait"></SprkModal>
          <SprkButton variant="secondary">Trigger and Wait</SprkButton>
        </ExampleContainer> */}
      </CentralColumnLayout>
    );
  }
};

export default SprkModalDocs;
