import { SprkDropdownModule } from './sprk-dropdown.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkDropdownComponent } from './sprk-dropdown.component';
import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

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
<<<<<<< HEAD
  imports: [SprkDropdownModule, SprkLinkDirectiveModule],
=======
  imports: [
    SprkDropdownModule,
    SprkLinkDirectiveModule,
    RouterModule.forRoot([
      {
        path: 'iframe.html',
        component: SprkDropdownComponent,
      },
    ]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
>>>>>>> e88cfbfa888c5919c427a16481a8b2a0ecc33c94
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-dropdown
      screenReaderText="Description of default dropdown."
      heading="My Choices"
      triggerIconName="settings"
      triggerAdditionalClasses="sprk-b-Link--plain"
      iconAdditionalClasses="sprk-c-Icon--l"
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
      variant="informational"
      triggerAdditionalClasses="sprk-b-Link--plain"
      triggerText="Make a selection..."
      heading="My Choices"
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
        active: true,
        isDefault: true
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
