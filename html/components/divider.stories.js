export default {
  title: 'Components|Divider',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/divider)
    `,
  },
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
      data-id="divider-2"
    >
  `
);

asAHrElement.story = {
  name: 'As an <hr>',
};

