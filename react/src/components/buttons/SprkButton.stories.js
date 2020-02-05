import React from 'react';
import SprkButton from './SprkButton';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Button',
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  component: SprkButton,
  parameters: {
    jest: ['SprkButton'],
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
   },
};

export const primary = () => (
  <SprkButton
    element="button"
    idString="button-1"
    analyticsString="button-1-analytics"
  >
    Button
  </SprkButton>
);

export const secondary = () => (
  <SprkButton
    variant="secondary"
    element="button"
    idString="button-2"
    analyticsString="button-2-analytics"
  >
    Button
  </SprkButton>
);

export const tertiary = () => (
  <SprkButton
    variant="tertiary"
    element="button"
    idString="button-3"
    analyticsString="button-3-analytics"
  >
    Button
  </SprkButton>
);

export const disabled = () => (
  <SprkButton
    disabled
    element="button"
    idString="button-4"
    analyticsString="button-4-analytics"
  >
    Button
  </SprkButton>
);

class LoadingWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false }
  }

  render() {
    return  (
      <SprkButton
        loading={this.state.isLoading}
        element="button"
        idString="button-5"
        analyticsString="button-5-analytics"
        onClick={() => { this.setState({'isLoading': true})}}
      >
        Button
      </SprkButton>
    )
  }
}

export const loading = () => (
  <LoadingWrapper></LoadingWrapper>
);

export const fullWidthAtSmallViewport = () => (
  <SprkButton
    element="button"
    idString="button-6"
    analyticsString="button-6-analytics"
    additionalClasses="sprk-c-Button--full@s"
  >
    Button
  </SprkButton>
);

export const fullWidthAtExtraSmallViewport = () => (
  <SprkButton
    element="button"
    idString="button-7"
    analyticsString="button-7-analytics"
    additionalClasses="sprk-c-Button--full@xs"
  >
    Button
  </SprkButton>
);

export const asALinkElement = () => (
  <SprkButton
    element="a"
    href="#nogo"
    idString="button-8"
    analyticsString="button-8-analytics"
  >
    Button
  </SprkButton>
);
