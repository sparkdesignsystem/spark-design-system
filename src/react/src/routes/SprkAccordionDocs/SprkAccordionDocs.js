import React, { Component } from 'react';
import {
  SprkAccordion,
  SprkAccordionItem,
} from '@sparkdesignsystem/spark-react';
import CentralColumnLayout from '../../containers/CentralColumnLayout/CentralColumnLayout';
import ExampleContainer from '../../containers/ExampleContainer/ExampleContainer';

class SprkAccordionDocs extends Component {
  constructor(props){
    super(props);

    this.state = {
      accordionItems: [
        {
          heading: 'Heading 1',
        },
        {
          heading: 'Heading 2',
        },
        {
          heading: 'Heading 3',
        },
      ]
    };
  }

  addItem() {
    // const id = +new Date;
    this.setState({
      accordionItems: [
        {
          heading: 'Im the new first item',
        } ,
         ...this.state.accordionItems]
    });
  }

  render() {
    const { accordionItems } = this.state;

    return (
      <CentralColumnLayout>
        <ExampleContainer heading="Accordion">
          <SprkAccordion>
            <SprkAccordionItem
              heading="This is an accordion heading"
              contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
              idString="accordion-item-1"
              analyticsString="analytics_string_goes_here"
            >
              <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
                This is an example of multiple HTML elements used for the content in
                an accordion item.
              </p>

              <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
                <li>List Item One</li>

                <li>List Item Two</li>

                <li>List Item Three</li>
              </ul>
            </SprkAccordionItem>

            <SprkAccordionItem
              heading="This is an accordion heading"
              contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
              idString="accordion-item-1"
              analyticsString="analytics_string_goes_here"
            >
              <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
                This is an example of multiple HTML elements used for the content in
                an accordion item.
              </p>

              <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
                <li>List Item One</li>

                <li>List Item Two</li>

                <li>List Item Three</li>
              </ul>
            </SprkAccordionItem>

            <SprkAccordionItem
              heading="This is an accordion heading"
              contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
              idString="accordion-item-1"
              analyticsString="analytics_string_goes_here"
            >
              <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
                This is an example of multiple HTML elements used for the content in
                an accordion item.
              </p>

              <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
                <li>List Item One</li>

                <li>List Item Two</li>

                <li>List Item Three</li>
              </ul>
            </SprkAccordionItem>
          </SprkAccordion>
        </ExampleContainer>

        <ExampleContainer heading="Accordion (from array)">
          <button className='btn btn-primary' onClick={this.addItem.bind(this)}><b>Add item</b> to the beginning of the list</button>
          <SprkAccordion>
            {accordionItems.map((item, index) => {
              return (
                <SprkAccordionItem
                  heading={item.heading}
                  key={index}
                  {...item}
                  isDefaultOpen={true}
                >
                  this is my content
                </SprkAccordionItem>
              )

            })}
          </SprkAccordion>
        </ExampleContainer>
      </CentralColumnLayout>
    );
  }
}

export default SprkAccordionDocs;
