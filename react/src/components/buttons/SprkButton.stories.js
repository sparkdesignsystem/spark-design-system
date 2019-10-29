import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import SprkButton from './SprkButton';


export default {
  title: 'Components|Buttons',
  decorators: [withKnobs],
  component: SprkButton,
  parameters: { jest: ['SprkButton'] },
};

export const primary = () => (
  <SprkButton
    onClick={action('click')}
    onFocus={action('focus')}
    disabled={boolean('disabled', false)}
    element={text('element', 'button') || undefined}
    href={text('href (if element = "a" link)', '') || undefined}
    loading={boolean('loading', false)}
    additionalClasses={text('additionalClasses', '') || undefined}
    idString={text('idString', 'button-1')}
    analyticsString={text('analyticsString', 'button-1-analytics')}
  >
    {text('button text', 'Button')}
  </SprkButton>
);

primary.story = {
  name: 'Primary',
  parameters: {
    info: `
Buttons are points of interaction for a website.
A user is trained to activate a Button in order to
perform an action. When writing button copy, use
active verbs like “create”, “join”, or “discover”
to entice a client. Avoid vague labels like
“learn more” or “get started.” Use consistent
phrases throughout the experience. Clearly
communicate what will happen when clients
click the button. The character limit of the
button copy depends on where it’s placed in
the design. If the button(s) are not in a
modal or dialogue box, each button can have
up to approximately 20 characters or a
maximum width of 280px. If the button(s) are
in a modal or dialogue box, the character limit
depends on the number of buttons. The modal design
requires the buttons to be displayed side-by-side;
therefore, the character limit for the entire line
of buttons within the modal is approximately 20
characters. This means each button should be no
more than six to eight characters depending on
the number of each button and the length of
the copy on the other buttons.

### Information
- Buttons make use of the Large Inset Short spacing.

### Restrictions
- Do not use icons within Buttons.
- Do not use input type="submit" for submit Buttons, use "button" instead.
- If your button is not a submit button then use the type="button" attribute.
Do not exceed 280px in width for a single Button.
- Button content should not wrap to two lines.
- A button HTML element should be
used when doing an action that doesn't have a meaningful URL.
- An anchor HTML element should
be used when you want the look of a Button but are linking to a URL.
- If your Button is disabled, or
becomes disabled, then add the disabled attribute.
- The data-id property is provided
as a hook for automated tools. If
you have multiple instances of the
same variant of a component on the
same page, make sure each instance
has a unique data-id property
("button-primary-1", "button-primary-2", "button-tertiary-1", etc).

Use a Primary button for the main action we want the user to take.
Avoid using more than one Primary button per page.
Please use title case for Primary buttons.
    `,
  },
};

export const secondary = () => (
  <SprkButton
    onClick={action('click')}
    onFocus={action('focus')}
    variant="secondary"
    disabled={boolean('disabled', false)}
    element={text('element', 'button') || undefined}
    href={text('href (if element = "a" link)', '') || undefined}
    idString={text('idString', 'button-2')}
    additionalClasses={text('additionalClasses', '') || undefined}
    analyticsString={text('analyticsString', 'button-2-analytics')}
    loading={boolean('loading', false)}
  >
    {text('button text', 'Button')}
  </SprkButton>
);

secondary.story = {
  name: 'Secondary',
  parameters: {
    info: `
When there is more then one action within a single view, Secondary
Buttons can be a good option to allow the user to
take another action other than the Primary.
Use this when a secondary action is required that is relevant to
the whole page (think of a print page or a share action).
    `,
  },
};

export const tertiary = () => (
  <SprkButton
    onClick={action('click')}
    onFocus={action('focus')}
    variant="tertiary"
    disabled={boolean('disabled', false)}
    element={text('element', 'button') || undefined}
    href={text('href (if element = "a" link)', '') || undefined}
    additionalClasses={text('additionalClasses', '') || undefined}
    idString={text('idString', 'button-3')}
    analyticsString={text('analyticsString', 'button-3-analytics')}
    loading={boolean('loading', false)}
  >
    {text('button text', 'Button')}
  </SprkButton>
);

tertiary.story = {
  name: 'Tertiary',
  parameters: {
    info: `
Use Tertiary buttons to give users the option to navigate to a new page.
Please note that in many cases, a link is preferable to a
Tertiary button when guiding users to another page.
    `,
  },
};

export const disabled = () => (
  <SprkButton
    onClick={action('click')}
    onFocus={action('focus')}
    loading={boolean('loading', false)}
    variant={text('variant', 'tertiary') || undefined}
    element={text('element', 'button') || undefined}
    href={text('href (if element = "a" link)', '') || undefined}
    idString={text('idString', 'button-4')}
    additionalClasses={text('additionalClasses', '') || undefined}
    analyticsString={text('analyticsString', 'button-4-analytics')}
    disabled={boolean('disabled', true)}
  >
    {text('button text', 'Button')}
  </SprkButton>
);

disabled.story = {
  name: 'Disabled',
  parameters: {
    info: `
Use a Disabled Button when an action is unavailable to the user.
The Disabled styles can be applied to all Spark buttons. It's important to
add the disabled attribute in addition to the
sprk-is-Disabled class to indicate
that the button should not receive focus.
    `,
  },
};

export const spinner = () => (
  <SprkButton
    onClick={action('click')}
    onFocus={action('focus')}
    loading={boolean('loading', true)}
    element={text('element', 'button') || undefined}
    href={text('href (if element = "a" link)', '') || undefined}
    idString={text('idString', 'button-7')}
    analyticsString={text('analyticsString', 'button-7-analytics')}
    disabled={boolean('disabled', false)}
    additionalClasses={text('additionalClasses', '') || undefined}
  >
    {text('button text', 'Button')}
  </SprkButton>
);

spinner.story = {
  name: 'Spinner',
  parameters: {
    info: `
Use the Spinner component on any Button that
is being used to save or submit data.
    `,
  },
};

export const fullWidthAtSmallViewport = () => (
  <SprkButton
    onClick={action('click')}
    onFocus={action('focus')}
    loading={boolean('loading', false)}
    element={text('element', 'button') || undefined}
    href={text('href (if element = "a" link)', '') || undefined}
    idString={text('idString', 'button-8')}
    analyticsString={text('analyticsString', 'button-8-analytics')}
    additionalClasses={`sprk-c-Button--full@s ${text('additionalClasses', '')}`}
  >
    {text('button text', 'Button')}
  </SprkButton>
);

fullWidthAtSmallViewport.story = {
  name: 'Full Width At Small Viewport',
  parameters: {
    info: `
Use for a full width button on small
screens that returns to normal width at large screens.
    `,
  },
};

export const fullWidthAtExtraSmallViewport = () => (
  <SprkButton
    onClick={action('click')}
    onFocus={action('focus')}
    loading={boolean('loading', false)}
    element={text('element', 'button') || undefined}
    href={text('href (if element = "a" link)', '') || undefined}
    idString={text('idString', 'button-9')}
    analyticsString={text('analyticsString', 'button-9-analytics')}
    additionalClasses={`sprk-c-Button--full@xs ${text('additionalClasses', '')}`}
  >
    {text('button text', 'Button')}
  </SprkButton>
);

fullWidthAtExtraSmallViewport.story = {
  name: 'Full Width At Extra Small Viewport',
  parameters: {
    info: `
Use for a full width button on extra small
screens that returns to normal width at large screens.
     `,
  },
};

export const asALinkElement = () => (
  <SprkButton
    onClick={action('click')}
    onFocus={action('focus')}
    element={text('element', 'a')}
    loading={boolean('loading', false)}
    href={text('href', 'https://www.sparkdesignsystem.com')}
    idString={text('idString', 'button-10')}
    analyticsString={text('analyticsString', 'button-10-analytics')}
    additionalClasses={text('additionalClasses', '') || undefined}
  >
    {text('button text', 'Button')}
  </SprkButton>
);

asALinkElement.story = {
  name: 'As A Link Element',
  parameters: {
    info: `
An Alert is a way to notify users without interrupting their actions.
Alerts are to appear at the top of the page. They consist of an icon
(in either a success, info, or error state), an area for text, and an
optional dismiss button.
    `,
  },
};
