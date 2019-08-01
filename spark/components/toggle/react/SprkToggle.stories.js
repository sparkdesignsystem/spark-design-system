import React from 'react';

import SprkToggle from './SprkToggle';

export default {
  title: 'Components|Toggle',
};

export const defaultStory = () => (
  <SprkToggle title="My Disclaimer" analyticsString="toggle-1">
    <p className="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">
      This is an example of disclaimer content.
      The aria-expanded=&quot;true&quot; attribute will be viewable
      in the DOM on the toggle link when
      this content is shown. When this content is hidden the
      aria-expanded attribute will have
      the value of false. This helps accessibilty devices in
      understanding that the link is a control for expandable content.
    </p>
  </SprkToggle>
);

defaultStory.story = {
  name: 'Default',
};
