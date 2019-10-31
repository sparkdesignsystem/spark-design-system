import { useEffect } from '@storybook/client-api';
import { toggle } from './toggle';
import '../utilities/polyfills/classListSVG';

export default {
  title: 'Components|Toggle',
  decorators: [
    story => `<div class="sprk-o-Box">${story()}</div>`,
  ],
};

export const defaultStory = () => {
  useEffect(() => {
    toggle();
  }, []);

  return `
    <div
      data-sprk-toggle="container"
      data-id="toggle-1"
    >
      <a
        class="
          sprk-b-TypeBodyThree
          sprk-b-Link
          sprk-b-Link--has-icon
          sprk-b-Link--simple
        "
        data-sprk-toggle="trigger"
        href="#"
      >
        <svg
          class="
            sprk-c-Icon sprk-c-Icon--l
            sprk-c-Icon--toggle
            sprk-u-mrs
          "
          data-sprk-toggle="icon"
          viewBox="0 0 64 64"
        >
          <use xlink:href="#chevron-down-circle-two-color"></use>
        </svg>

        My Disclaimer
      </a>

      <div data-sprk-toggle="content">
        <p class="sprk-b-TypeBodyFour sprk-u-pts sprk-u-pbs">
          This is an example of disclaimer content.
          The aria-expanded="true" attribute
          will be viewable in the DOM on
          the toggle link when this content
          is shown. When this content is
          hidden the aria-expanded
          attribute will have the value
          of false. This helps accessibilty devices in
          understanding that the link is a
          control for expandable
          content.
        </p>
      </div>
    </div>
  `;
};

defaultStory.story = {
  name: 'Default',
};
