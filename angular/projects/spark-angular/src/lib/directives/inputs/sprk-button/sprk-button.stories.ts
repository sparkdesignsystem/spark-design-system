import { SprkButtonModule } from './sprk-button.module';
import { storyWrapper } from '../../../../../../../.storybook/helpers/storyWrapper';
import { SprkButtonDirective } from './sprk-button.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Button',
  component: SprkButtonDirective,
  decorators: [
    storyWrapper(
      (storyContent) => `<div class="sprk-o-Box">${storyContent}<div>`,
    ),
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('button')}
##### When to Use \`<button>\` vs. \`<a>\`
The Button component can use either a button (\`<button>\`)
or anchor (\`<a>\`) HTML element. It is very important
for accessibility to choose the correct element.

- Button should use an \`<a>\` element if it navigates to a new page.
- Button should use a \`<button>\` element if it is performing
an action, such as: “Submit”, “Add”, “Join”,” etc.
- A Button that does not go to a new page will almost
always use a \`<button>\` element.

##### Accessibility
- If a Button is using an \`<a>\` element, you
must include a \`title=””\` attribute.
- If a Button only includes an Icon with no text,
alternative text must be provided.

##### Guidelines
- If a Button is in a form, but is not intended to
submit the form, the attribute \`type=”button”\` must be used.
- If a Button submits a form, do not use \`<input type="submit">\`.
Instead use \`<button type=”submit”>\`
- If a Button is Disabled, you must add the \`disabled\` attribute
in addition to the \`sprk-is-Disabled\` class so that it doesn’t
receive interaction.
`,
    docs: { iframeHeight: 100 },
  },
};

const modules = {
  imports: [SprkButtonModule],
};

export const primary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      idString="button-primary"
      sprkButton
    >
      Button
    </button>
  `,
});

primary.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const secondary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      variant="secondary"
      idString="button-secondary"
      sprkButton
    >
      Button
    </button>
  `,
});

secondary.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const tertiary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      variant="tertiary"
      idString="button-tertiary"
      sprkButton
    >
      Button
    </button>
  `,
});

tertiary.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const quaternary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      variant="quaternary"
      idString="button-quaternary"
      sprkButton
    >
      Button
    </button>
  `,
});

quaternary.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const disabled = () => ({
  moduleMetadata: modules,
  template: `
    <button
      disabled
      idString="button-disabled"
      sprkButton
    >
      Button
    </button>
  `,
});

disabled.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const disabledSecondary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      disabled
      idString="button-disabled-secondary"
      sprkButton
      variant="secondary"
    >
      Button
    </button>
  `,
});

disabledSecondary.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const disabledTertiary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      disabled
      idString="button-disabled-tertiary"
      sprkButton
      variant="tertiary"
    >
      Button
    </button>
  `,
});

disabledTertiary.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const disabledQuaternary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      disabled
      idString="button-disabled-quaternary"
      sprkButton
      variant="quaternary"
    >
      Button
    </button>
  `,
});

disabledQuaternary.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const loading = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        idString="button-loading"
        analyticsString="loading"
        sprkButton
        [isSpinning]="true"
      >
        Button
      </button>
    `,
  };
};

loading.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const loadingSecondary = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        variant="secondary"
        idString="button-loading-secondary"
        sprkButton
        [isSpinning]="true"
      >
        Button
      </button>
    `,
  };
};

loadingSecondary.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const loadingTertiary = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        variant="tertiary"
        idString="button-loading-tertiary"
        sprkButton
        [isSpinning]="true"
      >
        Button
      </button>
    `,
  };
};

loadingTertiary.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const loadingQuaternary = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        variant="quaternary"
        idString="button-loading-quaternary"
        sprkButton
        [isSpinning]="true"
      >
        Button
      </button>
    `,
  };
};

loadingQuaternary.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const fullWidthAtSmallViewport = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        class="sprk-c-Button--full@s"
        idString="button-full-width-at-small"
        sprkButton
      >
        Button
      </button>
    `,
  };
};

fullWidthAtSmallViewport.story = {
  name: 'Full Width at Small Viewport',
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const fullWidthAtExtraSmallViewport = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        class="sprk-c-Button--full@xs"
        idString="button-full-width-at-extra-small"
        sprkButton
      >
        Button
      </button>
    `,
  };
};

fullWidthAtExtraSmallViewport.story = {
  name: 'Full Width at Extra Small Viewport',
  parameters: {
    jest: ['sprk-button.directive'],
  },
};
