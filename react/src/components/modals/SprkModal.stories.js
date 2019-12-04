import React from 'react';
import SprkModal from './SprkModal';
import { markdownDocumentationLinkBuilder } from '../../../../storybook-utilities/markdownDocumentationLinkBuilder';
import Mask from './Mask';
import CloseButton from './CloseButton';
import ModalFooter from './ModalFooter';

export default {
  title: 'Components/Modal',
  component: SprkModal,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    subcomponents: {
      Mask,
      ModalFooter,
      CloseButton,
    },
    jest: [
      'SprkModal',
      'CloseButton',
      'Mask',
      'ModalFooter',
    ],
    info: markdownDocumentationLinkBuilder('modal'),
  },

};

export const defaultStory = () => (
  <SprkModal
    title="Default Modal"
    isVisible={true}
    confirmText="Confirm Text"
    cancelText="Cancel Text"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </SprkModal>
);

defaultStory.story = {
  name: 'Default',
};

export const infoStory = () => (
  <SprkModal
    title="Info Modal"
    isVisible={true}
    variant="info"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </SprkModal>
);

infoStory.story = {
  name: 'Info',
};

export const waitStory = () => (
  <SprkModal
    title="Wait Modal"
    isVisible={true}
    variant="wait"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </SprkModal>
);

waitStory.story = {
  name: 'Wait',
};
