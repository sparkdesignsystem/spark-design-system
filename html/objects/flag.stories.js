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
        <img
          alt="Provide useful alternative text"
          src="https://spark-assets.netlify.com/spark-placeholder.jpg"
        />
      </div>
      <div class="sprk-o-Flag__body">
        <p>
          Lorem ipsum dolor. Sit amet pede. Tempus donec et.
          Suspendisse id inventore integer eum non enim diam habitant.
          Maecenas nunc per lacus neque egestas.
          Diam quod curabitur. Porttitor vel est id massa posuere tortor
          fringilla est.
        </p>
      </div>
    </div>
  `
);

defaultStory.story = {
  name: 'Default',
};
