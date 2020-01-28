import { storyWrapper } from '../../../../../../.storybook/helpers/storyWrapper';
import { SprkModalModule } from './sprk-modal.module';
import { SprkModalComponent } from './sprk-modal.component';
import { markdownDocumentationLinkBuilder } from '../../../../../../../storybook-utilities/markdownDocumentationLinkBuilder';

export default {
  title: 'Components/Modal',
  component: SprkModalComponent,
  decorators: [
    storyWrapper(
      storyContent => (
        `<div class="sprk-o-Box">${ storyContent }<div>`
      )
    )
  ],
  parameters: {
    info: `
${markdownDocumentationLinkBuilder('modal')}
- There are two parts to a Modal
    - 1. Modal Trigger (typically in the form of a Button) - When
    pressed, it triggers the Modal to appear.
    - 2. The Modal – Containing the information or actions.
- The Modal and background mask are hidden by default.
- A Modal should not be launched from within another Modal.
- The \`data-id\` property is provided as a hook for automated tools.
Each instance should have a unique \`data-id\` property.
("modal-choice-1", "modal-choice-2", "modal-info-1", etc).
- Dismissing a Wait Modal is done programmatically.
You must write your own function to toggle dismissal through the '(hide)' input.
    `,
    docs: { iframeHeight: 450 },
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
      title="Info Modal"
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
  },
});

export const wait = () => ({
  moduleMetadata: modules,
  template: `
    <sprk-modal
      [(isVisible)]="waitVisible"
      title="Wait Modal"
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
