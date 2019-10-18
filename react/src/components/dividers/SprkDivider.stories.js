import React from 'react';
import SprkDivider from './SprkDivider';

export default {
  title: 'Components|Divider',
  component: SprkDivider,
};

export const asASpanElement = () => <SprkDivider idString="divider-1" element="span" />;

asASpanElement.story = {
  name: 'As a <span>',
};

export const asAHrElement = () => <SprkDivider idString="divider-2" element="hr" />;

asAHrElement.story = {
  name: 'As an <hr>',
};
