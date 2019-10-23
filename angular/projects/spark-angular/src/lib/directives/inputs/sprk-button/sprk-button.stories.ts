import { addDecorator } from '@storybook/angular';
import { SprkButtonModule } from './sprk-button.module';
import { storyWrapper } from '../../../../../../../.storybook/helpers';

addDecorator(
  storyWrapper(
    storyContent => (
      `<div class="sprk-o-Box" id="button-story">${ storyContent }<div>`
    )
  )
);

export default {
  title: 'Components|Buttons',
  component: SprkButtonModule,
 };

const modules = {
  imports: [
    SprkButtonModule,
  ],
};

export const primary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      data-id="button-primary"
      sprkButton
    >
      Buttons
    </button>
  `,
});

export const secondary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      class="sprk-c-Button--secondary"
      data-id="button-secondary"
      sprkButton
    >
      Button
    </button>
  `,
});

export const tertiary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      class="sprk-c-Button--tertiary"
      data-id="button-tertiary"
      sprkButton
    >
      Button
    </button>
  `,
});

export const disabledPrimary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      disabled
      data-id="button-disabled-primary"
      sprkButton
    >
      Button
    </button>
  `,
});

export const disabledSecondary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      disabled
      class="sprk-c-Button--secondary"
      data-id="button-disabled-secondary"
      sprkButton
    >
      Button
    </button>
  `,
});

export const disabledTertiary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      disabled
      class="sprk-c-Button--tertiary"
      data-id="button-disabled-tertiary"
      sprkButton
    >
      Button
    </button>
  `,
});

export const submissionSpinner = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        data-id="button-spinner"
        sprkButton
        [isSpinning]="true"
      >
        Button
      </button>
    `,
  };
};

export const fullWidthAtSmallViewport = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        class="sprk-c-Button--full@s"
        data-id="button-full-width-at-small"
        sprkButton
      >
        Button
      </button>
    `,
  };
};

export const fullWidthAtExtraSmallViewport = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        class="sprk-c-Button--full@xs"
        data-id="button-full-width-at-extra-small"
        sprkButton
      >
        Button
      </button>
    `,
  };
};
