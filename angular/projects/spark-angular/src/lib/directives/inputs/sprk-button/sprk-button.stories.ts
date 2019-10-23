import { addDecorator } from '@storybook/angular';
import { SprkButtonModule } from './sprk-button.module';
import { storyWrapper } from '../../../../../../../.storybook/helpers';

addDecorator(
  storyWrapper(
    storyContent => (
      `<div class="sprk-o-Box" id="button-story">${ storyContent }<div>`
    )
  )
);

export default { title: 'Components|Button' };

const modules = {
  imports: [SprkButtonModule],
};

export const primary = () => ({
  moduleMetadata: modules,
  template: `
    <button
      data-id="button-1"
      sprkButton
    >
      Buttons
    </button>
  `,
});
