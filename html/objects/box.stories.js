export default {
  title: 'Components/Box',
  decorators: [
    story => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/box)
    `,
  },
};

export const defaultBox = () => ('<div class="sprk-o-Box"></div>');

defaultBox.story = {
  name: 'Default',
};
