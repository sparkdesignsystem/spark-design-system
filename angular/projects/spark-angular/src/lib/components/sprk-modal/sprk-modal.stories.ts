import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { action } from '@storybook/addon-actions';
import { SprkModalModule } from './sprk-modal.module';

export default {
  title: 'Components|Modal',
  component: SprkModalModule,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `
  ##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/modal)
    `,
  },
};

const modules = {
  imports: [
    SprkModalModule,
  ],
};

export const defaultStory = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-modal
      [(isVisible)]="choiceVisible"
      title="Are you sure?"
      (hide)="toggleChoiceModal($event)"
      modalType="choice"
      idString="modal-choice-1"
      (confirmClick)="confirmClick($event)"
    >
      This is some modal content.
    </sprk-modal>
  `,
  props: {
    choiceVisible: true,
    toggleChoiceModal: action('Cancel Click'),
    confirmClick: action('Confirm Click'),
  },
});

defaultStory.story = {
  name: 'Default',
};

export const info = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-modal
      [(isVisible)]="infoVisible"
      title="For Your Information"
      (hide)="toggleInfoModal($event)"
      modalType="info"
      idString="modal-info-1"
    >
      This is some content that is in a modal.
      It explains what the modal is for.
      There will also be a way to close the modal.
    </sprk-modal>
  `,
  props: {
    infoVisible: true,
    toggleInfoModal: action('Cancel Click'),
  },
});

export const wait = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-modal
      [(isVisible)]="waitVisible"
      title="Please wait..."
      modalType="wait"
      idString="modal-wait-1"
    >
      This type of modal can't be closed by the
      user.
    </sprk-modal>
  `,
  props: {
    waitVisible: true,
  },
});
