import React, { Component } from 'react';
import { SprkStepper, SprkStepperStep } from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

class SprkStepperDocs extends Component {
  constructor(props){
    super(props);

    this.state={
      steps: [
        {
          title: 'Step 1',
          id: 'foo',
          isSelected: true,
        },
        {
          title: 'Step 2',
          id: 'bar',
        },
        {
          title: 'Step 3',
          // id: 'baz',
        },
      ]
    };
  }

  addItem() {
    // const id = +new Date;
    this.setState({
      steps: [
        {
          title: 'Im the new first item',
          id: +new Date(),
        } ,
         ...this.state.steps]
    });
  }

  render() {


    return (
      <CentralColumnLayout>

        <ExampleContainer heading="Base Stepper">
          <div className="sprk-u-mbm">
            <SprkStepper>
              <SprkStepperStep title="Step One" ></SprkStepperStep>
              <SprkStepperStep title="Step Two" ></SprkStepperStep>
              <SprkStepperStep title="Step Three" ></SprkStepperStep>
            </SprkStepper>
          </div>
        </ExampleContainer>

        <ExampleContainer heading="Stepper with Dark Background">
          <div className="sprk-u-mbm">
            <SprkStepper hasDarkBackground>
              <SprkStepperStep title="Step One" ></SprkStepperStep>
              <SprkStepperStep title="Step Two" ></SprkStepperStep>
              <SprkStepperStep title="Step Three" ></SprkStepperStep>
            </SprkStepper>
          </div>
        </ExampleContainer>

        <ExampleContainer heading="Stepper with Step Descriptions">
          <div className="sprk-u-mbm">
            <SprkStepper>
              <SprkStepperStep title="Step One" isSelected>
                Step 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SprkStepperStep>
              <SprkStepperStep title="Step Two">
                Step 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SprkStepperStep>
              <SprkStepperStep title="Step Three">
                Step 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SprkStepperStep>
              <SprkStepperStep title="Step Four">
                Step 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SprkStepperStep>
            </SprkStepper>
          </div>
        </ExampleContainer>

        <ExampleContainer heading="Stepper with Dark Background and Descriptions">
          <div className="sprk-u-mbm">
            <SprkStepper hasDarkBackground>
              <SprkStepperStep title="Step One">
                Step 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SprkStepperStep>
              <SprkStepperStep title="Step Two" isSelected>
                Step 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SprkStepperStep>
              <SprkStepperStep title="Step Three">
                Step 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SprkStepperStep>
              <SprkStepperStep title="Step Four">
                Step 4 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SprkStepperStep>
            </SprkStepper>
          </div>
        </ExampleContainer>

        <ExampleContainer heading="Stepper Rendered From Array">
          <button className='btn btn-primary' onClick={this.addItem.bind(this)}><b>Add item</b> to the beginning of the list</button>
          <div className="sprk-u-mbm">
            <SprkStepper>
              { this.state.steps.map((item, index) => {
                return (
                  <SprkStepperStep
                    title={item.title}
                    isSelected={item.isSelected}
                    key={index}
                    id={item.id}
                    >
                      This is my content
                  </SprkStepperStep>
                )
              })}
            </SprkStepper>
          </div>
        </ExampleContainer>
      </CentralColumnLayout>
    );
  }
};

export default SprkStepperDocs;
