export default {
  title: 'Components|Dividers',
};

export const asASpanElement = () =>(`
  <span
    class="sprk-c-Divider"
    data-id="divider-1"
  ></span>
`);

asASpanElement.story = {
  name: 'As a <span>',
};

export const asAHrElement = () => (
  `
    <hr
      class="sprk-c-Divider"
      data-id="divider-1"
    >
  `
);

asAHrElement.story = {
  name: 'As an <hr>',
};

