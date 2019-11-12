export default {
  title: 'Components|Centered Column',
  decorators: [
    story => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
};

export const defaultStory = () => (
  '<div class="sprk-o-CenteredColumn"></div>'
);

defaultStory.story = {
  name: 'Default',
};
