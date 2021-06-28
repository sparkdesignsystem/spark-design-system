import { SprkDropdownModule } from './sprk-dropdown.module';
import { SprkLinkDirectiveModule } from '../../directives/sprk-link/sprk-link.module';
import { SprkDropdownComponent } from './sprk-dropdown.component';
// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

export default {
  title: 'Components/Dropdown',
  component: SprkDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [
        SprkDropdownModule,
        SprkLinkDirectiveModule,
        RouterModule.forRoot(
          [
            {
              path: 'iframe.html',
              component: SprkDropdownComponent,
            },
          ],
          { relativeLinkResolution: 'legacy' },
        ),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">${story}</div>`,
    ),
  ],
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: `
${markdownDocumentationLinkBuilder('dropdown')}
- The Dropdown should have the \`aria-haspopup="true"\`
attribute. This tells screen readers that the
element has a popup menu.
       `,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
    <sprk-dropdown
      screenReaderText="Description of default dropdown"
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

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: ['sprk-dropdown.component'],
};

export const informational = () => ({
  template: `
    <sprk-dropdown
      variant="informational"
      triggerAdditionalClasses="sprk-b-Link--plain"
      triggerText="Make a selection..."
      heading="My Choices"
      triggerIconName="chevron-down"
      [choices]="[{
        content: {
          title: 'Choice Title 1',
          infoLine1: 'Information about this choice',
          infoLine2: 'Additional Information'
        },
        value: 'Choice Title 1',
        active: false
      },
      {
        content: {
          title: 'Choice Title 2',
          infoLine1: 'Information about this choice',
          infoLine2: 'Additional Information'
        },
        value: 'Choice Title 2',
        active: false,
        isDefault: false
      }
    ]"
    >
      <div
        class="sprk-c-Dropdown__footer sprk-b-Type--center"
        sprkDropdownFooter
      >
        <a
          sprkLink
          variant="unstyled"
          href="#nogo"
          class="sprk-c-Button sprk-c-Button--secondary"
        >
          Go Elsewhere
        </a>
      </div>
    </sprk-dropdown>
  `,
});

informational.parameters = {
  docs: { iframeHeight: 400 },
  jest: ['sprk-dropdown.component'],
};
