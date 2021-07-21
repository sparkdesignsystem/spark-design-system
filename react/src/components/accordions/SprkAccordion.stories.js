import React from 'react';
import SprkAccordion from './SprkAccordion';
import SprkAccordionItem from './components/SprkAccordionItem/SprkAccordionItem';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Accordion',
  component: SprkAccordion,
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  parameters: {
    subcomponents: { SprkAccordionItem },
    info: `
${markdownDocumentationLinkBuilder('accordion')}
- If your instance only has one item,
consider using
the [Toggle Component](/docs/components-toggle--default-story) instead.
`,
  },
};

export const defaultStory = () => (
  <SprkAccordion additionalClasses="sprk-c-Accordion--no-top-border">
    <SprkAccordionItem
      heading="This is an accordion heading"
      contentAdditionalClasses="sprk-o-Stack sprk-o-Stack--medium"
    >
      <p className="sprk-b-TypeBodyTwo sprk-o-Stack__item">
        This is an example of accordion content. This is an example of accordion
        content. This is an example of accordion content. This is an example of
        accordion content.
      </p>
    </SprkAccordionItem>

    <SprkAccordionItem heading="This is an accordion heading">
      <p className="sprk-b-TypeBodyTwo">
        This is an example of accordion content. This is an example of accordion
        content. This is an example of accordion content. This is an example of
        accordion content.
      </p>
    </SprkAccordionItem>

    <SprkAccordionItem heading="This is an accordion heading">
      <p className="sprk-b-TypeBodyTwo">
        This is an example of accordion content. This is an example of accordion
        content. This is an example of accordion content. This is an example of
        accordion content.
      </p>
    </SprkAccordionItem>
  </SprkAccordion>
);

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['SprkAccordion', 'SprkAccordionItem'],
  },
};
