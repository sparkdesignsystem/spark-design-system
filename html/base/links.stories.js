export default {
  title: 'Components|Link',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
};

export const defaultLink = () => (
  `
    <a
      class="sprk-b-Link"
      href="#"
      data-id="link-1"
      data-analytics="object.action.event"
    >
      Simple Link
    </a>
  `
);

defaultLink.story = {
  name: 'Default',
};

export const simple = () => (
  `
    <a
      class="sprk-b-Link sprk-b-Link--simple"
      href="#"
      data-id="link-2"
      data-analytics="object.action.event"
    >
      Simple Link
    </a>
  `
);

export const iconWithTextLink = () => (
  `
    <a
      class="sprk-b-Link sprk-b-Link--has-icon sprk-b-Link--simple"
      href="#nogo"
      data-id="link-3"
      data-analytics="object.action.event"
    >
      <svg class="sprk-c-Icon sprk-c-Icon--l sprk-u-mrs sprk-c-Icon--stroke-current-color" viewBox="0 0 100 100">
        <use xlink:href="#communication" />
      </svg>

      Message Us
    </a>
  `
);

export const disabled = () => (
  `
    <a
      class="sprk-b-Link sprk-b-Link--disabled"
      href="#nogo"
      data-id="link-4"
      data-analytics="object.action.event"
    >
      Disabled
    </a>
  `
);