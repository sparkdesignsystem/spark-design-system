import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkAccordionModule } from './sprk-accordion.module';
import { SprkAccordionItemModule } from '../sprk-accordion-item/sprk-accordion-item.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SprkAccordionComponent } from './sprk-accordion.component';

export default {
  title: 'Components|Accordion',
  component: SprkAccordionComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `
  ##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/accordion)
    `,
  },
};

const modules = {
  imports: [
    SprkAccordionModule,
    SprkAccordionItemModule,
    RouterModule.forRoot([{ path: 'iframe.html', component: SprkAccordionComponent }]),
    BrowserAnimationsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-accordion>
      <sprk-accordion-item
        title="This is an accordion heading"
        additionalClasses="sprk-u-mbs"
        isOpen="true"
        additionalHeadingClasses="sprk-b-TypeDisplaySeven"
        idString="accordion-item-1"
        analyticsString="object.action.event"
      >
        <p>
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
        </p>
      </sprk-accordion-item>

      <sprk-accordion-item
        title="This is an accordion heading"
        idString="accordion-item-2"
        analyticsString="object.action.event"
        additionalHeadingClasses="sprk-b-TypeDisplaySeven"
      >
        <p>
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
        </p>
      </sprk-accordion-item>

      <sprk-accordion-item
        title="This is an accordion heading"
        idString="accordion-item-3"
        analyticsString="object.action.event"
        additionalHeadingClasses="sprk-b-TypeDisplaySeven"
      >
        <p>
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
          This is an example of accordion content.
        </p>
      </sprk-accordion-item>
    </sprk-accordion>
  `,
});

defaultStory.story = {
  name: 'Default',
};
