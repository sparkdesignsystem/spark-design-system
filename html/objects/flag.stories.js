export default {
  title: 'Components/Flag',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/flag)
    `,
  },
};

export const defaultStory = () => (
  `
    <div class="sprk-o-Flag sprk-o-Flag--stacked">
      <div class="sprk-o-Flag__figure">
        <svg class="sprk-c-Icon sprk-c-Icon--xl" viewBox="0 0 100 100">
          <use xlink:href="#camera" />
        </svg>
      </div>
      <div class="sprk-o-Flag__body">
        <p>
          Lorem ipsum dolor. Sit amet pede. Tempus donec et.
          Suspendisse id inventore integer eum non enim diam habitant.
        </p>
      </div>
    </div>
  `
);

defaultStory.story = {
  name: 'Default',
};
