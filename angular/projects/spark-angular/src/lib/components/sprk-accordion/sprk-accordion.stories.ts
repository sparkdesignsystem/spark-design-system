import { SprkAccordionModule } from './sprk-accordion.module';
import { SprkAccordionItemModule } from '../sprk-accordion-item/sprk-accordion-item.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkAccordionComponent } from './sprk-accordion.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { SprkAccordionItemComponent } from '../sprk-accordion-item/sprk-accordion-item.component';
// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';

export default {
  title: 'Components/Accordion',
  component: SprkAccordionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SprkAccordionModule,
        SprkAccordionItemModule,
        BrowserAnimationsModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">${story}</div>`,
    ),
  ],
  parameters: {
    subcomponents: {
      SprkAccordionItemComponent,
    },
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: `
${markdownDocumentationLinkBuilder('accordion')}
- The Accordion component in spark-angular consists of two Angular components:
    - \`sprk-accordion\`
    - \`sprk-accordion-item\`
- \`sprk-accordion\` expects you to add \`sprk-accordion-item\`
components as children. Any other content you add outside of a
\`sprk-accordion-item\` will render, but may not be styled correctly.
- If your instance only has one item,
consider using
the [Toggle Component](/docs/components-toggle--default-story) instead.
        `,
      },
      iframeHeight: 420,
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-accordion>
      <sprk-accordion-item
        heading="This is an accordion heading"
        idString="accordion-item-1"
        analyticsString="object.action.event"
      >
        <p class="sprk-b-TypeBodyTwo">
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
        </p>
      </sprk-accordion-item>

      <sprk-accordion-item
        heading="This is an accordion heading"
        idString="accordion-item-2"
        analyticsString="object.action.event"
      >
        <p class="sprk-b-TypeBodyTwo">
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
        </p>
      </sprk-accordion-item>

      <sprk-accordion-item
        heading="This is an accordion heading"
        idString="accordion-item-3"
        analyticsString="object.action.event"
      >
        <p class="sprk-b-TypeBodyTwo">
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
        </p>
      </sprk-accordion-item>
    </sprk-accordion>
  `,
});

defaultStory.parameters = {
  jest: ['sprk-accordion.component', 'sprk-accordion-item.component'],
};

defaultStory.storyName = 'Default';
