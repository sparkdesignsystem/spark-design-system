import React from 'react';
import SprkAccordion from './SprkAccordion';
import SprkAccordionItem from './components/SprkAccordionItem/SprkAccordionItem';

export default {
  title: 'Components/Accordion',
  component: SprkAccordion,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
};

export const defaultStory = () => (
  <SprkAccordion>
    <SprkAccordionItem
      heading="This is an accordion heading"
      contentAddClasses="sprk-o-Stack sprk-o-Stack--medium"
      idString="accordion-item-1"
      analyticsString="analytics_string_goes_here"
    >
      <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
        This is an example of multiple HTML elements
        used for the content in an accordion item.
      </p>

      <ul className="sprk-b-List sprk-b-List--indented sprk-o-Stack__item">
        <li>
          List Item One
        </li>

        <li>
          List Item Two
        </li>

        <li>
          List Item Three
        </li>
      </ul>
    </SprkAccordionItem>

    <SprkAccordionItem
      heading="This is an accordion heading"
      idString="accordion-item-2"
      analyticsString="analytics_string_goes_here"
    >
      <p className="sprk-b-TypeBodyTwo">
        This is an example of accordion content. This is an
        example of accordion content. This is an example of
        accordion content. This is an example of accordion content.
      </p>
    </SprkAccordionItem>

    <SprkAccordionItem
      heading="This is an accordion heading"
      idString="accordion-item-3"
      analyticsString="analytics_string_goes_here"
    >
      <p className="sprk-b-TypeBodyTwo">
        This is an example of accordion content. This is an
        example of accordion content. This is an example of
        accordion content. This is an example of accordion content.
      </p>
    </SprkAccordionItem>
  </SprkAccordion>
);

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkAccordion', 'SprkAccordionItem'] ,
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/accordion)
    `,
  },
};