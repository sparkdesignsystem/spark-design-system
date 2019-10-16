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
    Default Modal Content
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
    Info Modal Content
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
    Wait Modal Content
  </SprkModal>
);

waitStory.story = {
  name: 'Wait',
};
