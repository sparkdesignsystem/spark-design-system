import { markdownDocumentationLinkBuilder } from '../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Button',
  decorators: [(story) => `<div class="sprk-o-Box">${story()}</div>`],
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

##### Spinning State Setup
- Our spinning button code sample solely represents the rendered state
after Spark's JavaScript functions run.
- If your button will have a spinning state, it needs these attributes:
  - \`class="sprk-c-Button"\` as well as any class modifiers.
  - \`data-sprk-spinner="click"\`
  - \`aria-live="polite"\` (Notifies screen readers of state changes.)
  - See example to see implementation.
- Available functions:
  - \`setSpinning\` – Replaces button content with a spinner,
  and adds classes and accessibility attributes.
  - \`cancelSpinning\` – Removes spinner from button
  content as well as button attributes added from \`setSpinning\`.
  - See Spark's [spinner.js](https://github.com/sparkdesignsystem/spark-design-system/blob/main/html/components/spinners.js)
  for details.
- The following data attributes configure spinning state.
  - \`data-sprk-spinner-role=""\` – Defaults to "progressbar".
  - \`data-sprk-spinner-aria-valuetext=""\` – Defaults to "Loading"
  - \`data-sprk-spinner-aria-label=""\` – Defaults to "Loading"
  - \`data-sprk-spinner-text=""\` – Text on the button before and after
  spinning. Defaults to an empty string.
  - \`data-sprk-spinner-variant="primary|secondary|dark"\` – The variant
  for the spinning icon.
  - \`data-sprk-spinner="is-not-disabled"\` – This is identical to
  \`data-sprk-spinner="click"\` except the button will not be disabled when it
  is clicked. This should be used for buttons that submit a form.


###### Example Spinner Implementation
\`\`\`
<button
  class="sprk-c-Button"
  data-sprk-spinner="click"
  aria-live="polite"
>
    Submit
</button>
\`\`\`

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

export const primary = () =>
  `
    <button class="sprk-c-Button" data-id="button-primary">
      Button
    </button>
  `;

export const secondary = () =>
  `
    <button
      class="sprk-c-Button sprk-c-Button--secondary"
      data-id="button-secondary"
    >
      Button
    </button>
  `;

export const tertiary = () =>
  `
    <button
      class="sprk-c-Button sprk-c-Button--tertiary"
      data-id="button-tertiary"
    >
      Button
    </button>
  `;

export const disabled = () =>
  `
  <button
    class="sprk-c-Button sprk-is-Disabled"
    data-id="button-disabled"
    disabled
  >
    Button
  </button>
  `;

export const disabledSecondary = () =>
  `
  <button
    class="sprk-c-Button sprk-c-Button--secondary sprk-is-Disabled"
    data-id="button-disabled-secondary"
    disabled
  >
    Button
  </button>
  `;

export const disabledTertiary = () =>
  `
  <button
    class="sprk-c-Button sprk-c-Button--tertiary sprk-is-Disabled"
    data-id="button-disabled-tertiary"
    disabled
  >
    Button
  </button>
  `;

export const spinning = () =>
  `
  <button
    class="sprk-c-Button sprk-c-Button--has-spinner"
    data-sprk-spinner="click"
    data-id="button-spinner"
    aria-label="Loading"
    aria-live="polite"
    disabled
  >
    <div
      class="sprk-c-Spinner sprk-c-Spinner--circle"
      role="progressbar"
      aria-valuetext="Loading"></div>
  </button>
  `;

spinning.story = {
  parameters: {
    jest: ['spinners'],
  },
};

export const spinningSecondary = () =>
  `
  <button
    class="sprk-c-Button sprk-c-Button--secondary sprk-c-Button--has-spinner"
    data-sprk-spinner="click"
    data-id="button-spinner-secondary"
    aria-label="Loading"
    aria-live="polite"
    disabled
  >
    <div
    class="sprk-c-Spinner sprk-c-Spinner--circle sprk-c-Spinner--secondary"
    role="progressbar"
    aria-valuetext="Loading"></div>
  </button>
  `;

spinningSecondary.story = {
  parameters: {
    jest: ['spinners'],
  },
};

export const spinningTertiary = () =>
  `
  <button
    class="sprk-c-Button sprk-c-Button--tertiary sprk-c-Button--has-spinner"
    data-sprk-spinner="click"
    data-id="button-spinner-tertiary"
    data-sprk-spinner-variant="secondary"
    aria-label="Loading"
    aria-live="polite"
    disabled
  >
    <div
      class="sprk-c-Spinner sprk-c-Spinner--secondary sprk-c-Spinner--circle"
      role="progressbar"
      aria-valuetext="Loading"></div>
  </button>
  `;

spinningTertiary.story = {
  parameters: {
    jest: ['spinners'],
  },
};

export const fullWidthAtSmallViewport = () =>
  `
  <button
    class="sprk-c-Button sprk-c-Button--full@s"
    data-id="button-full-smv"
  >
    Button
  </button>
  `;

fullWidthAtSmallViewport.story = {
  name: 'Full Width at Small Viewport',
};

export const fullWidthAtExtraSmallViewport = () =>
  `
  <button
    class="sprk-c-Button sprk-c-Button--full@xs"
    data-id="button-full-xsmv"
  >
    Button
  </button>
  `;

fullWidthAtExtraSmallViewport.story = {
  name: 'Full Width at Extra Small Viewport',
};

export const asALinkElement = () =>
  `
    <a
      class="sprk-c-Button"
      href="#nogo"
      data-id="button-link-element"
    >
      Button
    </a>
  `;
