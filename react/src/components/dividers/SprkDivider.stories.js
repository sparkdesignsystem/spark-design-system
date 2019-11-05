import React from 'react';
import SprkDivider from './SprkDivider';

export default {
  title: 'Components|Divider',
  component: SprkDivider,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: ['SprkDivider'],
    info: `
##### For design and usage information check out the [documentation.](https://spark-docs.netlify.com/using-spark/components/divider)
    `,
  },
};

export const asASpanElement = () => <SprkDivider idString="divider-1" element="span" />;

asASpanElement.story = {
  name: 'As a <span>',
};

export const asAHrElement = () => <SprkDivider idString="divider-2" element="hr" />;

asAHrElement.story = {
  name: 'As an <hr>',
};
