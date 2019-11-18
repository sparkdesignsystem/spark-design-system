export default {
  title: 'Components/Centered Column',
  decorators: [
    story => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/centered-column)
    `,
  },
};

export const defaultStory = () => (
  '<div class="sprk-o-CenteredColumn"></div>'
);

defaultStory.story = {
  name: 'Default',
};
