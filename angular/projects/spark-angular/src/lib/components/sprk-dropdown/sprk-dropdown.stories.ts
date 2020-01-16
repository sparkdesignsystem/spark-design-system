import { SprkDropdownModule } from './sprk-dropdown.module';
import { SprkLinkModule } from '../sprk-link/sprk-link.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SprkDropdownComponent } from './sprk-dropdown.component';
import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Dropdown',
  component: SprkDropdownComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: markdownDocumentationLinkBuilder('dropdown'),
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [
    SprkDropdownModule,
    SprkLinkModule,
    RouterModule.forRoot([{ path: 'iframe.html', component: SprkDropdownComponent }]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-dropdown
      screenReaderText="Description of default dropdown."
      dropdownType="base"
      title="My Choices"
      triggerIconType="settings"
      additionalTriggerClasses="sprk-b-Link--plain"
      [choices]="[{
          text: 'Option 1',
          value: 'Option 1'
        },
        {
          text: 'Option 2',
          value: 'Option 2'
        }
      ]"
    >
    </sprk-dropdown>
  `
});

defaultStory.story = {
  name: 'Default',
};

export const informational = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-dropdown
      dropdownType="informational"
      additionalTriggerClasses="sprk-b-Link--plain"
      triggerText="Make a Selection..."
      title="My Choices"
      triggerIconType="chevron-down"
      [choices]="[{
        content: {
          title: 'Choice Title 1',
          infoLine1: 'Information about this choice',
          infoLine2: 'More Information'
        },
        value: 'Choice Title 1',
        active: false
      },
      {
        content: {
          title: 'Choice Title 2',
          infoLine1: 'Information about this choice',
          infoLine2: 'More Information'
        },
        value: 'Choice Title 2',
        active: true
      }
    ]"
    >
      <div
        class="sprk-c-Dropdown__footer sprk-u-TextAlign--center"
        sprkDropdownFooter
      >
        <sprk-link
          linkType="unstyled"
          href="#nogo"
          additionalClasses="sprk-c-Button sprk-c-Button--tertiary"
        >
          Go Elsewhere
        </sprk-link>
      </div>
    </sprk-dropdown>
  `
});

informational.story = {
  parameters: {
    docs: { iframeHeight: 400 },
  },
};
