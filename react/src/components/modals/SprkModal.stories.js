import React from 'react';
import SprkModal from './SprkModal';

export default {
  title: 'Components/Modal',
  component: SprkModal,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: [
      'SprkModal',
      'CloseButton',
      'Mask',
      'ModalFooter',
    ],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/modal)
    `,
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
