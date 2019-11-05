import { SprkButtonModule } from './sprk-button.module';
import { storyWrapper } from '../../../../../../../.storybook/helpers/storyWrapper';

export default {
  title: 'Components|Button',
  component: SprkButtonModule,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `
  ##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/button)
    `,
  },
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

export const spinner = () => {
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

fullWidthAtSmallViewport.story = {
  name: 'Full Width at Small Viewport',
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

fullWidthAtExtraSmallViewport.story = {
  name: 'Full Width at Extra Small Viewport',
};
