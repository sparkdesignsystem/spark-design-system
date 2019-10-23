import { addDecorator } from '@storybook/angular';
import { SprkDropdownModule } from './sprk-dropdown.module';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { SprkDropdownComponent } from './sprk-dropdown.component';
import { storyWrapper } from '../../../../../../.storybook/helpers';

export default {
  title: 'Components|Dropdown',
  component: SprkDropdownModule,
  decorators: [
      storyWrapper(
        storyContent => (
          `<div class="sprk-o-Box" >${ storyContent }<div>`
        )
      )
  ],
};

const modules = {
  imports: [
    SprkDropdownModule,
    RouterModule.forRoot([{ path: 'iframe.html', component: SprkDropdownComponent }]),
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
};

export const base = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-dropdown
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
          title: 'Choice Title',
          infoLine1: 'Information about this choice',
          infoLine2: 'More Information'
        },
        value: 'Choice Title 1',
        active: false
      },
      {
        content: {
          title: 'Choice Title',
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
        <a class="sprk-c-Button sprk-c-Button--tertiary" href="#nogo">
          Go Elsewhere
        </a>
      </div>
    </sprk-dropdown>
  `
});
