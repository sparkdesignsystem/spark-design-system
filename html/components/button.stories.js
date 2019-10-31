
export default {
  title: 'Components|Button',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
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

export const spinner = () => (
  `
  <button class="sprk-c-Button" data-sprk-spinner="click" data-id="button-spinner">
    <div class="sprk-c-Spinner sprk-c-Spinner--circle"></div>
  </button>
  `
);
spinner.story = {
  name: 'Spinner',
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
