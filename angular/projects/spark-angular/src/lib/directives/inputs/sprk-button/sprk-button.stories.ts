import { SprkButtonModule } from './sprk-button.module';
import { storyWrapper } from '../../../../../../../.storybook/helpers/storyWrapper';
import { SprkButtonDirective } from './sprk-button.directive';
import { markdownDocumentationLinkBuilder } from '../../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Button',
  component: SprkButtonDirective,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('components', 'button')}
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
      Button
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

export const disabled = () => ({
  moduleMetadata: modules,
  template: `
    <button
      disabled
      data-id="button-disabled"
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
