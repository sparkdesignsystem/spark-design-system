import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SparkInputContainerModule } from './sprk-input-container/sprk-input-container.module';
import { SprkInputModule } from '../../directives/inputs/sprk-input/sprk-input.module';
import { SprkIconModule } from '../sprk-icon/sprk-icon.module';
import { SprkLabelModule } from '../../directives/inputs/sprk-label/sprk-label.module';
import { SprkFieldErrorModule } from '../../directives/inputs/sprk-field-error/sprk-field-error.module';
import { SprkIconInputContainerComponent } from './sprk-icon-input-container/sprk-icon-input-container.component';
import { SprkIconInputContainerModule } from './sprk-icon-input-container/sprk-icon-input-container.module';


export default {
  title: 'Components/Input/Percentage',
  component: SprkIconInputContainerComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">
          <form (submit)="onSubmit($event)" #sampleForm="ngForm">
            ${storyContent}
          </form>
        <div>`
      )
    )
  ],
  props: {
    onSubmit(event): void {
      this.form_submitted = true;
    }
  },
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
    docs: { iframeHeight: 200 },
  }
};

const modules = {
  imports: [
    SparkInputContainerModule,
    SprkLabelModule,
    SprkInputModule,
    SprkIconModule,
    SprkFieldErrorModule,
    SprkIconInputContainerModule,
  ],
};

export const percentageInput = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-icon-input-container iconContainerClasses="sprk-b-InputContainer__icon-container--narrow">
      <label sprkLabel>Percentage</label>
      <sprk-icon
        iconType="percent"
        additionalClasses="sprk-b-InputContainer__icon sprk-b-InputContainer__icon--right"
        sprk-input-icon
      ></sprk-icon>
      <input
        class="sprk-b-InputContainer__input--has-icon-right"
        name="percentage"
        type="tel"
        sprkInput
      />
    </sprk-icon-input-container>
  `,
});

percentageInput.story = {
  name: 'Default',
};
