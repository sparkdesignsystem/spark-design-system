import { SprkButtonModule } from './sprk-button.module';
// prettier-ignore
// @ts-ignore
import { moduleMetadata, Meta, componentWrapperDecorator } from '@storybook/angular';
import { SprkButtonDirective } from './sprk-button.directive';
import { SprkSpinnerModule } from '../../directives/sprk-spinner/sprk-spinner.module';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Button',
  component: SprkButtonDirective,
  decorators: [
    moduleMetadata({
      imports: [SprkButtonModule, SprkSpinnerModule],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
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
  - Add \`isSpinning\` on sprkButton directive when spinner is present.
`,
      },
      iframeHeight: 100,
      source: {
        type: 'code',
      },
    },
  },
} as Meta;

export const primary = () => ({
  template: `
    <button
      idString="button-primary"
      sprkButton
    >
      Button
    </button>
  `,
});

primary.parameters = {
  jest: ['sprk-button.directive'],
};

export const secondary = () => ({
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

secondary.parameters = {
  jest: ['sprk-button.directive'],
};

export const tertiary = () => ({
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

tertiary.parameters = {
  jest: ['sprk-button.directive'],
};

export const disabled = () => ({
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

disabled.parameters = {
  jest: ['sprk-button.directive'],
};

export const disabledSecondary = () => ({
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

disabledSecondary.parameters = {
  jest: ['sprk-button.directive'],
};

export const disabledTertiary = () => ({
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

disabledTertiary.parameters = {
  jest: ['sprk-button.directive'],
};

export const spinning = () => {
  return {
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

spinning.parameters = {
  jest: ['sprk-button.directive'],
};

export const spinningSecondary = () => {
  return {
    template: `
      <button
        variant="secondary"
        idString="button-spinning-secondary"
        sprkButton
        [isSpinning]="true"
      >
        <div sprkSpinner variant="secondary"></div>
      </button>
    `,
  };
};

spinningSecondary.parameters = {
  jest: ['sprk-button.directive'],
};

export const spinningTertiary = () => {
  return {
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

spinningTertiary.parameters = {
  jest: ['sprk-button.directive'],
};

export const compact = () => ({
  template: `
    <button
      idString="button-compact"
      sprkButton
      class="sprk-c-Button--compact"
    >
      Button
    </button>
  `,
});

compact.parameters = {
  jest: ['sprk-button.directive'],
};

export const compactSecondary = () => ({
  template: `
    <button
      variant="secondary"
      idString="button-compact-secondary"
      sprkButton
      class="sprk-c-Button--compact"
    >
      Button
    </button>
  `,
});

compactSecondary.parameters = {
  jest: ['sprk-button.directive'],
};

export const compactTertiary = () => ({
  template: `
    <button
      variant="tertiary"
      idString="button-compact-tertiary"
      sprkButton
      class="sprk-c-Button--compact"
    >
      Button
    </button>
  `,
});

compactTertiary.parameters = {
  jest: ['sprk-button.directive'],
};

export const fullWidthAtSmallViewport = () => {
  return {
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

fullWidthAtSmallViewport.storyName = 'Full Width at Small Viewport';

fullWidthAtSmallViewport.parameters = {
  jest: ['sprk-button.directive'],
};

export const fullWidthAtExtraSmallViewport = () => {
  return {
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

fullWidthAtExtraSmallViewport.storyName = 'Full Width at Extra Small Viewport';

fullWidthAtExtraSmallViewport.parameters = {
  jest: ['sprk-button.directive'],
};
