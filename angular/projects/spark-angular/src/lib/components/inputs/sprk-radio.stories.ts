// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkLabelDirective } from '../../directives/inputs/sprk-label/sprk-label.directive';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkFieldErrorDirective } from '../../directives/inputs/sprk-field-error/sprk-field-error.directive';
import { SprkHelperTextDirective } from '../../directives/inputs/sprk-helper-text/sprk-helper-text.directive';
import { SprkHelperTextModule } from '../../directives/inputs/sprk-helper-text/sprk-helper-text.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import { SprkRadioGroupComponent } from './sprk-radio-group/sprk-radio-group.component';
import { SprkRadioItemComponent } from './sprk-radio-item/sprk-radio-item.component';
import { SprkRadioGroupModule } from './sprk-radio-group/sprk-radio-group.module';
import { SprkRadioItemModule } from './sprk-radio-item/sprk-radio-item.module';
import { SprkSelectionContainerModule } from './sprk-selection-container/sprk-selection-container.module';
import { SprkSelectionItemContainerModule } from './sprk-selection-item-container/sprk-selection-item-container.module';
import { SprkSelectionContainerComponent } from './sprk-selection-container/sprk-selection-container.component';
import { SprkSelectionInputModule } from '../../directives/inputs/sprk-selection-input/sprk-selection-input.module';
import { SprkSelectionInputDirective } from '../../directives/inputs/sprk-selection-input/sprk-selection-input.directive';
import { SprkRadioInputModule } from '../../directives/inputs/sprk-radio-input/sprk-radio-input.module';
import { SprkRadioInputDirective } from '../../directives/inputs/sprk-radio-input/sprk-radio-input.directive';
import { SprkSelectionLabelModule } from '../../directives/inputs/sprk-selection-label/sprk-selection-label.module';
import { SprkSelectionLabelDirective } from '../../directives/inputs/sprk-selection-label/sprk-selection-label.directive';
import { SprkRadioLabelModule } from '../../directives/inputs/sprk-radio-label/sprk-radio-label.module';
import { SprkRadioLabelDirective } from '../../directives/inputs/sprk-radio-label/sprk-radio-label.directive';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkStackItemModule } from '../../directives/sprk-stack-item/sprk-stack-item.module';
import { SprkStackModule } from '../sprk-stack/sprk-stack.module';
import { SprkFieldsetDirective } from '../../directives/inputs/sprk-fieldset/sprk-fieldset.directive';
import { SprkLegendDirective } from '../../directives/inputs/sprk-legend/sprk-legend.directive';
import { SprkFieldsetModule } from '../../directives/inputs/sprk-fieldset/sprk-fieldset.module';
import { SprkLegendModule } from '../../directives/inputs/sprk-legend/sprk-legend.module';
import { FormsModule } from '@angular/forms';

export default {
  title: 'Components/Input/Radio',
  component: SprkRadioItemComponent,
  subcomponents: {
    SprkRadioGroupComponent,
    SprkLabelDirective,
    SprkLegendDirective,
    SprkFieldsetDirective,
    SprkRadioLabelDirective,
    SprkFieldErrorDirective,
    SprkHelperTextDirective,
    SprkRadioInputDirective,
  },
  decorators: [
    moduleMetadata({
      imports: [
        SprkRadioGroupModule,
        SprkRadioItemModule,
        FormsModule,
        SprkRadioInputModule,
        SprkRadioLabelModule,
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
    onSubmit(event): void {
      this.form_submitted = true;
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
${markdownDocumentationLinkBuilder('input')}
- To update to the new version, replace radio with our
new implementation using \`<sprk-radio-group>\`
and \`<sprk-radio-item>\` components.
- Use the \`<sprk-radio-group>\`, \`sprkFieldset\` directive,
and \`sprkLegend\` directive to group together all related choices.
    `,
      },
      iframeHeight: 200,
    },
  },
} as Meta;

export const defaultStory = () => ({
  template: `
   <sprk-radio-group>
     <fieldset sprkFieldset>
       <legend sprkLegend>
         Radio Group Label
       </legend>
       <sprk-radio-item>
         <input
            type="radio"
            value="1"
            name="radio_input"
            [(ngModel)]="radio_input"
            sprkRadioInput
            #radioInput="ngModel"
            idString="radio-1"
            id="radio-1"
          >
          <label
            for="radio-1"
            sprkRadioLabel
          >
            Radio Item 1
          </label>
       </sprk-radio-item>
       <sprk-radio-item>
         <input
           type="radio"
           value="2"
           name="radio_input"
           [(ngModel)]="radio_input"
           sprkRadioInput
           #radioInput="ngModel"
           idString="radio-2"
           id="radio-2"
         >
         <label
           for="radio-2"
           sprkRadioLabel
         >
          Radio Item 2
         </label>
       </sprk-radio-item>
       <sprk-radio-item>
         <input
           type="radio"
           value="3"
           name="radio_input"
           [(ngModel)]="radio_input"
           sprkRadioInput
           #radioInput="ngModel"
           idString="radio-3"
           id="radio-3"
         >
         <label
           for="radio-3"
           sprkRadioLabel
         >
           Radio Item 3
         </label>
       </sprk-radio-item>
     </fieldset>
   </sprk-radio-group>
  `,
});

defaultStory.storyName = 'Default';

defaultStory.parameters = {
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
  ],
};

export const defaultHelperText = () => ({
  template: `
    <sprk-radio-group>
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Radio Group Label
        </legend>
        <sprk-radio-item>
          <input
              type="radio"
              value="1"
              name="radio_input_invalid"
              [(ngModel)]="radio_input"
              sprkRadioInput
              #radioInput="ngModel"
              idString="radio-1"
              id="invalid-radio-1"
            >
          <label
            for="invalid-radio-1"
            sprkRadioLabel
          >
            Radio Item 1
          </label>
        </sprk-radio-item>
        <sprk-radio-item>
          <input
            type="radio"
            value="2"
            name="radio_input_invalid"
            [(ngModel)]="radio_input"
            sprkRadioInput
            #radioInput="ngModel"
            idString="radio-2"
            id="invalid-radio-2"
          >
          <label
            for="invalid-radio-2"
            sprkRadioLabel
          >
            Radio Item 2
          </label>
        </sprk-radio-item>
        <sprk-radio-item>
          <input
            type="radio"
            value="3"
            name="radio_input_invalid"
            [(ngModel)]="radio_input"
            sprkRadioInput
            #radioInput="ngModel"
            idString="radio-3"
            id="invalid-radio-3"
          >
          <label
            for="invalid-radio-3"
            sprkRadioLabel
          >
            Radio Item 3
          </label>
        </sprk-radio-item>
      </fieldset>
      <p sprkHelperText>
        Optional helper text, used to clarify the
        field's intent.
      </p>
    </sprk-radio-group>
  `,
});

defaultHelperText.parameters = {
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
    'sprk-helper-text.directive',
  ],
};

export const invalidRadioButton = () => ({
  template: `
    <sprk-radio-group>
     <fieldset sprkFieldset>
       <legend sprkLegend>
         Radio Group Label
       </legend>
       <sprk-radio-item>
         <input
            type="radio"
            value="1"
            name="radio_input_invalid"
            [(ngModel)]="radio_input"
            sprkRadioInput
            #radioInput="ngModel"
            idString="radio-1"
            id="invalid-radio-1"
          >
          <label
            for="invalid-radio-1"
            sprkRadioLabel
          >
            Radio Item 1
          </label>
        </sprk-radio-item>
        <sprk-radio-item>
          <input
            type="radio"
            value="2"
            name="radio_input_invalid"
            [(ngModel)]="radio_input"
            sprkRadioInput
            #radioInput="ngModel"
            idString="radio-2"
            id="invalid-radio-2"
          >
          <label
            for="invalid-radio-2"
            sprkRadioLabel
          >
            Radio Item 2
          </label>
        </sprk-radio-item>
        <sprk-radio-item>
          <input
            type="radio"
            value="3"
            name="radio_input_invalid"
            [(ngModel)]="radio_input"
            sprkRadioInput
            #radioInput="ngModel"
            idString="radio-3"
            id="invalid-radio-3"
          >
          <label
            for="invalid-radio-3"
            sprkRadioLabel
          >
            Radio Item 3
          </label>
        </sprk-radio-item>
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
    </sprk-radio-group>
  `,
});

invalidRadioButton.parameters = {
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
    'sprk-field-error.directive',
  ],
};

invalidRadioButton.storyName = 'Invalid';

export const disabledRadioButton = () => ({
  template: `
    <sprk-radio-group>
      <fieldset sprkFieldset>
        <legend sprkLegend isDisabled="true">
          Radio Group Label
        </legend>
        <sprk-radio-item>
          <input
            type="radio"
            value="1"
            name="radio_input"
            [(ngModel)]="radio_input"
            sprkRadioInput
            #radioInput="ngModel"
            idString="radio-1"
            id="disabled-radio-1"
            disabled
          >
          <label
            for="disabled-radio-1"
            sprkRadioLabel
            isDisabled="true"
          >
            Radio Item 1
          </label>
      </sprk-radio-item>
      <sprk-radio-item>
        <input
            type="radio"
            value="2"
            name="radio_input"
            [(ngModel)]="radio_input"
            sprkRadioInput
            #radioInput="ngModel"
            idString="radio-2"
            id="disabled-radio-2"
            disabled
          >
          <label
            for="disabled-radio-2"
            sprkRadioLabel
            isDisabled="true"
          >
            Radio Item 2
          </label>
      </sprk-radio-item>
      <sprk-radio-item>
        <input
            type="radio"
            value="3"
            name="radio_input"
            [(ngModel)]="radio_input"
            sprkRadioInput
            #radioInput="ngModel"
            idString="radio-3"
            id="disabled-radio-3"
            disabled
          >
          <label
            for="disabled-radio-3"
            sprkRadioLabel
            isDisabled="true"
          >
            Radio Item 3
          </label>
        </sprk-radio-item>
      </fieldset>
    </sprk-radio-group>
  `,
});

disabledRadioButton.parameters = {
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
  ],
};

disabledRadioButton.storyName = 'Disabled';

export const huge = () => ({
  template: `
   <sprk-radio-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Radio Group Label
        </legend>
        <sprk-radio-item variant="huge">
          <input
            type="radio"
            value="1"
            name="radio_input_huge"
            [(ngModel)]="radio_input"
            sprkRadioInput
            variant="huge"
            #radioInput="ngModel"
            idString="radio-1"
            id="huge-radio-1"
          >
          <label
            for="huge-radio-1"
            sprkRadioLabel
            variant="huge"
          >
            Radio Item 1
          </label>
       </sprk-radio-item>
       <sprk-radio-item variant="huge">
         <input
           type="radio"
           value="2"
           name="radio_input_huge"
           [(ngModel)]="radio_input"
           sprkRadioInput
           variant="huge"
           #radioInput="ngModel"
           idString="radio-2"
           id="huge-radio-2"
         >
         <label
           for="huge-radio-2"
           sprkRadioLabel
           variant="huge"
         >
            Radio Item 2
         </label>
       </sprk-radio-item>
       <sprk-radio-item variant="huge">
        <input
            type="radio"
            value="3"
            name="huge"
            [(ngModel)]="radio_input"
            sprkRadioInput
            variant="huge"
            #radioInput="ngModel"
            idString="radio-3"
            id="huge-radio-3"
          >
          <label
            for="huge-radio-3"
            sprkRadioLabel
            variant="huge"
          >
            Radio Item 3
          </label>
       </sprk-radio-item>
     </fieldset>
   </sprk-radio-group>
  `,
});

huge.parameters = {
  docs: { iframeHeight: 300 },
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
  ],
};

export const hugeHelperText = () => ({
  template: `
    <sprk-radio-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Radio Group Label
        </legend>
        <sprk-radio-item variant="huge">
          <input
              type="radio"
              value="1"
              name="radio_input_helper"
              [(ngModel)]="radio_input"
              sprkRadioInput
              #radioInput="ngModel"
              idString="radio-1"
              id="helper-radio-1"
              variant="huge"
            >
          <label
            for="helper-radio-1"
            sprkRadioLabel
            variant="huge"
          >
            Radio Item 1
          </label>
        </sprk-radio-item>
        <sprk-radio-item variant="huge">
          <input
            type="radio"
            value="2"
            name="radio_input_helper"
            [(ngModel)]="radio_input"
            sprkRadioInput
            #radioInput="ngModel"
            idString="radio-2"
            id="helper-radio-2"
            variant="huge"
          >
          <label
            for="helper-radio-2"
            sprkRadioLabel
            variant="huge"
          >
            Radio Item 2
          </label>
        </sprk-radio-item>
        <sprk-radio-item variant="huge">
          <input
            type="radio"
            value="3"
            name="radio_input_helper"
            [(ngModel)]="radio_input"
            sprkRadioInput
            #radioInput="ngModel"
            idString="radio-3"
            id="helper-radio-3"
            variant="huge"
          >
          <label
            for="helper-radio-3"
            sprkRadioLabel
            variant="huge"
          >
            Radio Item 3
          </label>
        </sprk-radio-item>
      </fieldset>
      <p sprkHelperText>
        Optional helper text, used to clarify the
        field's intent.
      </p>
    </sprk-radio-group>
  `,
});

hugeHelperText.parameters = {
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
    'sprk-helper-text.directive',
  ],
};

export const hugeInvalid = () => ({
  template: `
   <sprk-radio-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend>
          Radio Group Label
        </legend>
        <sprk-radio-item variant="huge">
          <input
            type="radio"
            value="1"
            name="radio_input_huge-invalid"
            [(ngModel)]="radio_input"
            sprkRadioInput
            variant="huge"
            #radioInput="ngModel"
            idString="radio-1"
            id="huge-invalid-radio-1"
          >
          <label
            for="huge-invalid-radio-1"
            sprkRadioLabel
            variant="huge"
          >
            Radio Item 1
          </label>
        </sprk-radio-item>
        <sprk-radio-item variant="huge">
          <input
            type="radio"
            value="2"
            name="radio_input_huge-invalid"
            [(ngModel)]="radio_input"
            sprkRadioInput
            variant="huge"
            #radioInput="ngModel"
            idString="radio-2"
            id="huge-invalid-radio-2"
          >
          <label
            for="huge-invalid-radio-2"
            sprkRadioLabel
            variant="huge"
          >
            Radio Item 2
          </label>
        </sprk-radio-item>
        <sprk-radio-item variant="huge">
          <input
            type="radio"
            value="3"
            name="huge"
            [(ngModel)]="radio_input"
            sprkRadioInput
            variant="huge"
            #radioInput="ngModel"
            idString="radio-3"
            id="huge-invalid-radio-3"
          >
          <label
            for="huge-invalid-radio-3"
            sprkRadioLabel
            variant="huge"
          >
            Radio Item 3
          </label>
        </sprk-radio-item>
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
   </sprk-radio-group>
  `,
});

hugeInvalid.parameters = {
  docs: { iframeHeight: 300 },
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
  ],
};

export const hugeDisabled = () => ({
  template: `
   <sprk-radio-group variant="huge">
      <fieldset sprkFieldset>
        <legend sprkLegend isDisabled="true">
          Radio Group Label
        </legend>
        <sprk-radio-item variant="huge">
          <input
            type="radio"
            value="1"
            name="radio_input"
            [(ngModel)]="radio_input"
            sprkRadioInput
            variant="huge"
            #radioInput="ngModel"
            idString="radio-1"
            id="huge-invalid-radio-1"
            disabled
          >
          <label
            for="huge-invalid-radio-1"
            sprkRadioLabel
            isDisabled="true"
            variant="huge"
          >
            Radio Item 1
          </label>
        </sprk-radio-item>
        <sprk-radio-item variant="huge">
          <input
            type="radio"
            value="2"
            name="radio_input_huge"
            [(ngModel)]="radio_input"
            sprkRadioInput
            variant="huge"
            #radioInput="ngModel"
            idString="radio-2"
            id="huge-invalid-radio-2"
            disabled
          >
          <label
            for="huge-invalid-radio-2"
            sprkRadioLabel
            isDisabled="true"
            variant="huge"
          >
            Radio Item 2
          </label>
        </sprk-radio-item>
        <sprk-radio-item variant="huge">
          <input
            type="radio"
            value="3"
            name="huge"
            [(ngModel)]="radio_input"
            sprkRadioInput
            variant="huge"
            #radioInput="ngModel"
            idString="radio-3"
            id="huge-disabled-radio-3"
            disabled
          >
          <label
            for="huge-disabled-radio-3"
            sprkRadioLabel
            isDisabled="true"
            variant="huge"
          >
            Radio Item 3
          </label>
        </sprk-radio-item>
     </fieldset>
   </sprk-radio-group>
  `,
});

hugeDisabled.parameters = {
  docs: { iframeHeight: 300 },
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
  ],
};

export const hugeLayoutTwo = () => ({
  template: `
  <sprk-radio-group variant="huge">
    <fieldset sprkFieldset>
      <legend sprkLegend>
        Radio Group Label
      </legend>
      <sprk-stack itemSpacing="medium" splitAt="small">
        <div sprkStackItem class="sprk-o-Stack__item--flex@s">
          <sprk-radio-item variant="huge">
            <input
              type="radio"
              value="1"
              name="huge"
              [(ngModel)]="radio_input"
              sprkRadioInput
              variant="huge"
              #radioInput="ngModel"
              idString="radio-1"
              id="huge-layout-radio-1"
            >
            <label
              for="huge-layout-radio-1"
              sprkRadioLabel
              variant="huge"
            >
              Radio Item 1
            </label>
          </sprk-radio-item>
        </div>
        <div sprkStackItem class="sprk-o-Stack__item--flex@s">
          <sprk-radio-item variant="huge">
            <input
              type="radio"
              value="2"
              name="huge"
              [(ngModel)]="radio_input"
              sprkRadioInput
              variant="huge"
              #radioInput="ngModel"
              idString="radio-2"
              id="huge-layout-radio-2"
            >
            <label
              for="huge-layout-radio-2"
              sprkRadioLabel
              variant="huge"
            >
              Radio Item 2
            </label>
          </sprk-radio-item>
        </div>
      </sprk-stack>
    </fieldset>
  </sprk-radio-group>
  `,
});

hugeLayoutTwo.storyName = 'Huge Layout - Two';

hugeLayoutTwo.parameters = {
  docs: { iframeHeight: 400 },
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
  ],
};

export const hugeLayoutFour = () => ({
  template: `
  <sprk-radio-group variant="huge">
    <fieldset sprkFieldset>
      <legend sprkLegend>
        Radio Group Label
      </legend>
      <sprk-stack itemSpacing="medium">
        <div sprkStackItem class="sprk-o-Stack__item--flex@s">
          <sprk-stack itemSpacing="medium" splitAt="small">
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="1"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-1"
                  id="huge-layout-four-radio-1"
                >
                <label
                  for="huge-layout-four-radio-1"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 1
                </label>
              </sprk-radio-item>
            </div>
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="2"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-2"
                  id="huge-layout-four-radio-2"
                >
                <label
                  for="huge-layout-four-radio-2"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 2
                </label>
              </sprk-radio-item>
            </div>
          </sprk-stack>
        </div>
        <div sprkStackItem class="sprk-o-Stack__item--flex@s">
          <sprk-stack itemSpacing="medium" splitAt="small">
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="3"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-3"
                  id="huge-layout-four-radio-3"
                >
                <label
                  for="huge-layout-four-radio-3"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 3
                </label>
              </sprk-radio-item>
            </div>
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="4"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-4"
                  id="huge-layout-four-radio-4"
                >
                <label
                  for="huge-layout-four-radio-4"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 4
                </label>
              </sprk-radio-item>
            </div>
          </sprk-stack>
        </div>
      </sprk-stack>
    </fieldset>
  </sprk-radio-group>
  `,
});

hugeLayoutFour.storyName = 'Huge Layout - Four';

hugeLayoutFour.parameters = {
  docs: { iframeHeight: 400 },
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
  ],
};

export const hugeLayoutFive = () => ({
  template: `
  <sprk-radio-group variant="huge">
    <fieldset sprkFieldset>
      <legend sprkLegend>
        Radio Group Label
      </legend>
      <sprk-stack itemSpacing="medium">
        <div sprkStackItem class="sprk-o-Stack__item--flex@s">
          <sprk-stack itemSpacing="medium" splitAt="small">
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="1"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-1"
                  id="huge-layout-five-radio-1"
                >
                <label
                  for="huge-layout-five-radio-1"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 1
                </label>
              </sprk-radio-item>
            </div>
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="2"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-2"
                  id="huge-layout-five-radio-2"
                >
                <label
                  for="huge-layout-five-radio-2"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 2
                </label>
              </sprk-radio-item>
            </div>
          </sprk-stack>
        </div>
        <div sprkStackItem class="sprk-o-Stack__item--flex@s">
          <sprk-stack itemSpacing="medium" splitAt="small">
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="3"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-3"
                  id="huge-layout-five-radio-3"
                >
                <label
                  for="huge-layout-five-radio-3"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 3
                </label>
              </sprk-radio-item>
            </div>
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="4"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-4"
                  id="huge-layout-five-radio-4"
                >
                <label
                  for="huge-layout-five-radio-4"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 4
                </label>
              </sprk-radio-item>
            </div>
          </sprk-stack>
        </div>
        <div sprkStackItem class="sprk-o-Stack__item--flex@s">
          <sprk-stack itemSpacing="medium" splitAt="small" additionalClasses="sprk-o-Stack--center-row">
            <div sprkStackItem class="sprk-o-Stack__item--half@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="5"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-5"
                  id="huge-layout-five-radio-5"
                >
                <label
                  for="huge-layout-five-radio-5"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 5
                </label>
              </sprk-radio-item>
            </div>
          </sprk-stack>
        </div>
      </sprk-stack>
    </fieldset>
  </sprk-radio-group>
  `,
});

hugeLayoutFive.storyName = 'Huge Layout - Five';

hugeLayoutFive.parameters = {
  docs: { iframeHeight: 400 },
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
  ],
};

export const hugeLayoutSix = () => ({
  template: `
   <sprk-radio-group variant="huge">
    <fieldset sprkFieldset>
      <legend sprkLegend>
        Radio Group Label
      </legend>
      <sprk-stack itemSpacing="medium">
        <div sprkStackItem class="sprk-o-Stack__item--flex@s">
          <sprk-stack itemSpacing="medium" splitAt="small">
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="1"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-1"
                  id="huge-layout-six-radio-1"
                >
                <label
                  for="huge-layout-six-radio-1"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 1
                </label>
              </sprk-radio-item>
            </div>
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="2"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-2"
                  id="huge-layout-six-radio-2"
                >
                <label
                  for="huge-layout-six-radio-2"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 2
                </label>
              </sprk-radio-item>
            </div>
          </sprk-stack>
        </div>
        <div sprkStackItem class="sprk-o-Stack__item--flex@s">
          <sprk-stack itemSpacing="medium" splitAt="small">
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="3"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-3"
                  id="huge-layout-six-radio-3"
                >
                <label
                  for="huge-layout-six-radio-3"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 3
                </label>
              </sprk-radio-item>
            </div>
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
              <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="4"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-4"
                  id="huge-layout-six-radio-4"
                >
                <label
                  for="huge-layout-six-radio-4"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 4
                </label>
              </sprk-radio-item>
            </div>
          </sprk-stack>
        </div>
        <div sprkStackItem class="sprk-o-Stack__item--flex@s">
          <sprk-stack itemSpacing="medium" splitAt="small">
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="5"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-5"
                  id="huge-layout-six-radio-5"
                >
                <label
                  for="huge-layout-six-radio-5"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 5
                </label>
              </sprk-radio-item>
            </div>
            <div sprkStackItem class="sprk-o-Stack__item--flex@s">
            <sprk-radio-item variant="huge">
                <input
                  type="radio"
                  value="6"
                  name="huge"
                  [(ngModel)]="radio_input"
                  sprkRadioInput
                  variant="huge"
                  #radioInput="ngModel"
                  idString="radio-6"
                  id="huge-layout-six-radio-6"
                >
                <label
                  for="huge-layout-six-radio-6"
                  sprkRadioLabel
                  variant="huge"
                >
                  Radio Item 6
                </label>
              </sprk-radio-item>
            </div>
          </sprk-stack>
        </div>
      </sprk-stack>
    </fieldset>
  </sprk-radio-group>
  `,
});

hugeLayoutSix.storyName = 'Huge Layout - Six';

hugeLayoutSix.parameters = {
  docs: { iframeHeight: 400 },
  jest: [
    'sprk-radio-input.directive',
    'sprk-radio-label.directive',
    'sprk-fieldset.directive',
    'sprk-legend.directive',
    'sprk-label.directive',
    'sprk-radio-item.component',
    'sprk-radio-group.component',
  ],
};

export const legacyRadio = () => ({
  template: `
    <sprk-selection-container>
      <label sprkLabel>Radio Group Label</label>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="1"
          name="radio_input"
          [(ngModel)]="radio_input"
          sprkSelectionInput
          #radioInput="ngModel"
          data-id="radio-1"
          id="radio-1"
        >
        <label
          for="radio-1"
          sprkSelectionLabel
        >
          Radio Item 1
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="2"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-2"
          id="radio-2"
        >
        <label
          for="radio-2"
          sprkSelectionLabel
        >
          Radio Item 2
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="3"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-3"
          id="radio-3"
        >
        <label
          for="radio-3"
          sprkSelectionLabel
        >
          Radio Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
});

legacyRadio.storyName = 'Legacy (Deprecated)';

legacyRadio.parameters = {
  jest: [
    'sprk-selection-item-container.component',
    'sprk-selection-container.component',
    'sprk-selection-input.directive',
    'sprk-selection-label.directive',
  ],
};

export const legacyInvalidRadio = () => ({
  template: `
    <sprk-selection-container>
      <label sprkLabel>Radio Group Label</label>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="1"
          name="radio_input"
          [(ngModel)]="radio_input"
          sprkSelectionInput
          #radioInput="ngModel"
          data-id="radio-1"
          id="radio-1"
        >
        <label
          for="radio-1"
          sprkSelectionLabel
        >
          Radio Item 1
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="2"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-2"
          id="radio-2"
        >
        <label
          for="radio-2"
          sprkSelectionLabel
        >
          Radio Item 2
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="3"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-3"
          id="radio-3"
        >
        <label
          for="radio-3"
          sprkSelectionLabel
        >
          Radio Item 3
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

legacyInvalidRadio.storyName = 'Legacy Invalid (Deprecated)';

legacyInvalidRadio.parameters = {
  jest: [
    'sprk-selection-item-container.component',
    'sprk-selection-container.component',
    'sprk-selection-input.directive',
    'sprk-selection-label.directive',
    'sprk-field-error.directive',
  ],
};

export const legacyDisabledRadio = () => ({
  template: `
    <sprk-selection-container>
      <label class="sprk-b-Label--disabled" sprkLabel>Radio Group Label</label>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="1"
          name="radio_input"
          [(ngModel)]="radio_input"
          sprkSelectionInput
          #radioInput="ngModel"
          data-id="radio-1"
          id="radio-1"
          disabled
        >
        <label
          class="sprk-b-Label--disabled"
          for="radio-1"
          sprkSelectionLabel
        >
          Radio Item 1
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="2"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-2"
          id="radio-2"
          disabled
        >
        <label
          class="sprk-b-Label--disabled"
          for="radio-2"
          sprkSelectionLabel
        >
          Radio Item 2
        </label>
      </sprk-selection-item-container>
      <sprk-selection-item-container>
        <input
          type="radio"
          value="3"
          name="radio_input"
          sprkSelectionInput
          [(ngModel)]="radio_input"
          #radioInput="ngModel"
          data-id="radio-3"
          id="radio-3"
          disabled
        >
        <label
          class="sprk-b-Label--disabled"
          for="radio-3"
          sprkSelectionLabel
        >
          Radio Item 3
        </label>
      </sprk-selection-item-container>
    </sprk-selection-container>
  `,
});

legacyDisabledRadio.storyName = 'Legacy Disabled (Deprecated)';

legacyDisabledRadio.parameters = {
  jest: [
    'sprk-selection-item-container.component',
    'sprk-selection-container.component',
    'sprk-selection-input.directive',
    'sprk-selection-label.directive',
  ],
};
