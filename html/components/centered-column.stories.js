export default {
  title: 'Components|Centered Column',
  decorators: [
    story => `
      <div class="sprk-o-Box">${story()}</div>
    `,
  ],
};

export const defaultStory = () => (
  '<div class="sprk-o-CenteredColumn" data-id="centered-column"></div>'
);

defaultStory.story = {
  name: 'Default',
};
