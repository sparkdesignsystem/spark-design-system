import React from 'react';

import SprkModal from './SprkModal';

export default {
  title: 'Components|Modal',
  parameters: { component: SprkModal },
};

export const defaultStory = () => (
  <SprkModal
    title="Default Modal"
    isVisible={true}
    confirmText="Yes please"
    cancelText="No thank you"
    confirmClick={() => {
      alert('confirm');
    }}
    cancelClick={() => {
      alert('cancel click');
    }}
  >
    Would you like to buy a mortgage?
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
    Your mortgage has been downloaded.
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
    This mortgage can only be closed with javascript
  </SprkModal>
);

waitStory.story = {
  name: 'Wait',
};
