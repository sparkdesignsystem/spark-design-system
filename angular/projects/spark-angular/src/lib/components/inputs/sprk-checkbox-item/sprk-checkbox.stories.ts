import { storyWrapper } from '../../../../../../../.storybook/helpers/storyWrapper';
import { SprkLabelModule } from '../../../directives/inputs/sprk-label/sprk-label.module';
import { SprkSelectionContainerModule } from '../sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from '../sprk-selection-item-container/sprk-selection-item-container.module';
import { SprkSelectionLabelModule } from '../../../directives/inputs/sprk-selection-label/sprk-selection-label.module';
import { SprkSelectionInputModule } from '../../../directives/inputs/sprk-selection-input/sprk-selection-input.module';
import { SprkFieldErrorModule } from '../../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkIconModule } from '../../sprk-icon/sprk-icon.module';
import { SprkStackItemModule } from '../../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkStackModule } from '../../sprk-stack/sprk-stack.module';
import { SprkFieldsetDirective } from '../../../directives/inputs/sprk-fieldset/sprk-fieldset.directive';
import { SprkLegendDirective } from '../../../directives/inputs/sprk-legend/sprk-legend.directive';
import { SprkFieldsetModule } from '../../../directives/inputs/sprk-fieldset/sprk-fieldset.module';
import { SprkLegendModule } from '../../../directives/inputs/sprk-legend/sprk-legend.module';
import { SprkCheckboxLabelModule } from '../../../directives/inputs/sprk-checkbox-label/sprk-checkbox-label.module';
import { SprkCheckboxLabelDirective } from '../../../directives/inputs/sprk-checkbox-label/sprk-checkbox-label.directive';
import { SprkCheckboxInputModule } from '../../../directives/inputs/sprk-checkbox-input/sprk-checkbox-input.module';
import { SprkCheckboxInputDirective } from '../../../directives/inputs/sprk-checkbox-input/sprk-checkbox-input.directive';
import { SprkCheckboxGroupComponent } from '../sprk-checkbox-group/sprk-checkbox-group.component';
import { SprkCheckboxItemComponent } from './sprk-checkbox-item.component';
import { SprkCheckboxGroupModule } from '../sprk-checkbox-group/sprk-checkbox-group.module';
import { SprkCheckboxItemModule } from './sprk-checkbox-item.module';
import { SprkLabelDirective } from '../../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkHelperTextDirective } from '../../../directives/inputs/sprk-helper-text/sprk-helper-text.directive';
import { SprkHelperTextModule } from '../../../directives/inputs/sprk-helper-text/sprk-helper-text.module';

import { markdownDocumentationLinkBuilder } from '../../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Input/Checkbox',
  component: SprkCheckboxItemComponent,
  subcomponents: {
    SprkCheckboxGroupComponent,
    SprkLabelDirective,
    SprkLegendDirective,
    SprkFieldsetDirective,
    SprkCheckboxLabelDirective,
    SprkFieldErrorDirective,
    SprkHelperTextDirective,
    SprkCheckboxInputDirective,
  },
  decorators: [
    storyWrapper(
      (storyContent) =>
        `<div class="sprk-o-Box">
          <form (submit)="onSubmit($event)" #sampleForm="ngForm">
            ${storyContent}
          </form>
        <div>`,
    ),
  ],
  props: {
    onSubmit(): void {
      this.form_submitted = true;
    },
  },
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('input')}
- Spark checkboxes have been refactored. The version that uses <sprk-selection-container> and <sprk-selection-item-container> will be permanently removed in our Fall 2020 release.
- To update to the new version, replace checkboxes with our
new implementation using <code>sprk-checkbox-group</code>
and <code>sprk-checkbox-item</code> components.
- Use <sprk-checkbox-group>, sprkFieldset directive,
and sprkLegend directive to group together all related choices.
    `,
    docs: { iframeHeight: 200 },
  },
};

const modules = {
  imports: [
    SprkCheckboxGroupModule,
    SprkCheckboxItemModule,
    SprkCheckboxInputModule,
    SprkCheckboxLabelModule,
    SprkFieldsetModule,
    SprkLegendModule,
    SprkLabelModule,
    SprkFieldErrorModule,
    SprkHelperTextModule,
    SprkSelectionItemContainerModule,
    SprkSelectionInputModule,
    SprkSelectionContainerModule,
    SprkSelectionLabelModule,
    SprkIconModule,
    SprkStackItemModule,
    SprkStackModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group>
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Checkbox Group Label
        </legend>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="1"
            name="checkbox_input"
            [(ngModel)]="checkbox_input1"
            sprkCheckboxInput
            #checkboxInput1="ngModel"
            idString="checkbox-1"
            id="checkbox-1"
          >
          <label
            for="checkbox-1"
            sprkCheckboxLabel
          >
            Checkbox Item 1
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="2"
            name="checkbox_input"
            [(ngModel)]="checkbox_input2"
            sprkCheckboxInput
            #checkboxInput2="ngModel"
            idString="checkbox-2"
            id="checkbox-2"
          >
          <label
            for="checkbox-2"
            sprkCheckboxLabel
          >
          Checkbox Item 2
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="3"
            name="checkbox_input"
            [(ngModel)]="checkbox_input3"
            sprkCheckboxInput
            #checkboxInput3="ngModel"
            idString="checkbox-3"
            id="checkbox-3"
          >
          <label
            for="checkbox-3"
            sprkCheckboxLabel
          >
            Checkbox Item 3
          </label>
        </sprk-checkbox-item>
      </fieldset>
    </sprk-checkbox-group>
  `,
});

defaultStory.story = {
  name: 'Default',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
    ],
  },
};

export const defaultHelperText = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group>
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Checkbox Group Label
        </legend>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="1"
            name="checkbox_input"
            [(ngModel)]="checkbox_input1"
            sprkCheckboxInput
            #checkboxInput1="ngModel"
            idString="checkbox-1"
            id="checkbox-1"
          >
          <label
            for="checkbox-1"
            sprkCheckboxLabel
          >
            Checkbox Item 1
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="2"
            name="checkbox_input"
            [(ngModel)]="checkbox_input2"
            sprkCheckboxInput
            #checkboxInput2="ngModel"
            idString="checkbox-2"
            id="checkbox-2"
          >
          <label
            for="checkbox-2"
            sprkCheckboxLabel
          >
          Checkbox Item 2
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="3"
            name="checkbox_input"
            [(ngModel)]="checkbox_input3"
            sprkCheckboxInput
            #checkboxInput3="ngModel"
            idString="checkbox-3"
            id="checkbox-3"
          >
          <label
            for="checkbox-3"
            sprkCheckboxLabel
          >
            Checkbox Item 3
          </label>
        </sprk-checkbox-item>
      </fieldset>
      <div sprkHelperText>
        Optional helper text, used to clarify the field's intent.
      </div>
    </sprk-checkbox-group>
  `,
});

defaultHelperText.story = {
  name: 'Default Helper Text',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
    ],
  },
};

export const invalidCheckbox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group>
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Checkbox Group Label
        </legend>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="1"
            name="checkbox_input"
            [(ngModel)]="checkbox_input1"
            sprkCheckboxInput
            #checkboxInput1="ngModel"
            idString="checkbox-1"
            id="checkbox-1"
          >
          <label
            for="checkbox-1"
            sprkCheckboxLabel
          >
            Checkbox Item 1
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="2"
            name="checkbox_input"
            [(ngModel)]="checkbox_input2"
            sprkCheckboxInput
            #checkboxInput2="ngModel"
            idString="checkbox-2"
            id="checkbox-2"
          >
          <label
            for="checkbox-2"
            sprkCheckboxLabel
          >
            Checkbox Item 2
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="3"
            name="checkbox_input"
            [(ngModel)]="checkbox_input3"
            sprkCheckboxInput
            #checkboxInput3="ngModel"
            idString="checkbox-3"
            id="checkbox-3"
          >
          <label
            for="checkbox-3"
            sprkCheckboxLabel
          >
            Checkbox Item 3
          </label>
        </sprk-checkbox-item>
      </fieldset>
      <span sprkFieldError>
        <sprk-icon
          iconName="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </span>
    </sprk-checkbox-group>
  `,
});

invalidCheckbox.story = {
  name: 'Invalid',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
      'sprk-field-error.directive',
    ],
  },
};

export const disabledCheckbox = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group>
      <fieldset sprkFieldset>
        <legend sprkLegend isDisabled="true">
          Checkbox Group Label
        </legend>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="1"
            name="checkbox_input"
            [(ngModel)]="checkbox_input1"
            sprkCheckboxInput
            #checkboxInput1="ngModel"
            idString="checkbox-1"
            id="checkbox-1"
            disabled
          >
          <label
            for="checkbox-1"
            sprkCheckboxLabel
            isDisabled="true"
          >
            Checkbox Item 1
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="2"
            name="checkbox_input"
            [(ngModel)]="checkbox_input2"
            sprkCheckboxInput
            #checkboxInput2="ngModel"
            idString="checkbox-2"
            id="checkbox-2"
            disabled
          >
          <label
            for="checkbox-2"
            sprkCheckboxLabel
            isDisabled="true"
          >
            Checkbox Item 2
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item>
          <input
            type="checkbox"
            value="3"
            name="checkbox_input"
            [(ngModel)]="checkbox_input3"
            sprkCheckboxInput
            #checkboxInput3="ngModel"
            idString="checkbox-3"
            id="checkbox-3"
            disabled
          >
          <label
            for="checkbox-3"
            sprkCheckboxLabel
            isDisabled="true"
          >
            Checkbox Item 3
          </label>
        </sprk-checkbox-item>
      </fieldset>
    </sprk-checkbox-group>
  `,
});

disabledCheckbox.story = {
  name: 'Disabled',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
    ],
  },
};

export const huge = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Checkbox Group Label
        </legend>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="1"
            name="checkbox_input"
            [(ngModel)]="checkbox_input1"
            sprkCheckboxInput
            #checkboxInput1="ngModel"
            idString="checkbox-1"
            id="checkbox-1"
            variant="huge"
          >
          <label
            for="checkbox-1"
            sprkCheckboxLabel
            variant="huge"
          >
            Checkbox Item 1
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="2"
            name="checkbox_input"
            [(ngModel)]="checkbox_input2"
            sprkCheckboxInput
            #checkboxInput2="ngModel"
            idString="checkbox-2"
            id="checkbox-2"
            variant="huge"
          >
          <label
            for="checkbox-2"
            sprkCheckboxLabel
            variant="huge"
          >
            Checkbox Item 2
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="3"
            name="checkbox_input"
            [(ngModel)]="checkbox_input3"
            sprkCheckboxInput
            #checkboxInput3="ngModel"
            idString="checkbox-3"
            id="checkbox-3"
            variant="huge"
          >
          <label
            for="checkbox-3"
            sprkCheckboxLabel
            variant="huge"
          >
            Checkbox Item 3
          </label>
        </sprk-checkbox-item>
      </fieldset>
    </sprk-checkbox-group>
  `,
});

huge.story = {
  name: 'Huge',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
    ],
  },
};

export const hugeHelperText = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Checkbox Group Label
        </legend>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="1"
            name="checkbox_input"
            [(ngModel)]="checkbox_input1"
            sprkCheckboxInput
            #checkboxInput1="ngModel"
            idString="checkbox-1"
            id="checkbox-1"
            variant="huge"
          >
          <label
            for="checkbox-1"
            sprkCheckboxLabel
            variant="huge"
          >
            Checkbox Item 1
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="2"
            name="checkbox_input"
            [(ngModel)]="checkbox_input2"
            sprkCheckboxInput
            #checkboxInput2="ngModel"
            idString="checkbox-2"
            id="checkbox-2"
            variant="huge"
          >
          <label
            for="checkbox-2"
            sprkCheckboxLabel
            variant="huge"
          >
            Checkbox Item 2
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="3"
            name="checkbox_input"
            [(ngModel)]="checkbox_input3"
            sprkCheckboxInput
            #checkboxInput3="ngModel"
            idString="checkbox-3"
            id="checkbox-3"
            variant="huge"
          >
          <label
            for="checkbox-3"
            sprkCheckboxLabel
            variant="huge"
          >
            Checkbox Item 3
          </label>
        </sprk-checkbox-item>
      </fieldset>
      <div sprkHelperText>
        Optional helper text, used to clarify the field's intent.
      </div>
    </sprk-checkbox-group>
  `,
});

hugeHelperText.story = {
  name: 'Huge Helper Text',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
    ],
  },
};

export const hugeInvalid = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Checkbox Group Label
        </legend>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="1"
            name="checkbox_input"
            [(ngModel)]="checkbox_input1"
            sprkCheckboxInput
            #checkboxInput1="ngModel"
            idString="checkbox-1"
            id="checkbox-1"
            variant="huge"
          >
          <label
            for="checkbox-1"
            sprkCheckboxLabel
            variant="huge"
          >
            Checkbox Item 1
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="2"
            name="checkbox_input"
            [(ngModel)]="checkbox_input2"
            sprkCheckboxInput
            #checkboxInput2="ngModel"
            idString="checkbox-2"
            id="checkbox-2"
            variant="huge"
          >
          <label
            for="checkbox-2"
            sprkCheckboxLabel
            variant="huge"
          >
            Checkbox Item 2
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="3"
            name="checkbox_input"
            [(ngModel)]="checkbox_input3"
            sprkCheckboxInput
            #checkboxInput3="ngModel"
            idString="checkbox-3"
            id="checkbox-3"
            variant="huge"
          >
          <label
            for="checkbox-3"
            sprkCheckboxLabel
            variant="huge"
          >
            Checkbox Item 3
          </label>
        </sprk-checkbox-item>
      </fieldset>
      <span sprkFieldError>
        <sprk-icon
          iconName="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </span>
    </sprk-checkbox-group>
  `,
});

hugeInvalid.story = {
  name: 'Huge Invalid',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
    ],
  },
};

export const hugeDisabled = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend isDisabled="true">
          Checkbox Group Label
        </legend>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="1"
            name="checkbox_input"
            [(ngModel)]="checkbox_input1"
            sprkCheckboxInput
            #checkboxInput1="ngModel"
            idString="checkbox-1"
            id="checkbox-1"
            variant="huge"
            disabled
          >
          <label
            for="checkbox-1"
            sprkCheckboxLabel
            variant="huge"
            isDisabled="true"
          >
            Checkbox Item 1
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="2"
            name="checkbox_input"
            [(ngModel)]="checkbox_input2"
            sprkCheckboxInput
            #checkboxInput2="ngModel"
            idString="checkbox-2"
            id="checkbox-2"
            variant="huge"
            disabled
          >
          <label
            for="checkbox-2"
            sprkCheckboxLabel
            variant="huge"
            isDisabled="true"
          >
            Checkbox Item 2
          </label>
        </sprk-checkbox-item>
        <sprk-checkbox-item variant="huge">
          <input
            type="checkbox"
            value="3"
            name="checkbox_input"
            [(ngModel)]="checkbox_input3"
            sprkCheckboxInput
            #checkboxInput3="ngModel"
            idString="checkbox-3"
            id="checkbox-3"
            variant="huge"
            disabled
          >
          <label
            for="checkbox-3"
            sprkCheckboxLabel
            variant="huge"
            isDisabled="true"
          >
            Checkbox Item 3
          </label>
        </sprk-checkbox-item>
      </fieldset>
    </sprk-checkbox-group>
  `,
});

hugeDisabled.story = {
  name: 'Huge Disabled',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
      'sprk-field-error.directive',
    ],
  },
};

export const hugeLayoutTwo = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Huge Checkbox Group Label
        </legend>
        <sprk-stack itemSpacing="medium" splitAt="small">
          <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-checkbox-item variant="huge">
              <input
                type="checkbox"
                value="1"
                name="checkbox_input"
                [(ngModel)]="checkbox_input1"
                sprkCheckboxInput
                #checkboxInput1="ngModel"
                idString="checkbox-1"
                id="checkbox-1"
                variant="huge"
              >
              <label
                for="checkbox-1"
                sprkCheckboxLabel
                variant="huge"
              >
                Checkbox Item 1
              </label>
            </sprk-checkbox-item>
          </div>
          <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-checkbox-item variant="huge">
              <input
                type="checkbox"
                value="2"
                name="checkbox_input"
                [(ngModel)]="checkbox_input2"
                sprkCheckboxInput
                #checkboxInput2="ngModel"
                idString="checkbox-2"
                id="checkbox-2"
                variant="huge"
              >
              <label
                for="checkbox-2"
                sprkCheckboxLabel
                variant="huge"
              >
                Checkbox Item 2
              </label>
            </sprk-checkbox-item>
          </div>
        </sprk-stack>
      </fieldset>
    </sprk-checkbox-group>
  `,
});

hugeLayoutTwo.story = {
  name: 'Huge Layout - Two',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
    ],
  },
};

export const hugeLayoutFour = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Huge Checkbox Group Label
        </legend>
        <sprk-stack itemSpacing="medium">
          <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-stack itemSpacing="medium" splitAt="small">
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="1"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input1"
                    sprkCheckboxInput
                    #checkboxInput1="ngModel"
                    idString="checkbox-1"
                    id="checkbox-1"
                    variant="huge"
                  >
                  <label
                    for="checkbox-1"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 1
                  </label>
                </sprk-checkbox-item>
              </div>
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="2"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input2"
                    sprkCheckboxInput
                    #checkboxInput2="ngModel"
                    idString="checkbox-2"
                    id="checkbox-2"
                    variant="huge"
                  >
                  <label
                    for="checkbox-2"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 2
                  </label>
                </sprk-checkbox-item>
              </div>
            </sprk-stack>
          </div>
          <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-stack itemSpacing="medium" splitAt="small">
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="3"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input3"
                    sprkCheckboxInput
                    #checkboxInput3="ngModel"
                    idString="checkbox-3"
                    id="checkbox-3"
                    variant="huge"
                  >
                  <label
                    for="checkbox-3"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 3
                  </label>
                </sprk-checkbox-item>
              </div>
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="4"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input4"
                    sprkCheckboxInput
                    #checkboxInput4="ngModel"
                    idString="checkbox-4"
                    id="checkbox-4"
                    variant="huge"
                  >
                  <label
                    for="checkbox-4"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 4
                  </label>
                </sprk-checkbox-item>
              </div>
            </sprk-stack>
          </div>
        </sprk-stack>
      </fieldset>
    </sprk-checkbox-group>
  `,
});

hugeLayoutFour.story = {
  name: 'Huge Layout - Four',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
    ],
  },
};

export const hugeLayoutFive = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Huge Checkbox Group Label
        </legend>
        <sprk-stack itemSpacing="medium">
          <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-stack itemSpacing="medium" splitAt="small">
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="1"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input1"
                    sprkCheckboxInput
                    #checkboxInput1="ngModel"
                    idString="checkbox-1"
                    id="checkbox-1"
                    variant="huge"
                  >
                  <label
                    for="checkbox-1"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 1
                  </label>
                </sprk-checkbox-item>
              </div>
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="2"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input2"
                    sprkCheckboxInput
                    #checkboxInput2="ngModel"
                    idString="checkbox-2"
                    id="checkbox-2"
                    variant="huge"
                  >
                  <label
                    for="checkbox-2"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 2
                  </label>
                </sprk-checkbox-item>
              </div>
            </sprk-stack>
          </div>
          <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-stack itemSpacing="medium" splitAt="small">
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="3"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input3"
                    sprkCheckboxInput
                    #checkboxInput3="ngModel"
                    idString="checkbox-3"
                    id="checkbox-3"
                    variant="huge"
                  >
                  <label
                    for="checkbox-3"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 3
                  </label>
                </sprk-checkbox-item>
              </div>
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="4"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input4"
                    sprkCheckboxInput
                    #checkboxInput4="ngModel"
                    idString="checkbox-4"
                    id="checkbox-4"
                    variant="huge"
                  >
                  <label
                    for="checkbox-4"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 4
                  </label>
                </sprk-checkbox-item>
              </div>
            </sprk-stack>
          </div>
          <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-stack itemSpacing="medium" splitAt="small" additionalClasses="sprk-o-Stack--center-row">
              <div sprkStackItem class="sprk-o-Stack__item--half@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="5"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input5"
                    sprkCheckboxInput
                    #checkboxInput5="ngModel"
                    idString="checkbox-5"
                    id="checkbox-5"
                    variant="huge"
                  >
                  <label
                    for="checkbox-5"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 5
                  </label>
                </sprk-checkbox-item>
              </div>
            </sprk-stack>
          </div>
        </sprk-stack>
      </fieldset>
    </sprk-checkbox-group>
  `,
});

hugeLayoutFive.story = {
  name: 'Huge Layout - Five',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
    ],
  },
};

export const hugeLayoutSix = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-checkbox-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Huge Checkbox Group Label
        </legend>
        <sprk-stack itemSpacing="medium">
          <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-stack itemSpacing="medium" splitAt="small">
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="1"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input1"
                    sprkCheckboxInput
                    #checkboxInput1="ngModel"
                    idString="checkbox-1"
                    id="checkbox-1"
                    variant="huge"
                  >
                  <label
                    for="checkbox-1"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 1
                  </label>
                </sprk-checkbox-item>
              </div>
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="2"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input2"
                    sprkCheckboxInput
                    #checkboxInput2="ngModel"
                    idString="checkbox-2"
                    id="checkbox-2"
                    variant="huge"
                  >
                  <label
                    for="checkbox-2"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 2
                  </label>
                </sprk-checkbox-item>
              </div>
            </sprk-stack>
          </div>
          <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-stack itemSpacing="medium" splitAt="small">
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="3"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input3"
                    sprkCheckboxInput
                    #checkboxInput3="ngModel"
                    idString="checkbox-3"
                    id="checkbox-3"
                    variant="huge"
                  >
                  <label
                    for="checkbox-3"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 3
                  </label>
                </sprk-checkbox-item>
              </div>
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="4"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input4"
                    sprkCheckboxInput
                    #checkboxInput4="ngModel"
                    idString="checkbox-4"
                    id="checkbox-4"
                    variant="huge"
                  >
                  <label
                    for="checkbox-4"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 4
                  </label>
                </sprk-checkbox-item>
              </div>
            </sprk-stack>
          </div>
          <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-stack itemSpacing="medium" splitAt="small">
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="5"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input5"
                    sprkCheckboxInput
                    #checkboxInput5="ngModel"
                    idString="checkbox-5"
                    id="checkbox-5"
                    variant="huge"
                  >
                  <label
                    for="checkbox-5"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 5
                  </label>
                </sprk-checkbox-item>
              </div>
              <div sprkStackItem class="sprk-o-Stack__item--flex@s">
                <sprk-checkbox-item variant="huge">
                  <input
                    type="checkbox"
                    value="6"
                    name="checkbox_input"
                    [(ngModel)]="checkbox_input6"
                    sprkCheckboxInput
                    #checkboxInput6="ngModel"
                    idString="checkbox-6"
                    id="checkbox-6"
                    variant="huge"
                  >
                  <label
                    for="checkbox-6"
                    sprkCheckboxLabel
                    variant="huge"
                  >
                    Checkbox Item 6
                  </label>
                </sprk-checkbox-item>
              </div>
            </sprk-stack>
          </div>
        </sprk-stack>
      </fieldset>
    </sprk-checkbox-group>
  `,
});

hugeLayoutSix.story = {
  name: 'Huge Layout - Six',
  parameters: {
    jest: [
      'sprk-checkbox-input.directive',
      'sprk-checkbox-label.directive',
      'sprk-fieldset.directive',
      'sprk-legend.directive',
      'sprk-label.directive',
      'sprk-checkbox-item.component',
      'sprk-checkbox-group.component',
    ],
  },
};

export const legacyStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label sprkLabel>
        Checkbox Group Label
      </label>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input1"
          sprkSelectionInput
          #checkboxInput1="ngModel"
          idString="checkbox-1"
          id="checkbox-1"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-1"
          sprkSelectionLabel
        >
          Legacy Checkbox Item 1
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input2"
          sprkSelectionInput
          #checkboxInput2="ngModel"
          idString="checkbox-2"
          id="checkbox-2"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-2"
          sprkSelectionLabel
        >
          Legacy Checkbox Item 2
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input3"
          sprkSelectionInput
          #checkboxInput3="ngModel"
          idString="checkbox-3"
          id="checkbox-3"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-3"
          sprkSelectionLabel
        >
          Legacy Checkbox Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
});

legacyStory.story = {
  name: 'Legacy (Deprecated)',
  parameters: {
    jest: [
      'sprk-selection-container.component',
      'sprk-selection-item-container.component',
      'sprk-selection-input.directive',
      'sprk-selection-label.directive',
      'sprk-label.directive',
    ],
  },
};

export const legacyInvalidStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label sprkLabel>
        Checkbox Group Label
      </label>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input1"
          sprkSelectionInput
          #checkboxInput1="ngModel"
          idString="checkbox-1"
          id="checkbox-1"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-1"
          sprkSelectionLabel
        >
          Legacy Checkbox Item 1
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input2"
          sprkSelectionInput
          #checkboxInput2="ngModel"
          idString="checkbox-2"
          id="checkbox-2"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-2"
          sprkSelectionLabel
        >
          Legacy Checkbox Item 2
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input3"
          sprkSelectionInput
          #checkboxInput3="ngModel"
          idString="checkbox-3"
          id="checkbox-3"
          (change)="onSelect($event)"
        >

        <label
          for="checkbox-3"
          sprkSelectionLabel
        >
          Legacy Checkbox Item 3
        </label>
      </sprk-selection-item-container>
      <span sprkFieldError>
        <sprk-icon
          iconType="exclamation-filled"
          additionalClasses="sprk-b-ErrorIcon"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-selection-container>
  `,
});

legacyInvalidStory.story = {
  name: 'Legacy Invalid (Deprecated)',
  parameters: {
    jest: [
      'sprk-selection-container.component',
      'sprk-selection-item-container.component',
      'sprk-selection-input.directive',
      'sprk-selection-label.directive',
      'sprk-label.directive',
      'sprk-field-error.directive',
    ],
  },
};

export const legacyDisabledStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-selection-container>
      <label class="sprk-b-Label--disabled" sprkLabel>
        Checkbox Group Label
      </label>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input1"
          sprkSelectionInput
          #checkboxInput1="ngModel"
          idString="checkbox-1"
          id="checkbox-1"
          (change)="onSelect($event)"
          disabled
        >

        <label
          for="checkbox-1"
          class="sprk-b-Label--disabled"
          sprkSelectionLabel
        >
          Legacy Checkbox Item 1
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input2"
          sprkSelectionInput
          #checkboxInput2="ngModel"
          idString="checkbox-2"
          id="checkbox-2"
          (change)="onSelect($event)"
          disabled
        >

        <label
          for="checkbox-2"
          class="sprk-b-Label--disabled"
          sprkSelectionLabel
        >
          Legacy Checkbox Item 2
        </label>
      </sprk-selection-item-container>

      <sprk-selection-item-container>
        <input
          type="checkbox"
          name="checkbox_input"
          [(ngModel)]="checkbox_input3"
          sprkSelectionInput
          #checkboxInput3="ngModel"
          idString="checkbox-3"
          id="checkbox-3"
          (change)="onSelect($event)"
          disabled
        >

        <label
          for="checkbox-3"
          class="sprk-b-Label--disabled"
          sprkSelectionLabel
        >
          Legacy Checkbox Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
});

legacyDisabledStory.story = {
  name: 'Legacy Disabled (Deprecated)',
  parameters: {
    jest: [
      'sprk-selection-container.component',
      'sprk-selection-item-container.component',
      'sprk-selection-input.directive',
      'sprk-selection-label.directive',
      'sprk-label.directive',
    ],
  },
};
