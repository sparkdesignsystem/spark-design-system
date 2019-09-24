export default {
  title: 'Components|Buttons',
};

export const primary = () =>
  '<button class="sprk-c-Button" data-id="button-1">Button</button>';

export const secondary = () =>
  '<button class="sprk-c-Button sprk-c-Button--secondary" type="button" data-id="button-1">Button</button>';

export const tertiary = () =>
  '<button class="sprk-c-Button sprk-c-Button--tertiary" data-id="button-1">Button</button>';

export const disabled = () =>
  '<button class="sprk-c-Button sprk-is-Disabled" data-id="button-1" disabled>Button</button>';

export const withSpinner = () =>
  '<button class="sprk-c-Button" data-sprk-spinner="click" data-id="button-spinner-1">Submit</button>';

withSpinner.story = {
  name: 'with spinner',
};

export const fullWidthAtSmallViewport = () =>
  '<button class="sprk-c-Button sprk-c-Button--full@s" type="button" data-id="button-1">Button</button>';

fullWidthAtSmallViewport.story = {
  name: 'full width at small viewport',
};

export const fullWidthAtExtraSmallViewport = () =>
  '<button class="sprk-c-Button sprk-c-Button--full@xs" type="button" data-id="button-90">Button</button>';

fullWidthAtExtraSmallViewport.story = {
  name: 'full width at extra small viewport',
};
