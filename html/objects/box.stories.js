export default {
  title: 'Components|Box',
  decorators: [
    story => `
      <div class="sprk-o-Box sb-decorate">${story()}</div>
    `,
  ],
};

export const Default = () => (
  `
    <div class="sprk-o-Box"></div>
  `);
