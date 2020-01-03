export default {
  title: 'Components/Divider',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/divider)
    `,
  },
};

export const defaultStory = () =>(`
  <span
    class="sprk-c-Divider"
    data-id="divider-1"
  ></span>
`);

defaultStory.story = {
  name: 'Default',
};
