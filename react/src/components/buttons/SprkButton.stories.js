import React from 'react';
import SprkButton from './SprkButton';
import SprkSpinner from '../spinners/SprkSpinner';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Button',
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  component: SprkButton,
  parameters: {
    jest: ['SprkButton'],
    info: `
${markdownDocumentationLinkBuilder('button')}
##### When to Use \`<button>\` vs. \`<a>\`
SprkButton can either render as a button (\`<button>\`)
or an anchor (\`<a>\`) element. It is very important
for accessibility to choose the correct HTML element.

- Render as a link (\`<a>\`) element if the button navigates to a new page.
  - Set by adding the \`element="a"\` prop to SprkButton.

- Render as a button (\`<button>\`) element if
it performs an action such as: “Submit”, “Add”, “Join”,” etc.
They typically do not navigate to a new page.
  - Set by adding the \`element="button"\` prop to SprkButton.

- The \`element\` prop will default
SprkButton to render as a \`button\` element..

##### Accessibility
- If SprkButton is using an \`<a>\` element, include a \`title=””\` attribute.
- If SprkButton contains an Icon with no text,
provide alternative text for screen readers.
- Screen readers read SprkSpinner as "Loading" by default.
This can change through the \`altText\` prop on SprkSpinner.

##### Guidelines
- If SprkButton is in a form, but is not intended to
submit the form, add \`type=”button”\` the attribute.
- Spinner state requires additional engineering.
  - Use app state to conditionally render between button text and spinner.
  - Add \`isSpinning\` on SprkButton when spinner is present.
`,
  },
};

export const primary = () => (
  <SprkButton idString="button-1" analyticsString="button-1-analytics">
    Button
  </SprkButton>
);

export const secondary = () => (
  <SprkButton
    variant="secondary"
    idString="button-2"
    analyticsString="button-2-analytics"
  >
    Button
  </SprkButton>
);

export const tertiary = () => (
  <SprkButton
    variant="tertiary"
    idString="button-3"
    analyticsString="button-3-analytics"
  >
    Button
  </SprkButton>
);

export const disabled = () => (
  <SprkButton
    isDisabled
    idString="button-5"
    analyticsString="button-5-analytics"
  >
    Button
  </SprkButton>
);

export const disabledSecondary = () => (
  <SprkButton
    isDisabled
    variant="secondary"
    idString="button-6"
    analyticsString="button-6-analytics"
  >
    Button
  </SprkButton>
);

export const disabledTertiary = () => (
  <SprkButton
    isDisabled
    variant="tertiary"
    idString="button-7"
    analyticsString="button-7-analytics"
  >
    Button
  </SprkButton>
);

export const spinning = () => (
  <SprkButton
    idString="button-9"
    analyticsString="button-9-analytics"
    isSpinning
  >
    <SprkSpinner />
  </SprkButton>
);

export const spinningSecondary = () => (
  <SprkButton
    variant="secondary"
    idString="button-10"
    analyticsString="button-10-analytics"
    isSpinning
  >
    <SprkSpinner variant="primary" />
  </SprkButton>
);

export const spinningTertiary = () => (
  <SprkButton
    variant="tertiary"
    idString="button-11"
    analyticsString="button-11-analytics"
    isSpinning
  >
    <SprkSpinner variant="secondary" />
  </SprkButton>
);

export const fullWidthAtSmallViewport = () => (
  <SprkButton
    idString="button-13"
    analyticsString="button-13-analytics"
    additionalClasses="sprk-c-Button--full@s"
  >
    Button
  </SprkButton>
);

export const fullWidthAtExtraSmallViewport = () => (
  <SprkButton
    idString="button-14"
    analyticsString="button-14-analytics"
    additionalClasses="sprk-c-Button--full@xs"
  >
    Button
  </SprkButton>
);

export const asALinkElement = () => (
  <SprkButton
    element="a"
    href="#nogo"
    idString="button-15"
    analyticsString="button-15-analytics"
  >
    Button
  </SprkButton>
);
