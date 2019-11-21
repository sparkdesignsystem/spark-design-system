import React from 'react';
import SprkAward from './SprkAward';
import { markdownLinkBuilder } from '../../../../storybook-utilities/markdownLinkBuilder';

export default {
  title: 'Components/Award',
  component: SprkAward,
  decorators: [
    story => <div className="sprk-o-Box">{story()}</div>
  ],
  parameters: {
    jest: ['SprkAward'] ,
    info: markdownLinkBuilder('award'),
  },
};

export const defaultStory = () => (
  <SprkAward
    heading="Award Component Heading"
    idString="award-1"
    disclaimerText="
          This is an example of disclaimer content.
          The aria-expanded='true' attribute will be
          viewable in the DOM on the toggle link when
          this content is shown. When this content is
          hidden the aria-expanded attribute will have
          the value of false. This helps accessibilty
          devices in understanding that the link is a
          control for expandable content.
        "
    disclaimerTitle="My Disclaimer"
    images={[
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.com/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-1',
        element: 'a',
      },
      {
        href: '#nogo',
        src: 'https://spark-assets.netlify.com/spark-placeholder.jpg',
        alt: 'Spark Placeholder Logo',
        analyticsString: 'award-2',
        element: 'a',
      },
    ]}
  />
);

defaultStory.story = {
  name: 'Default',
};
