import { SprkDropdownModule } from './sprk-dropdown.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkDropdownComponent } from './sprk-dropdown.component';
import { SprkLinkModule } from '../sprk-link/sprk-link.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Dropdown',
  component: SprkDropdownComponent,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('dropdown')}
- The Dropdown should have the \`aria-haspopup="true"\`
attribute. This tells screen readers that the
element has a popup menu.
  `,
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [
    SprkDropdownModule,
    SprkLinkDirectiveModule,
    SprkLinkModule,
    RouterModule.forRoot([
      { path: 'iframe.html', component: SprkDropdownComponent },
    ]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
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
      additionalIconClasses="sprk-c-Icon--l"
      [choices]="[{
          text: 'Option 1',
          value: 'Option 1',
          href: 'https://www.google.com'
        },
        {
          text: 'Option 2',
          value: 'Option 2'
        }
      ]"
    >
    </sprk-dropdown>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: ['sprk-dropdown.component'],
  },
};

export const informational = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-dropdown
      dropdownType="informational"
      additionalTriggerClasses="sprk-b-Link--plain"
      triggerText="Make a selection..."
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
        <a
          sprkLink
          variant="unstyled"
          href="#nogo"
          class="sprk-c-Button sprk-c-Button--tertiary"
        >
          Go Elsewhere
        </a>
      </div>
    </sprk-dropdown>
  `,
});

informational.story = {
  parameters: {
    docs: { iframeHeight: 400 },
    jest: ['sprk-dropdown.component'],
  },
};
