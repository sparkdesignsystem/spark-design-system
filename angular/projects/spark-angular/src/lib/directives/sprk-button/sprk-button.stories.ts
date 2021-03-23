import { SprkButtonModule } from './sprk-button.module';
import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkButtonDirective } from './sprk-button.directive';
import { SprkSpinnerModule } from '../../directives/sprk-spinner/sprk-spinner.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

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
\`sprkButton\` can either render as a button (\`<button>\`)
or an anchor (\`<a>\`) element. It is very important
for accessibility to choose the correct HTML element.

- Render as a link (\`<a>\`) element if the button navigates to a new page.
- Render as a button (\`<button>\`) element if
it performs an action such as: “Submit”, “Add”, “Join”, etc.
They typically do not navigate to a new page.

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
- Spinner state requires additional engineering.
  - Use app state to conditionally render between button text and spinner.
  - Add \`isSpinning\` on sprkButton directive when spinner is present
`,
    docs: { iframeHeight: 100 },
  },
};

const modules = {
  imports: [SprkButtonModule, SprkSpinnerModule],
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

export const spinning = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        idString="button-spinning"
        analyticsString="spinning"
        sprkButton
        [isSpinning]="true"
      >
        <div sprkSpinner></div>
      </button>
    `,
  };
};

spinning.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const spinningSecondary = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        variant="secondary"
        idString="button-spinning-secondary"
        sprkButton
        [isSpinning]="true"
      >
        <div sprkSpinner variant="primary"></div>
      </button>
    `,
  };
};

spinningSecondary.story = {
  parameters: {
    jest: ['sprk-button.directive'],
  },
};

export const spinningTertiary = () => {
  return {
    moduleMetadata: modules,
    template: `
      <button
        variant="tertiary"
        idString="button-spinning-tertiary"
        sprkButton
        [isSpinning]="true"
      >
        <div sprkSpinner variant="secondary"></div>
      </button>
    `,
  };
};

spinningTertiary.story = {
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
