import React from 'react';
import SprkModal from './SprkModal';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import Mask from './Mask';
import CloseButton from './CloseButton';
import ModalFooter from './ModalFooter';

export default {
  title: 'Components/Modal',
  component: SprkModal,
  decorators: [(story) => <div className="sprk-o-Box">{story()}</div>],
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: 450,
    },
    subcomponents: {
      Mask,
      ModalFooter,
      CloseButton,
    },
    jest: ['SprkModal', 'CloseButton', 'Mask', 'ModalFooter'],
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
- Wait Modal visibility is controlled by writing a function
that sets the value of the \`isVisible\` property.
`,
  },
};

export const defaultStory = () => (
  <SprkModal
    title="Are you sure?"
    isVisible
    confirmText="Confirm"
    cancelText="Cancel"
  >
    This is some content that is in a modal. It explains what the modal is for.
    There will also be a way to close the modal.
  </SprkModal>
);

defaultStory.story = {
  name: 'Default',
};

export const info = () => (
  <SprkModal title="Info Modal" isVisible variant="info">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </SprkModal>
);

info.story = {
  name: 'Info',
};

export const wait = () => (
  <SprkModal title="Wait Modal" isVisible variant="wait">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </SprkModal>
);

wait.story = {
  name: 'Wait',
};
