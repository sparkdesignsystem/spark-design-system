export default {
  title: 'Components/Input/Textarea',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
  parameters: {
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/input)
    `,
  },
};

export const textarea = () => (
  `
    <div class="sprk-b-InputContainer">
      <label
        for="textarea"
        class="sprk-b-Label"
      >
        Description
      </label>

      <textarea
        class="sprk-b-TextArea sprk-u-Width-100"
        id="textarea"
        data-id="textarea"
        aria-describedby="textarea--error-container"
      ></textarea>

      <div
        class="sprk-b-ErrorContainer"
        id="textarea--error-container"
      ></div>
    </div>
  `
);

textarea.story = {
  name: 'Default',
};
