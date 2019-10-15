import React from 'react';

import SprkModal from './SprkModal';

export default {
  title: 'Components|Modal',
  component: SprkModal,
};

export const defaultStory = () => (
  <SprkModal
    title="Default Modal"
    isVisible={true}
    confirmText="Confirm Text"
    cancelText="Cancel Text"
    confirmClick={() => {
      alert('confirm');
    }}
    cancelClick={() => {
      alert('cancel click');
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
    confirmClick={() => {
      alert('confirm click');
    }}
    cancelClick={() => {
      alert('cancel click');
    }}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </SprkModal>
);

infoStory.story = {
  name: 'Info',
};

defaultStory.story = {
  name: 'Default',
};

export const waitStory = () => (
  <SprkModal
    title="Wait Modal"
    isVisible={true}
    variant="wait"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </SprkModal>
);

waitStory.story = {
  name: 'Wait',
};
