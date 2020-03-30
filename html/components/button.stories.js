import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Button',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    docs: { iframeHeight: 100 },
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
- If the Button has a spinner setup, the \`aria-label\`
will be set to 'Loading' when the button is
clicked unless you supply a custom
string value to the \`data-sprk-spinner-aria-label\`
attribute.

##### Guidelines
- If a Button is in a form, but is not intended to
submit the form, the attribute \`type=”button”\` must be used.
- If a Button submits a form, do not use \`<input type="submit">\`.
Instead use \`<button type=”submit”>\`
- If a Button is Disabled, you must add the \`disabled\` attribute
in addition to the \`sprk-is-Disabled\` class so that it doesn’t
receive interaction.
`,
  },
};

export const primary = () => (
  `
    <button class="sprk-c-Button" data-id="button-primary">
      Button
    </button>
  `
);

export const secondary = () => (
  `
    <button class="sprk-c-Button sprk-c-Button--secondary" type="button" data-id="button-secondary">
      Button
    </button>
  `
);

export const tertiary = () => (
  `
    <button class="sprk-c-Button sprk-c-Button--tertiary" type="button" data-id="button-tertiary">
      Button
    </button>
  `
);

export const disabled = () => (
  `
  <button class="sprk-c-Button sprk-is-Disabled" data-id="button-disabled" disabled>
    Button
  </button>
  `
);

export const loading = () => (
  `
  <button
    class="sprk-c-Button"
    data-sprk-spinner="click"
    data-id="button-spinner"
    aria-label="Loading"
  >
    <div class="sprk-c-Spinner sprk-c-Spinner--circle"></div>
  </button>
  `
);

loading.story = {
  parameters: {
    jest: ['spinners'],
  }
};

export const loadingSecondary = () => (
  `
  <button
    class="sprk-c-Button sprk-c-Button--secondary"
    data-sprk-spinner="click"
    data-sprk-spinner-lightness="dark"
    data-id="button-spinner-dark"
    aria-label="Loading"
  >
    <div class="sprk-c-Spinner sprk-c-Spinner--dark sprk-c-Spinner--circle"></div>
  </button>
  `
);

loadingSecondary.story = {
  parameters: {
    jest: ['spinners'],
  }
};

export const fullWidthAtSmallViewport = () => (
  `
  <button class="sprk-c-Button sprk-c-Button--full@s" type="button" data-id="button-full-smv">
    Button
  </button>
  `
);

fullWidthAtSmallViewport.story = {
  name: 'Full Width at Small Viewport',
};

export const fullWidthAtExtraSmallViewport = () => (
  `
  <button class="sprk-c-Button sprk-c-Button--full@xs" type="button" data-id="button-full-xsmv">
    Button
  </button>
  `
);

fullWidthAtExtraSmallViewport.story = {
  name: 'Full Width at Extra Small Viewport',
};

export const asALinkElement = () => (
  `
    <a
      class="sprk-c-Button"
      href="#nogo"
      data-id="button-link-element"
    >
      Button
    </a>
  `
);
