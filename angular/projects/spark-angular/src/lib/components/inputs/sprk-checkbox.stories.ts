// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkSelectionContainerModule } from './sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from './sprk-selection-item-container/sprk-selection-item-container.module';
import { SprkSelectionLabelModule } from '../../directives/inputs/sprk-selection-label/sprk-selection-label.module';
import { SprkSelectionInputModule } from '../../directives/inputs/sprk-selection-input/sprk-selection-input.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkFieldsetDirective } from '../../directives/inputs/sprk-fieldset/sprk-fieldset.directive';
import { SprkLegendDirective } from '../../directives/inputs/sprk-legend/sprk-legend.directive';
import { SprkFieldsetModule } from '../../directives/inputs/sprk-fieldset/sprk-fieldset.module';
import { SprkLegendModule } from '../../directives/inputs/sprk-legend/sprk-legend.module';
import { SprkCheckboxLabelModule } from '../../directives/inputs/sprk-checkbox-label/sprk-checkbox-label.module';
import { SprkCheckboxLabelDirective } from '../../directives/inputs/sprk-checkbox-label/sprk-checkbox-label.directive';
import { SprkCheckboxInputModule } from '../../directives/inputs/sprk-checkbox-input/sprk-checkbox-input.module';
import { SprkCheckboxInputDirective } from '../../directives/inputs/sprk-checkbox-input/sprk-checkbox-input.directive';
import { SprkCheckboxGroupComponent } from './sprk-checkbox-group/sprk-checkbox-group.component';
import { SprkCheckboxItemComponent } from './sprk-checkbox-item/sprk-checkbox-item.component';
import { SprkCheckboxGroupModule } from './sprk-checkbox-group/sprk-checkbox-group.module';
import { SprkCheckboxItemModule } from './sprk-checkbox-item/sprk-checkbox-item.module';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkHelperTextDirective } from '../../directives/inputs/sprk-helper-text/sprk-helper-text.directive';
import { SprkHelperTextModule } from '../../directives/inputs/sprk-helper-text/sprk-helper-text.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { FormsModule } from '@angular/forms';

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
    moduleMetadata({
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
        FormsModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div class="sprk-o-Box">
          <form (submit)="onSubmit($event)" #sampleForm="ngForm">
            ${story}
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
    docs: {
      description: {
        component: `
${markdownDocumentationLinkBuilder('input')}
- To update to the new version, replace checkboxes with our
new implementation using <code>sprk-checkbox-group</code>
and <code>sprk-checkbox-item</code> components.
- Use <sprk-checkbox-group>, sprkFieldset directive,
and sprkLegend directive to group together all related choices.
    `,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const defaultStory = () => ({
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

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: [
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-checkbox-item.component',
    'sprk-checkbox-group.component',
  ],
};

export const defaultHelperText = () => ({
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

defaultHelperText.storyName = 'Default Helper Text';

defaultHelperText.parameters = {
  jest: [
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-checkbox-item.component',
    'sprk-checkbox-group.component',
  ],
};

export const invalidCheckbox = () => ({
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
          ariaHidden="true"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </span>
    </sprk-checkbox-group>
  `,
});

invalidCheckbox.storyName = 'Invalid';

invalidCheckbox.parameters = {
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
};

export const disabledCheckbox = () => ({
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

disabledCheckbox.storyName = 'Disabled';

disabledCheckbox.parameters = {
  jest: [
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-checkbox-item.component',
    'sprk-checkbox-group.component',
  ],
};

export const huge = () => ({
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

huge.parameters = {
  jest: [
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-checkbox-item.component',
    'sprk-checkbox-group.component',
  ],
};

export const hugeHelperText = () => ({
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

huge.hugeHelperText = {
  jest: [
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-checkbox-item.component',
    'sprk-checkbox-group.component',
  ],
};

export const hugeInvalid = () => ({
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
          ariaHidden="true"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">
          There is an error on this field.
        </div>
      </span>
    </sprk-checkbox-group>
  `,
});

hugeInvalid.hugeHelperText = {
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
};

export const hugeDisabled = () => ({
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

hugeInvalid.hugeHelperText = {
  jest: [
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-checkbox-item.component',
    'sprk-checkbox-group.component',
  ],
};

export const hugeLayoutTwo = () => ({
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

hugeLayoutTwo.storyName = 'Huge Layout - Two';

hugeLayoutTwo.parameters = {
  jest: [
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-checkbox-item.component',
    'sprk-checkbox-group.component',
  ],
};

export const hugeLayoutFour = () => ({
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

hugeLayoutFour.storyName = 'Huge Layout - Four';

hugeLayoutFour.parameters = {
  jest: [
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-checkbox-item.component',
    'sprk-checkbox-group.component',
  ],
};

export const hugeLayoutFive = () => ({
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

hugeLayoutFive.storyName = 'Huge Layout - Five';

hugeLayoutFive.parameters = {
  jest: [
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-checkbox-item.component',
    'sprk-checkbox-group.component',
  ],
};

export const hugeLayoutSix = () => ({
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

hugeLayoutSix.storyName = 'Huge Layout - Six';

hugeLayoutSix.parameters = {
  jest: [
    'sprk-checkbox-input.directive',
    'sprk-checkbox-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-checkbox-item.component',
    'sprk-checkbox-group.component',
  ],
};

export const legacyStory = () => ({
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
          data-id="checkbox-1"
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
          data-id="checkbox-2"
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
          data-id="checkbox-3"
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

legacyStory.storyName = 'Legacy (Deprecated)';

legacyStory.parameters = {
  jest: [
    'sprk-selection-container.component',
    'sprk-selection-item-container.component',
    'sprk-selection-input.directive',
    'sprk-selection-label.directive',
    'sprk-label.directive',
  ],
};

export const legacyInvalidStory = () => ({
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
          data-id="checkbox-1"
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
          data-id="checkbox-2"
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
          data-id="checkbox-3"
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
          ariaHidden="true"
        ></sprk-icon>
        <div class="sprk-b-ErrorText">There is an error on this field.</div>
      </span>
    </sprk-selection-container>
  `,
});

legacyInvalidStory.storyName = 'Legacy Invalid (Deprecated)';

legacyInvalidStory.parameters = {
  jest: [
    'sprk-selection-container.component',
    'sprk-selection-item-container.component',
    'sprk-selection-input.directive',
    'sprk-selection-label.directive',
    'sprk-label.directive',
    'sprk-field-error.directive',
  ],
};

export const legacyDisabledStory = () => ({
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
          data-id="checkbox-1"
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
          data-id="checkbox-2"
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
          data-id="checkbox-3"
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

legacyDisabledStory.storyName = 'Legacy Disabled (Deprecated)';

legacyDisabledStory.parameters = {
  jest: [
    'sprk-selection-container.component',
    'sprk-selection-item-container.component',
    'sprk-selection-input.directive',
    'sprk-selection-label.directive',
    'sprk-label.directive',
  ],
};
